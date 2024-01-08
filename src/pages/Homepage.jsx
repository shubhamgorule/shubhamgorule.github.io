import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import ProjectSection from "../components/ProjectSection";

const Homepage = () => {
  return (
    <div className="home-bg">
      <Navbar />
      <Profile />
      <ProjectSection />
    </div>
  );
};

export default Homepage;
