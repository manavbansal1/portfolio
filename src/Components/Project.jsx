import React from "react";
import { marked } from "marked";
import "../CSS/Project.css";

const Project = ({ title, role, date, description, technologies = [], image, github, website }) => {
    return (
        <div className="project-box">
        <h1 className="project-heading">{title}</h1>
        <div className="project-subtitle mb-3">
                {role && <span className="project-role">{role}</span>}
                {role && date && <span> | </span>}
                {date && <span className="project-date">{date}</span>}
        </div>
        <div className="row project-content align-items-center">
            <div className="project-image-container col-lg-4 col-md-12 d-flex flex-column align-items-center">
            <img src={image} alt={`${title}-img`} className="project-image" />

            <div className="project-links">
                {github && ( <a href={github} target="_blank" rel="noopener noreferrer" className="btn-link-gt github">GitHub</a>)}
                {website && (<a href={website} target="_blank" rel="noopener noreferrer" className="btn-link-gt website">Live Site</a>)}
            </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 project-text">
            <div
            className="project-description mx-sm-4 mx-md-4"
            dangerouslySetInnerHTML={{ __html: marked.parse(description || "") }}
            />
            <div className="tech-stack">
                {technologies.map((tech, index) => (
                <span key={index} className="tech-pill">
                    {tech}
                </span>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
};
export default Project; 