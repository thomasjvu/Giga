import React from "react";
import "./Gig.scss";
import { Icon } from "@iconify/react";
import Slider from "infinite-react-carousel";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { Link, useParams } from "react-router-dom";
import Reviews from "../../components/reviews/Reviews";

const Gig = () => {
    const { id } = useParams();

    const { isLoading, error, data } = useQuery({
        queryKey: ["gig"],
        queryFn: () =>
            newRequest.get(`/gigs/${id}`).then((res) => {
                return res.data;
            }),
    });

    const userId = data?.userId;

    const {
        isLoading: isLoadingUser,
        error: errorUser,
        data: dataUser,
    } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
            newRequest.get(`/users/${userId}`).then((res) => {
                return res.data;
            }),
        enabled: !!userId,
    });

    return (
        <div className="gig">
            {isLoading ? (
                "loading"
            ) : error ? (
                "Something went wrong!"
            ) : (
                <div className="container">
                    <div className="left">
                        <span className="breadcrumbs">
                            {" "}
                            ~ / GIGA / ART & DESIGN /{" "}
                            <Link to={data.id} target="_blank" className="link">
                                {data.title}
                            </Link>{" "}
                        </span>
                        <h1>{data.title}</h1>
                        {isLoadingUser ? (
                            "loading..."
                        ) : errorUser ? (
                            "something went wrong..."
                        ) : (
                            <div className="user">
                                <img className="userImage" src={dataUser.img || "/img/Giga-icon_1080.png"} alt="seller image" />
                                <span>{dataUser.username}</span>
                                {!isNaN(data.totalStars / data.starNumber) && (
                                    <div className="stars">
                                        {Array(Math.round(data.totalStars / data.starNumber))
                                            .fill()
                                            .map((item, i) => (
                                                <Icon icon="game-icons:round-star" className="starIcon" key={i} color="#ffbb33" />
                                            ))}
                                        <span>{Math.round(data.totalStars / data.starNumber)}</span>
                                    </div>
                                )}
                            </div>
                        )}
                        <Slider slidesToShow={1} arrowsScroll={1}>
                            {data.images.map((img) => (
                                <img src={img} alt="Gig image" key={img} />
                            ))}
                        </Slider>
                        <h2>About This Gig</h2>
                        <p>{data.desc}</p>
                        <div className="seller">
                            <h2>About the Seller</h2>
                            {isLoadingUser ? (
                                "loading..."
                            ) : errorUser ? (
                                "something went wrong..."
                            ) : (
                                <div className="user">
                                    <img className="userImage" src={dataUser.img || "/img/Giga-icon_1080.png"} alt="seller image" />
                                    <div className="userInfo">
                                        <span>{dataUser.username}</span>
                                        {!isNaN(data.totalStars / data.starNumber) && (
                                            <div className="stars">
                                                {Array(Math.round(data.totalStars / data.starNumber))
                                                    .fill()
                                                    .map((item, i) => (
                                                        <Icon icon="game-icons:round-star" className="starIcon" key={i} color="#ffbb33" />
                                                    ))}
                                                <span>{Math.round(data.totalStars / data.starNumber)}</span>
                                            </div>
                                        )}
                                        <button>Contact Me</button>
                                    </div>
                                    <div className="box">
                                        <div className="items">
                                            <div className="item">
                                                <span className="title">From</span>
                                                <span className="desc">{dataUser.country}</span>
                                            </div>
                                            <div className="item">
                                                <span className="title">Member Since</span>
                                                <span className="desc">January 2023</span>
                                            </div>
                                            <div className="item">
                                                <span className="title">Avg. Response Time</span>
                                                <span className="desc">12 hours</span>
                                            </div>
                                            <div className="item">
                                                <span className="title">Last delivery</span>
                                                <span className="desc">1 day</span>
                                            </div>
                                            <div className="userItem">
                                                <span className="title">Languages</span>
                                                <span className="desc">English</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <p>{dataUser.description}</p>
                                    </div>
                                </div>
                            )}
                            <Reviews gigId={id} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="price">
                            <h3>{data.shortTitle}</h3>
                            <h3>${data.price}</h3>
                        </div>
                        <p>{data.shortDesc}</p>
                        <div className="details">
                            <div className="item">
                                <Icon icon="game-icons:alarm-clock" />
                                <span>{data.deliveryTime} Days Delivery</span>
                            </div>
                            <div className="item">
                                <Icon icon="game-icons:recycle" />
                                <span>{data.revisionNumber} Revisions</span>
                            </div>
                        </div>
                        <div className="features">
                            {data.features.map((feature) => (
                                <div className="item" key={feature}>
                                    <Icon icon="game-icons:paint-bucket" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <button>Continue</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gig;
