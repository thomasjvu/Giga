import React from "react";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import "./Footer.scss";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="top">
                    <div className="item">
                        <h3>Categories</h3>
                        <Link className="link" to="/">Pixel Art</Link>
                        <Link className="link" to="/">Digital Art</Link>
                        <Link className="link" to="/">Level Design</Link>
                        <Link className="link" to="/">Game Design</Link>
                        <Link className="link" to="/">Game Development</Link>
                        <Link className="link" to="/">Game Journalism</Link>
                        <Link className="link" to="/">Game Writing</Link>
                        <Link className="link" to="/">Game Voice Acting</Link>
                    </div>
                    <div className="item">
                        <h3>Categories</h3>
                        <Link className="link" to="/">Pixel Art</Link>
                        <Link className="link" to="/">Digital Art</Link>
                        <Link className="link" to="/">Level Design</Link>
                        <Link className="link" to="/">Game Design</Link>
                        <Link className="link" to="/">Game Development</Link>
                        <Link className="link" to="/">Game Journalism</Link>
                        <Link className="link" to="/">Game Writing</Link>
                        <Link className="link" to="/">Game Voice Acting</Link>
                    </div>
                    <div className="item">
                        <h3>Categories</h3>
                        <Link className="link" to="/">Pixel Art</Link>
                        <Link className="link" to="/">Digital Art</Link>
                        <Link className="link" to="/">Level Design</Link>
                        <Link className="link" to="/">Game Design</Link>
                        <Link className="link" to="/">Game Development</Link>
                        <Link className="link" to="/">Game Journalism</Link>
                        <Link className="link" to="/">Game Writing</Link>
                        <Link className="link" to="/">Game Voice Acting</Link>
                    </div>
                    <div className="item">
                        <h3>Categories</h3>
                        <Link className="link" to="/">Pixel Art</Link>
                        <Link className="link" to="/">Digital Art</Link>
                        <Link className="link" to="/">Level Design</Link>
                        <Link className="link" to="/">Game Design</Link>
                        <Link className="link" to="/">Game Development</Link>
                        <Link className="link" to="/">Game Journalism</Link>
                        <Link className="link" to="/">Game Writing</Link>
                        <Link className="link" to="/">Game Voice Acting</Link>
                    </div>
                    <div className="item">
                        <h3>Categories</h3>
                        <Link className="link" to="/">Pixel Art</Link>
                        <Link className="link" to="/">Digital Art</Link>
                        <Link className="link" to="/">Level Design</Link>
                        <Link className="link" to="/">Game Design</Link>
                        <Link className="link" to="/">Game Development</Link>
                        <Link className="link" to="/">Game Journalism</Link>
                        <Link className="link" to="/">Game Writing</Link>
                        <Link className="link" to="/">Game Voice Acting</Link>
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <h3>
                            Giga<span>*</span>
                        </h3>
                        <p>© 2023 Giga. All rights reserved.</p>
                    </div>
                    <div className="right">
                        <div className="social">
                            <Link className="link" to="/discord">
                                <Icon icon="cib:discord" />
                            </Link>
                            <Link className="link" to="/twitch">
                                <Icon icon="cib:twitch" />
                            </Link>
                            <Link className="link" to="/twitter">
                                <Icon icon="cib:twitter" />
                            </Link>
                            <Link className="link" to="/linkedin">
                                <Icon icon="cib:linkedin" />
                            </Link>
                            <Link className="link" to="/instagram">
                                <Icon icon="cib:instagram" />
                            </Link>
                        </div>
                        <div className="misc">
                            <div className="link">
                                <Icon icon="material-symbols:language-us-sharp" />
                                <span>English</span>
                            </div>
                            <div className="link">
                                <Icon icon="pixelarticons:coin" />
                                <span>USD</span>
                            </div>
                            <div className="link">
                                <Icon icon="octicon:accessibility-inset-16" />
                                <span>Accessibility</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
