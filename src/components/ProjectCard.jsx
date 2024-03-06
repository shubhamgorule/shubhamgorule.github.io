import React from "react";
import { useNavigate } from "react-router-dom";
const ProjectCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="project-card" onClick={() => navigate(props.path)}>
      <div
        className="project-card-img"
        style={{ backgroundImage: `URL(${props.image})` }}
      ></div>
      <div className="project-card-content-side">
        <div className="project-title">{props.title}</div>
        <div className="project-card-content-div">
          {props.tags.map((el) => {
            return <div className="project-subtitle">{el}</div>;
          })}
        </div>
        <div className="project-description">{props.content}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
