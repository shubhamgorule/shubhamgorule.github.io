import React from "react";
import { ReactComponent as Figma } from "../assets/icons/figma.svg";
import { ReactComponent as Spreadsheet } from "../assets/icons/spreadsheet.svg";
import { ReactComponent as Zoom } from "../assets/icons/zoom.svg";
import { ReactComponent as Golf } from "../assets/icons/solar_golf-bold-duotone.svg";
import { ReactComponent as Usericon } from "../assets/icons/solar_users-group-two-rounded-bold-duotone.svg";
import { ReactComponent as Atom } from "../assets/icons/solar_atom-bold-duotone.svg";
import { ReactComponent as Mask } from "../assets/icons/solar_masks-bold-duotone.svg";
import { ReactComponent as Task } from "../assets/icons/solar_clipboard-list-bold-duotone.svg";
import { ReactComponent as UserId } from "../assets/icons/solar_user-id-bold-duotone.svg";
import { ReactComponent as Group } from "../assets/icons/Group.svg";
import { ReactComponent as Bulb } from "../assets/icons/solar_lightbulb-bolt-bold-duotone.svg";
import goalsetting from "../assets/images/Frame82.png";
import academicresource from "../assets/images/Frame83.png";
import senseofcommunity from "../assets/images/Frame84.png";
import LargeNumber from "./LargeNumber";
import SectionTitle from "./SectionTitle";
import studyease from "../assets/images/studyease.svg";
import theprocess from "../assets/images/The Process.svg";
import persona1 from "../assets/images/Persona 1.svg";
import persona2 from "../assets/images/Persona 2.svg";
import keyInsights from "../assets/images/Key Insights.svg";
import A41 from "../assets/images/A4 - 1.svg";
import A42 from "../assets/images/A4 - 2.svg";
import A43 from "../assets/images/A4 - 3.svg";
import A44 from "../assets/images/A4 - 4.svg";
import CaseTile from "./CaseTile";
import finalApp1 from "../assets/images/Frame 26085527.svg";
import finalApp2 from "../assets/images/Frame 26085529.svg";
import ideation from "../assets/images/IMG_6999 1.svg";
import ideation2 from "../assets/images/Frame 1668.svg";
import ideation3 from "../assets/images/Frame 16681.svg";

