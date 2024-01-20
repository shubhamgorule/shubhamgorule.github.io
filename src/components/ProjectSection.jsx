import React from "react";
import ProjectCard from "./ProjectCard";
import itmis from "../assets/images/MIS.png";
const ProjectSection = () => {
  return (
    <div>
      <div className="project-header-container">
        <div className="project-header">Project</div>
      </div>
      <div className="project-card-container">
        <ProjectCard
          image={itmis}
          title={"IT-MIS Dashboard"}
          subtitle={"Business Dashboard"}
          content={
            "I help Transform Ideas into Engaging Digital Experiences with Precision and Creativity"
          }
          path="/project/it-mis"
        />
        <ProjectCard
          image={itmis}
          title={"Dashboard"}
          subtitle={" Dashboard"}
          content={
            "I help Transform Ideas into Engaging Digital Experiences with Precision and Creativity"
          }
          path="/project/it-mis"
        />
        <ProjectCard
          image={itmis}
          title={"IT-MIS Dashboard"}
          subtitle={"Business Dashboard"}
          content={
            "I help Transform Ideas into Engaging Digital Experiences with Precision and Creativity"
          }
          path="/project/it-mis"
        />
        <ProjectCard
          image={itmis}
          title={"IT-MIS Dashboard"}
          subtitle={"Business Dashboard"}
          content={
            "I help Transform Ideas into Engaging Digital Experiences with Precision and Creativity"
          }
          path="/project/it-mis"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
