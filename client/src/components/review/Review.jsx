import React from "react";
import { Icon } from "@iconify/react";
import "./Review.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Review = ({ review }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: [review.userId],
        queryFn: () =>
            newRequest.get(`/users/${review.userId}`).then((res) => {
                return res.data;
            }),
    });
    return (
        <div className="review">
            {isLoading ? (
                "loading"
            ) : error ? (
                "error"
            ) : (
                <div className="user">
                    <img src={data.img || "/img/Giga-icon_1080.png"} alt="" className="pp" />
                    <div className="info">
                        <span>{data.username}</span>
                        <div className="country">
                            <span>{data.country}</span>
                        </div>
                    </div>
                </div>
            )}
            <div className="stars">
                {Array(review.star)
                    .fill()
                    .map((item, i) => (
                        <Icon icon="game-icons:round-star" className="starIcon" key={i} />
                    ))}
                <span>{review.star}</span>
            </div>
            <p>{review.desc}</p>
            <div className="helpful">
                <span>Helpful?</span>
                <Icon icon="game-icons:thumb-up" />
                <span>Yes</span>
                <Icon icon="game-icons:thumb-down" />
                <span>No</span>
            </div>
        </div>
    );
};

export default Review;
