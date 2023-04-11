import React from "react";
import { Icon } from "@iconify/react";
import "./Featured.scss";

const Featured = () => {
    return (
        <div className="featured">
            <div className="container">
                <div className="left">
                    <h1>
                        Team up with the perfect 
                        <div className="inline">
                            <span className="fadetag">freelancer </span>
                        </div> 
                        for your indie game needs.
                    </h1>
                    <div className="search">
                        <div className="searchInput">
                            <Icon icon="pixelarticons:search" color="black" className="icon" />
                            <input type="text" placeholder="create character art" />
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Game Design</button>
                        <button>Game Development</button>
                        <button>Character Art</button>
                        <button>Level Design</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/female-hero.png" alt="Hero image" />
                </div>
            </div>
        </div>
    );
};

export default Featured;
