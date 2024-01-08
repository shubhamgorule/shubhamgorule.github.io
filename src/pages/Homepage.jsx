import React from "react";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <div className="home-bg">
      <Navbar />
      <div className="title-box">
        <div className="title">I'm Shubham Gorule</div>
        <div className="subtitle">
          I help Transform Ideas into Engaging Digital Experiences with
          Precision and Creativity
        </div>
        <div className="profile-img"></div>
      </div>
    </div>
  );
};

export default Homepage;
