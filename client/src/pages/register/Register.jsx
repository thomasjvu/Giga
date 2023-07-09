import React, { useState } from "react";
import "./Register.scss";
import axios from "axios";
import newRequest from "../../utils/newRequest";
import upload from "../../utils/upload";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [file, setFile] = useState(null);
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        img: "",
        country: "",
        isSeller: false,
        desc: "",
    });

    const navigate = useNavigate();

    // console.log('user', user)
    const handleChange = (e) => {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSeller = (e) => {
        setUser((prev) => {
            return { ...prev, isSeller: e.target.checked };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = await upload(file);

        try {
            await newRequest.post("/auth/register", {
                ...user,
                img: url,
            });
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="register">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="left">
                        <h1>Create a new account</h1>
                        <div className="formGroup">
                            <label htmlFor="">Username</label>
                            <input id="" type="text" name="username" placeholder="hououinkyouma" onChange={handleChange} />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="">Email</label>
                            <input id="" type="email" name="email" placeholder="hououin.kyouma@gmail.com" onChange={handleChange} />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="">Password</label>
                            <input id="" type="password" name="password" placeholder="******" onChange={handleChange} />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="">Profile Picture</label>
                            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="">Country</label>
                            <input id="" type="text" name="country" placeholder="USA" onChange={handleChange} />
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                    <div className="right">
                        <h2>Become a seller</h2>
                        <div className="formGroup toggle">
                            <h3>Activate Seller Account</h3>
                            <label className="switch" htmlFor="">
                                <input id="" type="checkbox" name="" onChange={handleSeller} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="formGroup">
                            <label htmlFor="">Phone Number</label>
                            <input id="" type="text" name="phone" placeholder="+1 234 567 89" onChange={handleChange} />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="">Seller Description</label>
                            <textarea
                                id=""
                                name=""
                                cols="30"
                                rows="10"
                                placeholder="a short description of yourself"
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
