import React from "react";
// import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
    const currentUser = {
        id: 1,
        username: "Thomas",
        isSeller: true,
    };

    const message = `Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`;

    return (
        <div className="messages">
            <div>
                <div className="container">
                    <div className="title">
                        <h1>Orders</h1>
                    </div>
                    <table>
                        <tr>
                            <th>Buyer</th>
                            <th>Last Message</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                        <tr className="active">
                            <td>John Doe</td>
                            <td>
                                <Link to="/message/123" className="link">
                                    {message.substring(0, 100)}...
                                </Link>
                            </td>
                            <td>1 Day ago</td>
                            <td>
                                <button>Mark as Read</button>
                            </td>
                        </tr>
                        <tr className="active">
                            <td>John Doe</td>
                            <td>
                                <Link to="/message/123" className="link">
                                    {message.substring(0, 100)}...
                                </Link>
                            </td>
                            <td>1 Day ago</td>
                            <td>
                                <button>Mark as Read</button>
                            </td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>
                                <Link to="/message/123" className="link">
                                    {message.substring(0, 100)}...
                                </Link>
                            </td>
                            <td>1 Day ago</td>
                            <td>
                                <button>Mark as Unread</button>
                            </td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>
                                <Link to="/message/123" className="link">
                                    {message.substring(0, 100)}...
                                </Link>
                            </td>
                            <td>1 Day ago</td>
                            <td>
                                <button>Mark as Unread</button>
                            </td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>
                                <Link to="/message/123" className="link">
                                    {message.substring(0, 100)}...
                                </Link>
                            </td>
                            <td>1 Day ago</td>
                            <td>
                                <button>Mark as Unread</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Messages;
