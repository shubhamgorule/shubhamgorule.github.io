import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import ProjectSection from "../components/ProjectSection";
import Testimonial from "../components/Testimonial";

const Homepage = () => {
  return (
    <div className="home-bg">
      <Navbar />
      <Profile />
      <ProjectSection />
      <Testimonial />
    </div>
  );
};

export default Homepage;
