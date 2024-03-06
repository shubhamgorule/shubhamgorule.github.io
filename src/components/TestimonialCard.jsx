import React from "react";
import { ReactComponent as Quote } from "../assets/icons/teenyicons_quote-solid.svg";
const TestimonialCard = (props) => {
  return (
    <div className="testimo-card">
      <Quote className="quote-icon" />
      <div className="testimo-name-card-cont">
        <img className="testi-avatar-img" src={props.image} alt="" />
        <div className="testimo-name-card">
          <div className="testimo-name">{props.name}</div>
          <div className="testimo-desig">{props.designation}</div>
        </div>
      </div>
      <div className="testimo-desc">{props.description}</div>
    </div>
  );
};

export default TestimonialCard;
