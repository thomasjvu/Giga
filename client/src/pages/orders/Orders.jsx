import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./Orders.scss";

const Orders = () => {

    const currentUser = {
        id: 1,
        username: "Thomas",
        isSeller: true
    }

    return (
        <div className="orders">
            <div>
                <div className="container">
                    <div className="title">
                        <h1>Orders</h1>
                    </div>
                    <table>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>{(currentUser?.isSeller) ? "Buyer" : "Seller"}</th>
                            <th>Contact</th>
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
                                <Link to="/message">
                                    <Icon icon="game-icons:talk" className="message"/>
                                </Link>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;
