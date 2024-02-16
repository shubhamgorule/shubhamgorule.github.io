import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navigation-bar">
      <div className="d-flex gap-4">
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
    </div>
  );
};

export default Navbar;
