import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="w-50">
        <img
          className="project-card-img "
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="project-card-content-side">
        <div className="project-card-content-div">
          <div className="project-title">{props.title}</div>
          <div className="project-subtitle">{props.subtitle}</div>
          <div className="project-description">{props.content}</div>
        </div>
        <div className="view-project-button">View Case Study</div>
      </div>
    </div>
  );
};

export default ProjectCard;
