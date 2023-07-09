import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import "./Gigs.scss";

const Gigs = () => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState("sales");

    const minRef = useRef();
    const maxRef = useRef();

    const { search } = useLocation();

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["gigs"],
        queryFn: () =>
            newRequest.get(`/gigs?${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then((res) => {
                return res.data;
            }),
    });

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };

    useEffect(() => {
        refetch()
    }, [sort])

    const apply = () => {
        refetch()
    }

    return (
        <div className="gigs">
            <div className="container">
                <span className="breadcrumbs">GIGA / ART & DESIGN </span>
                <h1>Pixel Artists</h1>
                <p>Explore our Giga pixel artists</p>
                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input ref={minRef} type="text" placeholder="min" defaultValue={0} />
                        <input ref={maxRef} type="text" placeholder="max" defaultValue={1000} />
                        <button onClick={apply}>Apply</button>
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
                    {isLoading ? "loading gigs..." : error ? "Something went wrong..." : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
                </div>
            </div>
        </div>
    );
};

export default Gigs;
