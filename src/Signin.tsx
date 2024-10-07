import google from "./assets/google.png";
import facebook from "./assets/Facebook_Logo_Primary.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/reducers/user.reducer";
import { User } from "./type/user.type";
import { store } from "./redux/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Signin = () => {
  const [username, setUsername] = useState<string>(); //store username from input
  const [password, setPassword] = useState<string>(); //store password from input
  const [authed, setAuthed] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(["Jwt"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(cookies.Jwt);
    if (!authed) return;
    axios
      .get(`http://localhost:5000/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.Jwt}`,
        },
      })
      .then(async (response) => {
        const data = response.data;
        const user: User = {
          id: data.id,
          username: data.username,
          email: data.email,
          avatarPath: data.avatarPath,
        };
        await dispatch(addUser(user)); //send user to reducer
        navigate("/"); //move back to homepage
      })
      .catch((error) => console.log(error));
  }, [authed]);

  //submit function
  const submit = () => {
    if (username === "" || password === "") {
    } else {
      removeCookie("Jwt")
      //get token from backend based on username/password
      axios
        .post(
          `http://localhost:5000/authentication`,
          {
            username: username,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {

          setCookie("Jwt", response.data.token, {
            path: "/",
            sameSite: "strict",
            maxAge: 36000,
          });
          setAuthed(true);
        })
        .catch((error) => console.log(error.message));
    }
  };
  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Email or username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
          ></input>
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <a href="#" className="forgot-password">
          Forgot password?
        </a>
        <div className="signup-text">
          New to rét-dít? <a href="#">Sign up</a>
        </div>
        <div className="social-login">
          <img src={google}></img>
          <img src={facebook} alt="Facebook"></img>
        </div>
        <button className="login-button" onClick={submit}>
          Login
        </button>
      </div>
    </>
  );
};

export default Signin;
