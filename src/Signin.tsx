import google from "./assets/google.png";
import facebook from "./assets/Facebook_Logo_Primary.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/reducers/user.reducer";
import { User } from "./redux/type/user.type";
import { store } from "./redux/store";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [token, setToken] = useState<string>("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(token);
        axios.get(`http://localhost:8000/user`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
            }
        })
        .then(async (response) => {
            const data = response.data.user;
            console.log(data);
            const user: User = {
                username: data.username,
                email: data.email,
                age: data.age,
                phone_number: data.phone_number,
                avatar: data.avatar
            }
            await dispatch(addUser(user));
            navigate("/");
        })
        .catch(error => console.log(error));
    }, [token]);    
    const submit = () => {
        if (username === "" || password === "") {
            console.log("error");
        } else {
            axios.get(`http://localhost:8000/signin?user=${username}&password=${password}`)
            .then(response => {
                setToken(response.data.token);
            }
        )
            // .then(response => {
            //     console.log(response.data.token);
                
            // })
            .catch(error => console.log(error.message)
            );
        }
    }
    return(
        <>
            <div className="login-container">
            <h2>Login</h2>
                <div className="input-group">
                    <input type="text" placeholder="Email or username" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setUsername(e.target.value);
                    }}></input>
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                    }}></input>
                </div>
                <a href="#" className="forgot-password">Forgot password?</a>
                <div className="signup-text">
                    New to rét-dít? <a href="#">Sign up</a>
                </div>
                <div className="social-login">
                    <img src={google}></img>
                    <img src={facebook} alt="Facebook"></img>
                </div>
                <button className="login-button" onClick={submit}>Login</button>
            </div>
        </>
    )
}

export default Signin