import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navigation-bar">
      <div className="navigation-button">Home</div>
      <div className="navigation-button">Connect</div>
      <Link
        to="about"
        smooth={true}
        duration={1000}
        spy={true}
        hashSpy={true}
        activeClass="active"
      >
        <div className="navigation-button">Projects</div>
      </Link>
      <div className="navigation-button">About Me</div>
    </div>
  );
};

export default Navbar;
