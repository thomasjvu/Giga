import React from "react";
import "./Gig.scss";
import { Icon } from "@iconify/react";
import Slider from "infinite-react-carousel";

const Gig = () => {
    return (
        <div className="gig">
            <div className="container">
                <div className="left">
                    <span className="breadcrumbs">
                        {" "}
                        ~ / GIGA / ART & DESIGN /{" "}
                    </span>
                    <h1>I will create Pixel Art for you!</h1>
                    <div className="user">
                        <img
                            src="https://i1.sndcdn.com/artworks-000206602497-b0gg50-t500x500.jpg"
                            alt="user image"
                            className="userImage"
                        />
                        <span>Thomas Vu</span>
                        <div className="stars">
                            <Icon
                                icon="game-icons:round-star"
                                className="starIcon"
                            />
                            <Icon
                                icon="game-icons:round-star"
                                className="starIcon"
                            />
                            <Icon
                                icon="game-icons:round-star"
                                className="starIcon"
                            />
                            <Icon
                                icon="game-icons:round-star"
                                className="starIcon"
                            />
                            <Icon
                                icon="game-icons:round-star"
                                className="starIcon"
                            />
                            <span>5</span>
                        </div>
                    </div>
                    <Slider slidesToShow={1} arrowsScroll={1}>
                        <img src="../../../public/img/hero.png" alt="" />
                        <img src="../../../public/img/hero.png" alt="" />
                        <img src="../../../public/img/hero.png" alt="" />
                    </Slider>
                    <h2>About This Gig</h2>
                    <p>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                        reprehenderit enim labore culpa sint ad nisi Lorem
                        pariatur mollit ex esse exercitation amet. Nisi anim
                        cupidatat excepteur officia. Reprehenderit nostrud
                        nostrud ipsum Lorem est aliquip amet voluptate voluptate
                        dolor minim nulla est proident. Nostrud officia pariatur
                        ut officia. Sit irure elit esse ea nulla sunt ex
                        occaecat reprehenderit commodo officia dolor Lorem duis
                        laboris cupidatat officia voluptate. Culpa proident
                        adipisicing id nulla nisi laboris ex in Lorem sunt duis
                        officia eiusmod. Aliqua reprehenderit commodo ex non
                        excepteur duis sunt velit enim. Voluptate laboris sint
                        cupidatat ullamco ut ea consectetur et est culpa et
                        culpa duis.
                    </p>
                    <div className="seller">
                        <h2>About the Seller</h2>
                        <div className="user">
                            <img
                                src="https://i1.sndcdn.com/artworks-000206602497-b0gg50-t500x500.jpg"
                                alt=""
                                className="userImage"
                            />
                            <div className="userInfo">
                                <span>Thomas</span>
                                <div className="stars">
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <span>5</span>
                                </div>
                                <button>Contact Me</button>
                            </div>
                            <div className="box">
                                <div className="items">
                                    <div className="item">
                                        <span className="title">From</span>
                                        <span className="desc">USA</span>
                                    </div>
                                    <div className="item">
                                        <span className="title">
                                            Member Since
                                        </span>
                                        <span className="desc">
                                            January 2023
                                        </span>
                                    </div>
                                    <div className="item">
                                        <span className="title">
                                            Avg. Response Time
                                        </span>
                                        <span className="desc">12 hours</span>
                                    </div>
                                    <div className="item">
                                        <span className="title">
                                            Last delivery
                                        </span>
                                        <span className="desc">1 day</span>
                                    </div>
                                    <div className="userItem">
                                        <span className="title">Languages</span>
                                        <span className="desc">English</span>
                                    </div>
                                </div>
                                <hr />
                                <p>
                                    My name is Thomas. I enjoy creating pixel
                                    art in my spare time. I have a lot of
                                    experience and that means I know how to get
                                    an incredibly detailed result using a
                                    minimal amount of pixels.
                                </p>
                            </div>
                        </div>
                        <div className="reviews">
                            <h2>Reviews</h2>
                            <div className="item">
                                <div className="user">
                                    <img
                                        src="https://i1.sndcdn.com/artworks-000206602497-b0gg50-t500x500.jpg"
                                        alt=""
                                        className="pp"
                                    />
                                    <div className="info">
                                        <span>Thomas Vu</span>
                                        <div className="country">
                                            <Icon
                                                icon="fa6-solid:flag-usa"
                                                className="countryFlag"
                                            />
                                            <span>United States</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="stars">
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <span>5</span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, officia
                                    excepteur ex fugiat reprehenderit enim
                                    labore culpa sint ad nisi Lorem pariatur
                                    mollit ex esse exercitation amet. Nisi anim
                                    cupidatat excepteur officia. Reprehenderit
                                    nostrud nostrud ipsum Lorem est aliquip amet
                                    voluptate voluptate dolor minim nulla est
                                    proident. Nostrud officia pariatur ut
                                    officia. Sit irure elit esse ea nulla sunt
                                    ex occaecat reprehenderit commodo officia
                                    dolor Lorem duis laboris cupidatat officia
                                    voluptate. Culpa proident adipisicing id
                                    nulla nisi laboris ex in Lorem sunt duis
                                    officia eiusmod. Aliqua reprehenderit
                                    commodo ex non excepteur duis sunt velit
                                    enim. Voluptate laboris sint cupidatat
                                    ullamco ut ea consectetur et est culpa et
                                    culpa duis.
                                </p>
                                <div className="helpful">
                                    <span>Helpful?</span>
                                    <Icon icon="game-icons:thumb-up" />
                                    <span>Yes</span>
                                    <Icon icon="game-icons:thumb-down" />
                                    <span>No</span>
                                </div>
                            </div>
                            <hr />
                            <div className="item">
                                <div className="user">
                                    <img
                                        src="https://i1.sndcdn.com/artworks-000206602497-b0gg50-t500x500.jpg"
                                        alt=""
                                        className="pp"
                                    />
                                    <div className="info">
                                        <span>Thomas Vu</span>
                                        <div className="country">
                                            <Icon
                                                icon="fa6-solid:flag-usa"
                                                className="countryFlag"
                                            />
                                            <span>United States</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="stars">
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <span>5</span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, officia
                                    excepteur ex fugiat reprehenderit enim
                                    labore culpa sint ad nisi Lorem pariatur
                                    mollit ex esse exercitation amet. Nisi anim
                                    cupidatat excepteur officia. Reprehenderit
                                    nostrud nostrud ipsum Lorem est aliquip amet
                                    voluptate voluptate dolor minim nulla est
                                    proident. Nostrud officia pariatur ut
                                    officia. Sit irure elit esse ea nulla sunt
                                    ex occaecat reprehenderit commodo officia
                                    dolor Lorem duis laboris cupidatat officia
                                    voluptate. Culpa proident adipisicing id
                                    nulla nisi laboris ex in Lorem sunt duis
                                    officia eiusmod. Aliqua reprehenderit
                                    commodo ex non excepteur duis sunt velit
                                    enim. Voluptate laboris sint cupidatat
                                    ullamco ut ea consectetur et est culpa et
                                    culpa duis.
                                </p>
                                <div className="helpful">
                                    <span>Helpful?</span>
                                    <Icon icon="game-icons:thumb-up" />
                                    <span>Yes</span>
                                    <Icon icon="game-icons:thumb-down" />
                                    <span>No</span>
                                </div>
                            </div>
                            <hr />
                            <div className="item">
                                <div className="user">
                                    <img
                                        src="https://i1.sndcdn.com/artworks-000206602497-b0gg50-t500x500.jpg"
                                        alt=""
                                        className="pp"
                                    />
                                    <div className="info">
                                        <span>Thomas Vu</span>
                                        <div className="country">
                                            <Icon
                                                icon="fa6-solid:flag-usa"
                                                className="countryFlag"
                                            />
                                            <span>United States</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="stars">
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <Icon
                                        icon="game-icons:round-star"
                                        className="starIcon"
                                    />
                                    <span>5</span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, officia
                                    excepteur ex fugiat reprehenderit enim
                                    labore culpa sint ad nisi Lorem pariatur
                                    mollit ex esse exercitation amet. Nisi anim
                                    cupidatat excepteur officia. Reprehenderit
                                    nostrud nostrud ipsum Lorem est aliquip amet
                                    voluptate voluptate dolor minim nulla est
                                    proident. Nostrud officia pariatur ut
                                    officia. Sit irure elit esse ea nulla sunt
                                    ex occaecat reprehenderit commodo officia
                                    dolor Lorem duis laboris cupidatat officia
                                    voluptate. Culpa proident adipisicing id
                                    nulla nisi laboris ex in Lorem sunt duis
                                    officia eiusmod. Aliqua reprehenderit
                                    commodo ex non excepteur duis sunt velit
                                    enim. Voluptate laboris sint cupidatat
                                    ullamco ut ea consectetur et est culpa et
                                    culpa duis.
                                </p>
                                <div className="helpful">
                                    <span>Helpful?</span>
                                    <Icon icon="game-icons:thumb-up" />
                                    <span>Yes</span>
                                    <Icon icon="game-icons:thumb-down" />
                                    <span>No</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="price">
                        <h3>1 Pixel Art Image</h3>
                        <h3>$69.99</h3>
                    </div>
                    <p>
                        I will create a unique high quality pixel art image
                        based on a description that you give me.
                    </p>
                    <div className="details">
                        <div className="item">
                            <Icon icon="game-icons:alarm-clock" />
                            <span>2 Days Delivery</span>
                        </div>
                        <div className="item">
                            <Icon icon="game-icons:recycle" />
                            <span>3 Revisions</span>
                        </div>
                    </div>
                    <div className="features">
                        <div className="item">
                            <Icon icon="game-icons:paint-bucket" />
                            <span>Prompt Writing</span>
                        </div>
                        <div className="item">
                            <Icon icon="game-icons:paint-bucket" />
                            <span>Artwork Delivery</span>
                        </div>
                        <div className="item">
                            <Icon icon="game-icons:paint-bucket" />
                            <span>Image Upscaling</span>
                        </div>
                        <div className="item">
                            <Icon icon="game-icons:paint-bucket" />
                            <span>Additional Design</span>
                        </div>
                    </div>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Gig;
