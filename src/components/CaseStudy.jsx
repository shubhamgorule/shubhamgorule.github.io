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

const CaseStudy = () => {
  return (
    <div className="case-study-page">
      <div className="w-100">
        <div className="case-study-title-container">
          <div className="case-study-title">Study Ease</div>
          <div className="case-study-subtitle">
            Mobile based app which helps students achieve their academic
            pursuits
          </div>
        </div>
        <div className="case-study-img">
          <img src={studyease} alt="" />
        </div>
      </div>
      <div className="background-section">
        <div className="w-100 d-flex">
          <div className="w-50">
            <div className="background-section-title">The Background</div>
            <div className="background-section-text-content">
              Students
              <span className="medium-text">
                {" "}
                across the globe embark on a journey to
              </span>{" "}
              pursue academic interest at
              <span className="medium-text">
                {" "}
                leading educational institutes. This transformative journey is
                accompanied by unique set of{" "}
              </span>
              challenges including cultural adjustments, physical distance{" "}
              <span className="medium-text"> from homeland and</span> connecting
              with unknown people{" "}
              <span className="medium-text">
                {" "}
                to name a few. These challenges can often impact the very reason
                of their journey - The academic pursuit. Recognizing these
                complexities, we have decided to design an
              </span>{" "}
              app to assist students{" "}
              <span className="medium-text">
                {" "}
                in overcoming these multifaceted challenges and
              </span>{" "}
              enhance their academic pursuits.
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
                <div>2 Designers</div>
                <div>4 Developers</div>
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
                  <Zoom />
                </div>
                <div className="icon-label">Zoom</div>
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
      <div className="frame69">
        <div className="background-section-title">The Challenge</div>
        <div className="background-section-text-content medium-text">
          <span className="medium-text">
            How might we help students achieve their academic pursuits
          </span>
        </div>
      </div>
      <div className="frame69">
        <div className="background-section-title">The Solution</div>
        <div className="background-section-text-content">
          <span className="medium-text">
            {" "}
            Through research and extensive testing we finally designed a mobile
            app focused on
          </span>{" "}
          3 key pillars
        </div>
        <div className="frame84">
          <img style={{ width: "30%" }} src={goalsetting} alt="" />
          <img style={{ width: "30%" }} src={academicresource} alt="" />
          <img style={{ width: "30%" }} src={senseofcommunity} alt="" />
        </div>
      </div>
      <div className="frame69">
        <div className="background-section-title">The Process</div>
        <div className="background-section-text-content">
          <span className="medium-text">A</span> 5 Step iterative design process
          <span className="medium-text">
            was selected in which our key focus was on intensive testing
          </span>
          <span className="medium-text"> and</span> redesigning
          <span className="medium-text">
            {" "}
            according to insights gained from the testing.
          </span>
        </div>
        <div className="frame60">
          <img src={theprocess} alt="" className="w-100" />
        </div>
      </div>
      <div className="heading2">
        <span className="medium-text">Now</span> Lets dive deep
        <span className="medium-text">
          {" "}
          into the process we followed for the final solution
        </span>
      </div>
      <div className="frame62">
        <div>
          <div className="frame112">
            <LargeNumber number={"01"} />
            <SectionTitle title={" Understand and Define"} />
          </div>
          <div className="background-section-text-content">
            <span className="medium-text">
              Solving the right problem was an essential step. During this phase
              of the project we conducted user research for
            </span>{" "}
            <b>2 personas</b>
            <span className="medium-text">
              {" "}
              and boiled down the insights into
            </span>{" "}
            <b>8 key tasks.</b>
          </div>
          <div className="background-section-text-content"></div>
        </div>
        <div className="frame94">
          <div className="frame90">
            <div className="pointer-icon">
              <Golf />
            </div>
            <div className="heading2">Research Goals</div>
          </div>
          <div className="d-flex" style={{ gap: "32px" }}>
            <div class="frame-goals">
              <div class="text-wrapper">1</div>
              <p class="div">
                To identify factors affecting the academic pursuits
              </p>
            </div>
            <div class="frame-goals">
              <div class="text-wrapper">2</div>
              <p class="div">
                To understand how students are handling their challenges
              </p>
            </div>
            <div class="frame-goals">
              <div class="text-wrapper">3</div>
              <p class="div">
                To identify gaps in the current technological solutions
              </p>
            </div>
          </div>
        </div>
        <div className="frame95">
          <div className="frame90">
            <div className="pointer-icon">
              <Usericon />
            </div>
            <div className="heading2">User Research Methodologies</div>
          </div>
          <div className="frame96">
            <div className="research-card frame-goals">
              <div class="text-wrapper">1</div>
              <div className="heading2">User Interview - 12 Students</div>
              <div>
                <span className="medium-text">We performed </span>
                <span>unstructured User Interview </span>
                <span className="medium-text">with </span>
                <span>6 Online students </span>
                <span className="medium-text">and </span>
                <span>6 Offline students </span>
                <span className="medium-text">
                  to explore various challenge they face and the solution they
                  are currently adopting.
                </span>
              </div>
            </div>
            <div className="research-card  frame-goals">
              <div class="text-wrapper">2</div>
              <div className="heading2">User Observation - 4 Students</div>
              <div>
                <span className="medium-text">
                  Along with User Interview, User Observation was performed with{" "}
                </span>
                <span>2 Online students </span>
                <span className="medium-text">and </span>
                <span>2 Offline students </span>
                <span className="medium-text">o gain </span>
                <span>insights about their habits. </span>
              </div>
            </div>
          </div>
        </div>
        <div className="frame95">
          <div className="frame90">
            <div className="pointer-icon">
              <UserId />
            </div>
            <div className="heading2">Personas</div>
          </div>
          <div className="frame60">
            <img src={persona1} className="w-50" alt="" />
            <img src={persona2} className="w-50" alt="" />
          </div>
        </div>
        <div className="frame95">
          <div className="frame90">
            <div className="pointer-icon">
              <Atom />
            </div>
            <div className="heading2">Key Insights</div>
          </div>
          <div className="">
            <img src={keyInsights} className="w-100" alt="" />
          </div>
        </div>
        <div className="frame95">
          <div className="frame90">
            <div className="pointer-icon">
              <Task />
            </div>
            <div className="heading2">Key Tasks</div>
          </div>
          <div className="d-flex w-100">
            <div className="w-50">
              <div className="medium-text">Online Student</div>
              <div>
                <li>Setting a Goal</li>
                <li>Tracking a Goal</li>
                <li>Getting to know and attending event</li>
                <li>Connecting with friends</li>
              </div>
            </div>
            <div className="w-50">
              <div className="medium-text">Offline Student</div>
              <div>
                <li>Accessing study resources</li>
                <li>Joining online events and meetings</li>
                <li>Adding interests and hobbies</li>
                <li>Connecting with new friends</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="heading2">
        <span className="medium-text">At this point of time</span> we had a
        clear direction
        <span className="medium-text"> for our design</span> to begin with!
      </div>
      <div className="frame62">
        <div>
          <div className="frame112">
            <LargeNumber number={"02"} />
            <SectionTitle title={"The First Iteration"} />
          </div>
          <div className="background-section-text-content w-50">
            <span className="medium-text">
              The insights from research were good enough to
            </span>{" "}
            Brainstorm
            <span className="medium-text">
              {" "}
              and develop first iteration in the form of
            </span>{" "}
            Mid-Fidelity Wireframes and Prototype.
            <span className="medium-text">
              {" "}
              This step was crucial as we narrowed down the research findings
              into practical design directions
            </span>
          </div>
          <div className="background-section-text-content">
            <div class="frame-brain">
              <div class="div">
                <div class="div-2">
                  <Group />
                  <div class="text-wrapper">Brainstorming</div>
                </div>
                <p class="taking-into-account">
                  <span class="span">
                    Taking into account the data gathered from the research, we
                    brainstormed and voted for features of the app. The result
                    of brainstorming and voting was an app focused on helping
                    students achieve their
                  </span>{" "}
                  <span class="text-wrapper-2">
                    Goals, connect with other students, join multiple groups,
                    attend events, attend study sessions and get academic
                    resources.
                  </span>
                </p>
              </div>
              <div class="div-3"></div>
            </div>
          </div>
        </div>
        <div className="frame60">
          <div className="d-flex gap-3">
            <div className="w-50">
              <div className="frame90">
                <div className="pointer-icon">
                  <Bulb />
                </div>
                <div className="heading2">Ideation</div>
              </div>
              <span className="medium-text">
                This phase was important in exploring multiple ways of
                approaching the solution.
              </span>{" "}
              Crazy 4
              <span className="medium-text">
                {" "}
                method was used to get the creative juices flowing. In the end
              </span>{" "}
              12 designs
              <span className="medium-text">
                {" "}
                were developed in the form of
              </span>{" "}
              sketches and low fidelity designs.
            </div>
            <div className="ideation-imges w-50">
              <img className="" src={A41} alt="" />
              <img className="" src={A42} alt="" />
              <img className="" src={A43} alt="" />
              <img className="" src={A44} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="frame62 ">
        <div>
          <div className="frame112">
            <LargeNumber number={"03"} />
            <SectionTitle title={"Expert Usability Testing"} />
          </div>
          <div className="background-section-text-content">
            5 Step iterative design process was selected where we focused
            intensively on Testing and redesigning as per insights
          </div>
        </div>
        <div className="frame60"></div>
      </div>
      <div className="frame62">
        <div>
          <div className="frame112">
            <LargeNumber number={"04"} />
            <SectionTitle title={"Structured Usability Testing"} />
          </div>
          <div className="background-section-text-content">
            5 Step iterative design process was selected where we focused
            intensively on Testing and redesigning as per insights
          </div>
        </div>
        <div className="frame60"></div>
      </div>
      <div className="frame62">
        <div>
          <div className="frame112">
            <LargeNumber number={"05"} />
            <SectionTitle title={"Final Design"} />
          </div>
          <div className="background-section-text-content">
            5 Step iterative design process was selected where we focused
            intensively on Testing and redesigning as per insights
          </div>
        </div>
        <div className="frame60"></div>
      </div>
      <div className="frame62">
        <div>
          <div className="frame112">
            {" "}
            <LargeNumber number={"06"} />
            <SectionTitle title={"Prototype"} />
          </div>
        </div>
        <div className="frame60"></div>
      </div>
    </div>
  );
};

export default CaseStudy;
