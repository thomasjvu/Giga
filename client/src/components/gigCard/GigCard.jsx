import React from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import "./GigCard.scss";

const GigCard = ({item}) => {
    return (
        <Link to="/gig/123" className="link">
            <div className="gigCard">
                <img src={item.img} alt="Gig Cover Image" />
                <div className="info">
                    <div className="user">
                        <img src={item.pp} alt="User Profile Picture" />
                        <span>{item.username}</span>
                    </div>
                    <p>{item.desc}</p>
                    <div className="star">
                        <Icon icon="game-icons:round-star" />
                        <span>{item.star}</span>
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
