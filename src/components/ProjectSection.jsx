import React from "react";
import ProjectCard from "./ProjectCard";
import itmis from "../assets/images/Frame26085534.png";
import studyEz from "../assets/images/Frame260855341.png";
const ProjectSection = () => {
  return (
    <div id="projects" className="project-card-container">
      <div className="project-header">My Project</div>
      <ProjectCard
        image={itmis}
        title="Redesign of IT-MIS Dashboard"
        tags={[
          "User Research",
          "UX Strategy",
          "Visual Design",
          "User Testing",
          "Evaluation",
        ]}
        content="Short Description of the Project"
        path="/project/it-mis"
      />
      <ProjectCard
        image={studyEz}
        title="Study Ez"
        tags={[
          "User Research",
          "Expert Usability Testing",
          "Visual Design",
          "Interaction Design",
          "Structured Usability Testing",
        ]}
        content="Short Description of the Project"
        path="/project/study-ease"
      />
    </div>
  );
};

export default ProjectSection;
