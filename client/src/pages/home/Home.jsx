import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard"
import { cards, projects } from "../../data"
import "./Home.scss";
import { Icon } from "@iconify/react";

const Home = () => {
    return (
        <div className="home">
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={5} className="cardSlides">
                {cards.map((card) => (
                    <CatCard key={card.id} item={card} />
                ))}
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="left">
                        <h2>Get your game on!</h2>
                        <div className="titles">

                            <div className="title">
                                <Icon icon="game-icons:check-mark" className="checkMark"/>
                                <h3>The best for every budget</h3>
                            </div>
                            <p>Find high quality services at every price point. No hourly rates, just project-based pricing.</p>
                            <div className="title">
                                <Icon icon="game-icons:check-mark" className="checkMark"/>
                                <h3>The best for every budget</h3>
                            </div>
                            <p>Find high quality services at every price point. No hourly rates, just project-based pricing.</p>
                            <div className="title">
                                <Icon icon="game-icons:check-mark" className="checkMark"/>
                                <h3>The best for every budget</h3>
                            </div>
                            <p>Find high quality services at every price point. No hourly rates, just project-based pricing.</p>
                        </div>
                    </div>
                    <div className="right">
                        <img className="features-image" src="./img/gamer-girl.png" alt="Hero image" />
                    </div>
                </div>
            </div>
            <div className="features dark">
                <div className="container">
                    <div className="left">
                        <h2 className="heading">Giga Studios</h2>
                        <h3 className="subheading">The panacea for all of your studio's problems</h3>
                        <p>Upgrade to a curated experience packed with tools and benefits, dedicated to larger game studios</p>
                        <div className="titles">
                            <div className="title">
                                <Icon icon="game-icons:check-mark" className="checkMark"/>
                                <h4>Connect with top tier freelancers</h4>
                            </div>
                            <div className="title">
                                <Icon icon="game-icons:check-mark" className="checkMark"/>
                                <h4>Find potential full-time employees</h4>
                            </div>
                            <div className="title">
                                <Icon icon="game-icons:check-mark" className="checkMark"/>
                                <h4>Cut costs searching for SSS-tier talent</h4>
                            </div>
                            <button>Coming Soon</button>
                        </div>
                    </div>
                    <div className="right">
                        {/* <video src="./img/video/video.mp4" controls></video> */}
                        <img src="./img/giga-icon_1080.png" alt="Hero image" />
                    </div>
                </div>
            </div>
            <Slide slidesToShow={4} arrowsScroll={4} className="projectSlides">
                {projects.map((card) => (
                    <ProjectCard key={card.id} item={card} />
                ))}
            </Slide>
        </div>
    );
};

export default Home;
