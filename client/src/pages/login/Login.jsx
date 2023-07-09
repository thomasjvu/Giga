import React, { useState } from "react";
import "./Login.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await newRequest.post("/auth/login", {
                username,
                password,
            },
                {withCredentials: true});
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            navigate("/");
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <div className="login">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Sign in</h1>
                    <div className="formGroup">
                        <label htmlFor="">Username</label>
                        <input type="text" name="username" placeholder="hououin.kyouma@gmail.com" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="">Password</label>
                        <input id="" type="password" name="password" placeholder="******" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Login</button>
                    <p className="error">{error && error}</p>
                </form>
            </div>
        </div>
    );
};

export default Login;
