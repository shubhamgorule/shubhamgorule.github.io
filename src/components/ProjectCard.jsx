import React from "react";
import { useNavigate } from "react-router-dom";
const ProjectCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="project-card" onClick={() => navigate(props.path)}>
      <div className="w-100">
        <div
          className="project-card-img"
          style={{ backgroundImage: `URL(${props.image})` }}
        ></div>
      </div>
      <div className="project-card-content-side">
        <div className="project-card-content-div">
          <div className="d-flex w-100 align-items-end justify-content-between">
            <div className="project-title">{props.title}</div>
            <div className="project-subtitle">{props.subtitle}</div>
          </div>
          <div className="project-description">{props.content}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
