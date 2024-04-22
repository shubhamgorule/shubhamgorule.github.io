import React from "react";

const SkillCard = (props) => {
  return (
    <div className={`skill-card ${props.hover}`}>
      <div>{props.icon}</div>
      <div className="skill-title">{props.title}</div>
    </div>
  );
};

export default SkillCard;
