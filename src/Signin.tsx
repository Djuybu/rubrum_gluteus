import google from "./assets/google.png";
import facebook from "./assets/Facebook_Logo_Primary.png";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useMemo, useState } from "react";
import { useAuthMutation } from "./redux/service/auth.service";
import { useDispatch } from "react-redux";
import { useGetUserQuery } from "./redux/service/user.service";
import { addId } from "./redux/slices/user.slice";

const Signin = () => {
  const [username, setUsername] = useState<string>(""); // store username from input
  const [password, setPassword] = useState<string>(""); // store password from input
  const dispatch = useDispatch();
  const nav = useNavigate()
  const [cookies, setCookies] = useCookies()
  const [auth, authResult] = useAuthMutation();
  useEffect(() => {
    if (authResult.isSuccess) {
      // store JWT Token
      console.log(authResult.data);
      
      setCookies("JWTToken", authResult.data.jwtoken);
      dispatch(addId(authResult.data.userID))
      nav("/")

    }
  }, [authResult])

  // submit function
  const submit = () => {
    if (username === "" || password === "") {
      // Handle empty fields if necessary
    } else {
      auth({
        username: username,
        password: password,
      });
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
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <a href="#" className="forgot-password">
          Forgot password?
        </a>
        <div className="signup-text">
          New to rét-dít? <a href="#">Sign up</a>
        </div>
        <div className="social-login">
          <img src={google} alt="Google" />
          <img src={facebook} alt="Facebook" />
        </div>
        <button className="login-button" onClick={submit}>
          Login
        </button>
      </div>
    </>
  );
};

export default Signin;