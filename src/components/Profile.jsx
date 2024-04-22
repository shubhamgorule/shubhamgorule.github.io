import React from "react";
import SkillCard from "./SkillCard";
import { ReactComponent as User } from "../assets/icons/Component 48.svg";
import { ReactComponent as Wire } from "../assets/icons/Component 48 (1).svg";
import { ReactComponent as Proto } from "../assets/icons/Component 48 (2).svg";
import { ReactComponent as Test } from "../assets/icons/Component 48 (3).svg";
import { ReactComponent as Interact } from "../assets/icons/Component 48 (4).svg";
import { ReactComponent as Visual } from "../assets/icons/Component 48 (5).svg";
import bulb from "../assets/images/istockphoto-1458606797-1024x1024 1.png";
import { Carousel } from 'react-responsive-carousel';
import about1 from '../assets/about/IMG_9228-2.jpg'
import about2 from '../assets/about/SNG_0150.jpg'
import about3 from '../assets/about/SNG_0697.jpg'
import about4 from '../assets/about/SNG_5722.jpg'
import about5 from '../assets/about/SNG_5729.jpg'
import about6 from '../assets/about/SNG_5745.jpg'
import about7 from '../assets/about/SNG_6416.jpg'
import Marquee from "react-fast-marquee";
const Profile = () => {
  return (
    <div className="title-box" id="hero">
      <img
        src={bulb}
        style={{ position: "absolute", top: 0, right: 0, zIndex: 0 }}
        alt=""
      />
      <div className="d-flex flex-column gap-5">
        <div className="title">Hey! I'm Shubham Gorule</div>
        <div className="subtitle">
          Based in the vibrant heart of New York City🗽, I help brands connect
          deeply with their audience by crafting intuitive, effective and
          engaging digital interfaces.
        </div>
      </div>
      <div style={
        {
          width: "80%"
        }
      }>
        <div className="section-title">Skills that I'm good at include... </div>
        <Marquee gradient gradientColor="white" gradientWidth={20} autoFill pauseOnHover style={{ width: "90vw", overflow: 'hidden' }}>
          <SkillCard
            hover={'skill-1'}
            title="User Research"
            icon={<User className="skill-icon" />}
          />
          <SkillCard
            hover={'skill-2'}
            title="Wireframing"
            icon={<Wire className="skill-icon" />}
          />
          <SkillCard
            hover={'skill-3'}
            title="Prototyping"
            icon={<Proto className="skill-icon" />}
          />
          <SkillCard
            hover={'skill-4'}
            title="Unit Testing"
            icon={<Test className="skill-icon" />}
          />
          <SkillCard
            hover={'skill-5'}
            title="Interaction Design"
            icon={<Interact className="skill-icon" />}
          />
          <SkillCard
            hover={'skill-6'}
            title="Visual Design"
            icon={<Visual className="skill-icon" />}
          />
        </Marquee>
      </div>
      <div>
        <div className="section-title">Little bit more about me...</div>
        <div className="d-flex gap-2">
          <div className="about-description w-50 h-100">
            <div>
              Photography has been my passion for a decade, and love for biking is
              adding exhilarating new perspectives to my creative journey.
            </div>
          </div>
          <div className="carousel-box">
            <Carousel swipeable autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false}>
              <div>
                <img src={about1} className="about-img" />
              </div>
              <div>
                <img src={about2} className="about-img" />
              </div>
              <div>
                <img src={about3} className="about-img" />
              </div>
              <div>
                <img src={about4} className="about-img" />
              </div>
              <div>
                <img src={about5} className="about-img" />
              </div>
              <div>
                <img src={about6} className="about-img" />
              </div>
              <div>
                <img src={about7} className="about-img" />
              </div>
            </Carousel>

          </div>
        </div>
        <div className="about-description mt-3">
          Despite my engineering roots, I excel in merging creativity with
          practicality, striking a perfect balance that drives innovative
          outcomes.
        </div>
      </div>
    </div>
  );
};

export default Profile;
