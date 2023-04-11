import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

const Message = () => {
    return (
        <div className="message">
            <div className="container">
                <span className="breadcrumbs">
                    <Link to="/messages">MESSAGES | THOMAS VU</Link>
                </span>
                <div className="messages">
                    <div className="item">
                        <img
                            src="https://i.pinimg.com/736x/31/ce/28/31ce281a1034c1c323bdc78387c5e659.jpg"
                            alt="user image"
                        />
                        <p>
                            Lorem ipsum dolor sit amet, qui minim labore
                            adipisicing minim sint cillum sint consectetur
                            cupidatat.
                        </p>
                    </div>
                    <div className="item currentUser">
                        <img
                            src="https://i1.sndcdn.com/artworks-000206602497-b0gg50-t500x500.jpg"
                            alt="user image"
                        />
                        <p>
                            Lorem ipsum dolor sit amet, qui minim labore
                            adipisicing minim sint cillum sint consectetur
                            cupidatat.
                        </p>
                    </div>
                    <div className="item">
                        <img
                            src="https://i.pinimg.com/736x/31/ce/28/31ce281a1034c1c323bdc78387c5e659.jpg"
                            alt="user image"
                        />
                        <p>
                            Lorem ipsum dolor sit amet, qui minim labore
                            adipisicing minim sint cillum sint consectetur
                            cupidatat.
                        </p>
                    </div>
                    <div className="item currentUser">
                        <img
                            src="https://i1.sndcdn.com/artworks-000206602497-b0gg50-t500x500.jpg"
                            alt="user image"
                        />
                        <p>
                            Lorem ipsum dolor sit amet, qui minim labore
                            adipisicing minim sint cillum sint consectetur
                            cupidatat.
                        </p>
                    </div>
                    <div className="item">
                        <img
                            src="https://i.pinimg.com/736x/31/ce/28/31ce281a1034c1c323bdc78387c5e659.jpg"
                            alt="user image"
                        />
                        <p>
                            Lorem ipsum dolor sit amet, qui minim labore
                            adipisicing minim sint cillum sint consectetur
                            cupidatat.
                        </p>
                    </div>
                    <div className="item currentUser">
                        <img
                            src="https://i1.sndcdn.com/artworks-000206602497-b0gg50-t500x500.jpg"
                            alt="user image"
                        />
                        <p>
                            Lorem ipsum dolor sit amet, qui minim labore
                            adipisicing minim sint cillum sint consectetur
                            cupidatat.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="write">
                    <textarea
                        name=""
                        placeholder="write a message"
                        rows="30"
                        cols="30"
                    ></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Message;
