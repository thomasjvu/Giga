import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const handleLogout = async () => {
        try {
            await newRequest.post("/auth/logout");
            localStorage.setItem("currentUser", null);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                        <span className="text">Giga</span>
                        <span className="asterisk">*</span>
                    </Link>
                </div>
                <div className="links">
                    <Link to="/business" className="link">
                        Giga Business
                    </Link>
                    <Link to="/gigs" className="link">
                        Explore
                    </Link>
                    {/* <Link to="/english" className="link"> */}
                    {/*     English */}
                    {/* </Link> */}
                    {!currentUser && (
                        <Link to="/login" className="link">
                            Login
                        </Link>
                    )}
                    {!currentUser?.isSeller && (
                        <Link to="/register" className="link">
                            Become a seller
                        </Link>
                    )}
                    {currentUser ? (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src={currentUser.img || "/img/Giga-icon_1080.png"} alt="User Profile Picture" />
                            <span>@ {currentUser?.username}</span>
                            {open && (
                                <div className="options">
                                    {currentUser.isSeller && (
                                        <>
                                            <Link to="/my-gigs" className="link">
                                                Gigs
                                            </Link>
                                            <Link to="/add" className="link">
                                                Add New Gig
                                            </Link>
                                        </>
                                    )}
                                    <Link to="/orders" className="link">
                                        Orders
                                    </Link>
                                    <Link to="/messages" className="link">
                                        Messages
                                    </Link>
                                    <Link onClick={handleLogout}>
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/register" className="link">
                                <button>Join</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {(active || pathname !== "/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link to="/" className="link">
                            Game Design
                        </Link>
                        <Link to="/" className="link">
                            Game Development
                        </Link>
                        <Link to="/" className="link">
                            Pixel Art
                        </Link>
                        <Link to="/" className="link">
                            Level Design
                        </Link>
                        <Link to="/" className="link">
                            Music Design
                        </Link>
                        <Link to="/" className="link">
                            Sound Design
                        </Link>
                    </div>
                    <hr />
                </>
            )}
        </div>
    );
};

export default Navbar;