const CaseStudy = () => {
  return (
    <div className="case-study-page">
      <div className="w-100 case-study-title-img-container">
        <div className="case-study-title-container">
          <div className="case-study-title">Study-Eaze</div>
          <div className="case-study-subtitle">
            Mobile based app which helps students stay productive and achieve
            their academic ambitions
          </div>
        </div>
        <div className="case-study-img">
          {/* <img src={studyease} alt="" /> */}
        </div>
      </div>
      <div className="background-section">
        <div className="w-100 d-flex">
          <div>
            <div className="background-section-title">The Background</div>
            <div className="background-section-text-content">
              After performing initial research, the team found out 76% of
              international students faced difficulty in managing academic
              performance, connecting with new students, getting acquainted with
              new culture, and loneliness, among a few challenges. This
              investigation was part of an academic project tasked by the
              university to enhance the productivity of students.
            </div>
          </div>
        </div>
        <div className="frame51">
          <div className="frame49">
            <div className="w-100">
              <div className="medium-text">My Role</div>
              <div className="value-text">UX UI Designer</div>
              <div className="value-text">Interaction Designer</div>
              <div className="value-text">Visual Designer</div>
            </div>
            <div className="w-100">
              <div className="medium-text">Team</div>
              <div className="value-text">
                <div>1 Designer/Researcher</div>
                <div>1 Designer</div>
                <div>2 Developers</div>
              </div>
            </div>
            <div className="w-100">
              <div className="medium-text">Industry</div>
              <div className="value-text">Ed-Tech</div>
              <div className="value-text">Productivity</div>
            </div>
            <div className="w-100">
              <div className="medium-text">Duration</div>
              <div className="value-text">3 Months</div>
            </div>
          </div>
          <div className="frame50">
            <div className="medium-text">Tools</div>
            <div className="d-flex gap-4">
              <div className="frame87">
                <div className="icon-size">
                  <Figma />
                </div>
                <div className="icon-label">Figma</div>
              </div>
              <div className="frame87">
                <div className="icon-size">
                  <Spreadsheet />
                </div>
                <div className="icon-label">Sheets</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="frame69">
          <div className="background-section-title">The Research</div>
          <div className="background-section-text-content">
            The team conducted User Research with 12 International Students and
            User Observations of 4 International Students.
          </div>
        </div>
        <div className="tile-section-cont">
          <div className="frame69">
            <div className="heading2">Key Research Insights</div>
            <div className="background-section-text-content">
              Key Research insights were synthesized depending on the amount of
              students facing the issue and the impact it had on their
              productivity.
            </div>
          </div>
          <div className="case-tile-cont">
            <CaseTile
              title="67%"
              subtitle="Students faced challenges in setting achievable goals"
            />
            <CaseTile
              title="83%"
              subtitle="Students avoided connecting with new students due to lack of information about common interest and lack of skill in breaking the ice"
            />
            <CaseTile
              title="67%"
              subtitle="Students faced issues in searching valuable academic resources apart from syllabus"
            />
          </div>
        </div>
      </div>
      <div className="tile-section-cont">
        <div className="frame69">
          <div className="background-section-title">The Opportunity</div>
          <div className="background-section-text-content">
            The insights from research guided the team to focus on following
            opportunities:
          </div>
        </div>
        <div className="case-tile-cont">
          <CaseTile
            title="HMW 1"
            subtitle="How might we help students in setting achievable academic goals"
          />
          <CaseTile
            title="HMW 2"
            subtitle="How might we help students in building a sense of community and foster engagement"
          />
        </div>
      </div>
      <div className="tile-section-cont">
        <div className="frame69">
          <div className="heading2">The Solution</div>
          <div className="background-section-text-content">
            After the ideation phase, multiple iterations were designed by
            incorporating the inputs from 2 Expert Usability Tests and 1
            Structured Usability Test. The final solution was designed
            considering following key Pillars:
          </div>
        </div>
        <div className="frame84">
          <img style={{ width: "30%" }} src={goalsetting} alt="" />
          <img style={{ width: "30%" }} src={academicresource} alt="" />
          <img style={{ width: "30%" }} src={senseofcommunity} alt="" />
        </div>
        <div className="frame69">
          <div className="background-section-title">Final App</div>
          <div className="background-section-text-content">
            The insights from research guided the team to focus on following
            opportunities:
          </div>
        </div>
        <div className="app-img-cont">
          <img className="w-100" src={finalApp1} alt="" />
          <img className="w-100" src={finalApp2} alt="" />
        </div>
      </div>
      <div className="tile-section-cont">
        <div className="frame69">
          <div className="background-section-title">
            The journey to make goals achievable
          </div>
          <div className="background-section-text-content">
            After some research and brainstorming the team reached a consensus
            that the lack of clear objectives is the primary reason behind
            unattainable goals.
          </div>
        </div>
        <div className="frame69">
          <div className="heading2">Ideation</div>
          <div className="background-section-text-content">
            Ideation was performed in the form of sketches as it helped the team
            easily try out different ideas and keep the most effective idea in
            time efficient way
          </div>
        </div>
        <div className="app-img-cont">
          <img className="w-75 m-auto" src={ideation} alt="" />
        </div>
      </div>
      <div className="tile-section-cont">
        <div className="frame69">
          <div className="heading2">Expert Usability Testing</div>
          <div className="background-section-text-content">
            The project heavily emphasized expert usability testing, seeking
            objective critiques and facilitating early design changes before
            transitioning to Structured Usability Testing. Due to time
            constraints, the team developed mid-fidelity prototypes, balancing
            the need for detail with the necessity for efficiency.
          </div>
        </div>
        <div className="case-tile-cont">
          <CaseTile
            title="2 Tests"
            subtitle="2 Expert Usability Tests were performed and 2 iterations of designs were developed"
          />
          <CaseTile
            title="12 issues"
            subtitle="Key issue were related to goal setting, navigation, iconography and discoverability"
          />
          <CaseTile
            title="10 Changes"
            subtitle="Changes were finalized based on its impact on the Key tasks"
          />
        </div>
        <div className="frame69">
          <div className="background-section-text-content">
            The initial plan used AI to help clarify students' goals. However,
            tests showed it wasn't flexible enough for all goal types, mainly
            because of unclear goals and lack of method awareness. To solve this
            issue, goals were organized into four categories: Time-bound,
            Deadline-based, Habit-based, and AI-assisted, improving clarity and
            awareness.
          </div>
        </div>
        <div className="app-img-cont">
          <img className="w-100" src={ideation2} alt="" />
        </div>
      </div>
      <div className="tile-section-cont">
        <div className="frame69">
          <div className="heading2">Structured Usability Testing</div>
          <div className="background-section-text-content">
            To maintain cohesiveness in test data, structured usability testing
            was performed
          </div>
        </div>
        <div className="case-tile-cont">
          <CaseTile
            title="1 Test"
            subtitle="1 Structured Usability Test was performed and 2 iterations of designs were developed"
          />
          <CaseTile
            title="12 users"
            subtitle="Key issue were related to goal setting, navigation, iconography and discoverability"
          />
          <CaseTile
            title="15 Changes"
            subtitle="Changes were finalized based on its impact on the Key tasks"
          />
        </div>
        <div className="frame69">
          <div className="background-section-text-content">
            The initial idea was based on AI assisting the student to bring
            clarity of goal. But test suggested that the method was not flexible
            to include all types of goals. Goals were unattainable due to 2
            reasons
            <ol>
              <li>Lack of clarity of goals</li>
              <li>Lack of awareness about methods</li>
            </ol>
            <br />
            After analyzing all the types of goals, the goals were divided into
            4 categories (Time bound, Deadline based, Habit based and AI
            assisted Goals) which solved the issue of awareness and clarity
          </div>
        </div>
        <div className="app-img-cont">
          <img className="w-100" src={ideation3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
