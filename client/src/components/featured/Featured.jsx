import { useState } from "react";
import { Icon } from "@iconify/react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

const Featured = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate(`/gigs?search=${input}`)
    }

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
                            <input
                                type="text"
                                placeholder="create character art"
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </div>
                        <button onClick={handleSubmit}>Search</button>
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
