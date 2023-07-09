import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./Orders.scss";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";

const Orders = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["orders"],
        queryFn: () =>
            newRequest.get(`/orders`).then((res) => {
                return res.data;
            }),
    });

    return (
        <div className="orders">
            <div>
                {isLoading ? (
                    "loading"
                ) : error ? (
                    "error"
                ) : (
                    <div className="container">
                        <div className="title">
                            <h1>Orders</h1>
                        </div>
                        <table>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                {<th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>}
                                <th>Contact</th>
                            </tr>
                            {data.map((order) => (
                                <tr key={order._id}>
                                    <td>
                                        <img src={order.img} alt="Order image" className="img" />
                                    </td>
                                    <td>{order.title}</td>
                                    <td>{order.price}</td>
                                    <td>
                                        <Link to="/message">
                                            <Icon icon="game-icons:talk" className="message" />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;
