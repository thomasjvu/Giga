import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";

const ProjectCard = ({item}) => {
    return (
        <Link to="/">
            <div className="projectCard link">
                <img src={item.img} alt="Project Image" />
                <div className="info">
                    <img src={item.pp} alt="User Profile Picture" />
                    <div className="projectInfo">
                        <h3>{item.cat}</h3>
                        <span>{item.username}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
