import React, { useEffect } from "react";
import { ReactComponent as Figma } from "../assets/icons/figma.svg";
import { ReactComponent as Spreadsheet } from "../assets/icons/spreadsheet.svg";
import { ReactComponent as Microsoft } from "../assets/icons/Microsoft logo.svg";
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
import finalApp1 from "../assets/images/Frame 26085527.svg";
import finalApp2 from "../assets/images/Frame 26085529.svg";
import ideation from "../assets/images/IMG_6999 2.svg";
import ideation2 from "../assets/images/Frame 1668.svg";
import ideation3 from "../assets/images/Frame 16681.svg";
import CaseTileItmis from "./CaseTileItmis";

const CaseStudyItmis = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <div className="case-study-page">
      <div className="w-100 case-study-title-img-container">
        <div className="case-study-title-container">
          <div className="case-study-title">Redesign of IT-MIS Dashboard</div>
          <div className="case-study-subtitle">
            Redesigned the Dashboard to achieve 23% reduction for Time on task
            and improvement in SUS score from 59 to 87.
          </div>
        </div>
        <div className="case-study-img2">
          {/* <img src={studyease} alt="" /> */}
        </div>
      </div>
      <div className="background-section">
        <div className="w-100 d-flex">
          <div>
            <div className="background-section-title">The Background</div>
            <div className="background-section-text-content">
              Simdaa Technologies is an emerging Business Analytics company,
              dedicated to providing data-driven insights in the form of SAAS
              Dashboards. For the past 3 years IT-MIS Dashboard which provided
              day-to-day insights into the health and efficiency of the IT
              systems had been shipped and was live for one of its clients. This
              project was focused on identifying and enhancing User Experience
              opportunities for the IT-MIS Dashboard.
            </div>
          </div>
        </div>
        <div className="frame51">
          <div className="frame49">
            <div className="w-100">
              <div className="medium-text">My Role</div>
              <div className="value-text">UX Researcher</div>
              <div className="value-text">UX Strategy</div>
              <div className="value-text">Interaction Designer</div>
              <div className="value-text">Visual Designer</div>
            </div>
            <div className="w-100">
              <div className="medium-text">Product(Users)</div>
              <div className="value-text">
                <div>SAAS Dashboard</div>
                <div>(18,430 Users)</div>
              </div>
            </div>
            <div className="w-100">
              <div className="medium-text">Company</div>
              <div className="value-text">Simdaa Technologies</div>
              <div className="value-text">Productivity</div>
            </div>
            <div className="w-100">
              <div className="medium-text">Duration</div>
              <div className="value-text">11 Months</div>
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
              <div className="frame87">
                <div className="icon-size">
                  <Microsoft />
                </div>
                <div className="icon-label">Microsoft Power Bi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="frame69">
          <div className="background-section-title">The Research</div>
          <div className="background-section-text-content">
            Direct and Indirect User Interviews were performed to understand
            areas of friction and explore opportunities, Stakeholder Interviews
            were performed to understand Simdaa technologies' current as well as
            future business and resource prospects. Evaluation was being
            performed to quantify and benchmark the current User Experience.
          </div>
        </div>
        <div className="tile-section-cont">
          <div className="frame69">
            <div className="heading2">Key Research Insights</div>
            <div className="background-section-text-content">
              User Research was conducted with 4 key Users: Chief Information
              Officer (CIO), Senior Leadership Team (SLT), IT Leadership Team
              (IT-LT) and Agents.
            </div>
          </div>
          <div className="case-tile-cont">
            <CaseTileItmis
              title="98%"
              subtitle="New Users found the dashboard to be complex and hard to navigate"
            />
            <CaseTileItmis
              title="22"
              subtitle="22 Severe Issues were Identified using Heuristic Evaluation"
            />
            <CaseTileItmis
              title="86%"
              subtitle="Users felt the need to switch seamlessly between tasks"
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
          <CaseTileItmis
            title="HMW 1"
            subtitle="How might we reduce the complexity of dashboard?"
          />
          <CaseTileItmis
            title="HMW 2"
            subtitle="How might we ensure a seamless transition to the new dashboard?"
          />
        </div>
      </div>
      <div className="tile-section-cont">
        <div className="frame69">
          <div className="heading2">The Solution</div>
          <div className="background-section-text-content">
            To ensure seamless transition, the project was divided into two
            phases
          </div>
        </div>
        <div className="case-tile-cont">
          <CaseTileItmis
            title="Phase 1"
            subtitle="To ensure smooth transition, visual redesign was introduced initially so that Users can get acquainted with new design. Guidelines were developed for the components of the dashboard and its pages."
          />
          <CaseTileItmis
            title="Phase 2"
            subtitle="This phase included change in the Information Architecture, few Data Visualization and cards of the dashboard."
          />
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
          <CaseTileItmis
            title="2 Tests"
            subtitle="2 Expert Usability Tests were performed and 2 iterations of designs were developed"
          />
          <CaseTileItmis
            title="12 issues"
            subtitle="Key issue were related to goal setting, navigation, iconography and discoverability"
          />
          <CaseTileItmis
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
          <CaseTileItmis
            title="1 Test"
            subtitle="1 Structured Usability Test was performed and 2 iterations of designs were developed"
          />
          <CaseTileItmis
            title="12 users"
            subtitle="Key issue were related to goal setting, navigation, iconography and discoverability"
          />
          <CaseTileItmis
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

export default CaseStudyItmis;
