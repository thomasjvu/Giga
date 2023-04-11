import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";

const MyGigs = () => {
    return (
        <div className="myGigs">
            <div>
                <div className="container">
                    <div className="title">
                        <h1>My Gigs</h1>
                        <Link to="/add">
                            <button>Add New Gig</button>
                        </Link>
                    </div>
                    <table>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Sales</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="https://images.unsplash.com/photo-1638445533129-65aaf55fb94c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt=""
                                    className="img"
                                />
                            </td>
                            <td>Gig</td>
                            <td>88</td>
                            <td>123</td>
                            <td>
                                <Icon icon="game-icons:trash-can" className="delete" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyGigs;
