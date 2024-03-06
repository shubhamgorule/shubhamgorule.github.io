import React from "react";
import SkillCard from "./SkillCard";
import { ReactComponent as User } from "../assets/icons/Component 48.svg";
import { ReactComponent as Wire } from "../assets/icons/Component 48 (1).svg";
import { ReactComponent as Proto } from "../assets/icons/Component 48 (2).svg";
import { ReactComponent as Test } from "../assets/icons/Component 48 (3).svg";
import { ReactComponent as Interact } from "../assets/icons/Component 48 (4).svg";
import { ReactComponent as Visual } from "../assets/icons/Component 48 (5).svg";
const Profile = () => {
  return (
    <div className="title-box" id="hero">
      <div className="d-flex flex-column gap-5">
        <div className="title">Hey! I'm Shubham Gorule</div>
        <div className="subtitle">
          Based in the vibrant heart of New York City🗽, I help brands connect
          deeply with their audience by crafting intuitive, effective and
          engaging digital interfaces.
        </div>
      </div>
      <div className="d-flex m-auto gap-2">
        <SkillCard
          title="User Research"
          icon={<User className="skill-icon" />}
        />
        <SkillCard title="Wireframing" icon={<Wire className="skill-icon" />} />
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
  );
};

export default Profile;
