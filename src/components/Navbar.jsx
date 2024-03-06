import React from "react";
import { Link } from "react-scroll";
import bulb from "../assets/images/istockphoto-1458606797-1024x1024 1.png";
const Navbar = () => {
  return (
    <div className="w-100">
      <div className="navigation-bar">
        <div className="navigation-button">Projects</div>
        <div className="navigation-button">About</div>
        <div className="navigation-button">Connect</div>
      </div>
      <div
        style={{
          position: "absolute",
          right: "0px",
          top: "0px",
          zIndex: -1,
        }}
      >
        <img src={bulb} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
