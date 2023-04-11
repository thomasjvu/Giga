import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { gigs } from "../../data.js";
import GigCard from "../../components/gigCard/GigCard";
import "./Gigs.scss";

const Gigs = () => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState("sales");

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };

    return (
        <div className="gigs">
            <div className="container">
                <span className="breadcrumbs">GIGA | ART & DESIGN | </span>
                <h1>Pixel Artists</h1>
                <p>Explore our Giga pixel artists</p>
                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input type="text" placeholder="min" />
                        <input type="text" placeholder="max" />
                        <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortBy">Sort By</span>
                        <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
                        <Icon icon="game-icons:plain-arrow" onClick={() => setOpen(!open)} className="arrowIcon" />
                        {open && (
                            <div className="rightMenu">
                                {sort === "sales" ? (
                                    <span onClick={() => reSort("createdAt")}>Newest</span>
                                ) : (
                                    <span onClick={() => reSort("sales")}>Best Selling</span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="cards">
                    {gigs.map((gig) => (
                        <GigCard key={gig.id} item={gig} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gigs;
