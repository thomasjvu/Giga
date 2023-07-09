import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import "./GigCard.scss";

const GigCard = ({ item }) => {

    const { isLoading, error, data } = useQuery({
        queryKey: [item.userId],
        queryFn: () =>
            newRequest.get(`/users/${item.userId}`).then((res) => {
                return res.data;
            }),
    });

    return (
        <Link to={`/gigs/${item._id}`} className="link">
            <div className="gigCard">
                <img src={item.cover} alt="Gig Cover Image" />
                <div className="info">
                    {isLoading ? (
                        "loading..."
                    ) : error ? (
                        "something went wrong..."
                    ) : (
                        <div className="user">
                            <img src={data.img || "/img/Giga-icon_1080.png"} alt="Seller Profile Picture" />
                            <span>{data.username}</span>
                        </div>
                    )}
                    <p>{item.desc}</p>
                    <div className="star">
                        <Icon icon="game-icons:round-star" color="#ffbb33" />
                        <span>{!isNaN(item.totalStars / item.starNumber) && Math.round(item.totalStars / item.starNumber)} / 5</span>
                    </div>
                </div>
                <hr />
                <div className="details">
                    <Icon icon="game-icons:hearts" />
                    <div className="price">
                        <span>STARTING AT:</span>
                        <h4>${item.price}</h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GigCard;
