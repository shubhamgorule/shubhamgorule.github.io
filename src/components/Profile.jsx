import React from "react";
import SkillCard from "./SkillCard";
import { ReactComponent as User } from "../assets/icons/Component 48.svg";
import { ReactComponent as Wire } from "../assets/icons/Component 48 (1).svg";
import { ReactComponent as Proto } from "../assets/icons/Component 48 (2).svg";
import { ReactComponent as Test } from "../assets/icons/Component 48 (3).svg";
import { ReactComponent as Interact } from "../assets/icons/Component 48 (4).svg";
import { ReactComponent as Visual } from "../assets/icons/Component 48 (5).svg";
import bulb from "../assets/images/istockphoto-1458606797-1024x1024 1.png";
const Profile = () => {
  return (
    <div className="title-box" id="hero">
      <img
        src={bulb}
        style={{ position: "absolute", top: 0, right: 0, zIndex: 0 }}
        alt=""
      />
      <div className="d-flex flex-column gap-5">
        <div className="title">Hey! I'm Shubham Gorule</div>
        <div className="subtitle">
          Based in the vibrant heart of New York City🗽, I help brands connect
          deeply with their audience by crafting intuitive, effective and
          engaging digital interfaces.
        </div>
      </div>
      <div>
        <div className="section-title">Skills that I'm good at include... </div>
        <div className="d-flex m-auto gap-2">
          <SkillCard
            title="User Research"
            icon={<User className="skill-icon" />}
          />
          <SkillCard
            title="Wireframing"
            icon={<Wire className="skill-icon" />}
          />
          <SkillCard
            title="Prototyping"
            icon={<Proto className="skill-icon" />}
          />
          <SkillCard
            title="Unit Testing"
            icon={<Test className="skill-icon" />}
          />
          <SkillCard
            title="Interaction Design"
            icon={<Interact className="skill-icon" />}
          />
          <SkillCard
            title="Visual Design"
            icon={<Visual className="skill-icon" />}
          />
        </div>
      </div>
      <div>
        <div className="section-title">Little bit more about me...</div>
        <div className="d-flex">
          <div className="about-description">
            Photography has been my passion for a decade, and love for biking is
            adding exhilarating new perspectives to my creative journey.
          </div>
          <div>Carousel</div>
        </div>
        <div className="about-description">
          Despite my engineering roots, I excel in merging creativity with
          practicality, striking a perfect balance that drives innovative
          outcomes.
        </div>
      </div>
    </div>
  );
};

export default Profile;
