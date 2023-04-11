import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

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

    const currentUser = {
        id: 1,
        username: "Thomas",
        isSeller: true,
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
                    <Link to="/" className="link">
                        Giga Business
                    </Link>
                    <Link to="/explore" className="link">
                        Explore
                    </Link>
                    <Link to="/english" className="link">
                        English
                    </Link>
                    <Link to="/sign-in" className="link">
                        Signin
                    </Link>
                    {!currentUser?.isSeller && (
                        <Link to="/register" className="link">
                            Become a seller
                        </Link>
                    )}
                    {currentUser ? (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src="https://i1.sndcdn.com/artworks-000206602497-b0gg50-t500x500.jpg" alt="User Profile Picture" />
                            <span>{currentUser?.username}</span>
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
                                    <Link to="/logout" className="link">
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <span>Sign in</span>
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
