import React from "react";
import { Link } from "react-scroll";
import bulb from "../assets/images/istockphoto-1458606797-1024x1024 1.png";
const Navbar = () => {
  return (
    <div className="navigation-bar">
      <Link
        className="navigation-button"
        to="projects"
        smooth={true}
        duration={500}
        spy={true}
        hashSpy={true}
        activeClass="navigation-button-active"
      >
        Projects
      </Link>
      <Link
        className="navigation-button"
        to="about"
        smooth={true}
        duration={500}
        spy={true}
        hashSpy={true}
        activeClass="navigation-button-active"
      >
        About
      </Link>{" "}
      <Link
        className="navigation-button"
        to="hero"
        smooth={true}
        duration={500}
        spy={true}
        hashSpy={true}
        activeClass="navigation-button-active"
      >
        Connect
      </Link>
    </div>
  );
};

export default Navbar;
