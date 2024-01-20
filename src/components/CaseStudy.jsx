import React from "react";
import { ReactComponent as Figma } from "../assets/icons/figma.svg";
import { ReactComponent as Spreadsheet } from "../assets/icons/spreadsheet.svg";
import { ReactComponent as Zoom } from "../assets/icons/zoom.svg";
import { ReactComponent as Golf } from "../assets/icons/solar_golf-bold-duotone.svg";
import { ReactComponent as Usericon } from "../assets/icons/solar_users-group-two-rounded-bold-duotone.svg";
import { ReactComponent as Atom } from "../assets/icons/solar_atom-bold-duotone.svg";
import { ReactComponent as Mask } from "../assets/icons/solar_masks-bold-duotone.svg";
import { ReactComponent as Task } from "../assets/icons/solar_clipboard-list-bold-duotone.svg";
import goalsetting from "../assets/images/Frame82.png";
import academicresource from "../assets/images/Frame83.png";
import senseofcommunity from "../assets/images/Frame84.png";
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
        <div className="case-study-img"></div>
      </div>
      <div className="background-section">
        <div className="w-100 d-flex">
          <div className="w-50">
            <div className="background-section-title">The Background</div>
            <div className="background-section-text-content">
              Students across the globe embark on a journey to pursue academic
              interest at leading educational institutes. This transformative
              journey is accompanied by unique set of challenges including
              cultural adjustments, physical distance from homeland and
              connecting with unknown people to name a few. These challenges can
              often impact the very reason of their journey - The academic
              pursuit. Recognizing these complexities, we have decided to design
              an app to assist students in overcoming these multifaceted
              challenges and enhance their academic pursuits.
            </div>
          </div>
        </div>
        <div className="frame51">
          <div className="frame49">
            <div className="w-100">
              <div className="medium-text">My Role</div>
              <div className="value-text">UX UI Designer</div>
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
        <div className="background-section-text-content">
          How might we help students achieve their academic pursuits
        </div>
      </div>
      <div className="frame69">
        <div className="background-section-title">The Solution</div>
        <div className="background-section-text-content">
          Through research and extensive testing we finally designed a mobile
          app focused on 3 key pillars
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
          A 5 Step iterative design process was selected in which our key focus
          was on intensive testing and redesigning according to insights gained
          from the testing.
        </div>
        <div className="frame60"></div>
      </div>
      <div className="heading2">
        Now Lets dive deep into the process we followed for the final solution
      </div>
      <div className="frame62">
        <div>
          <div className="frame112">
            <div className="extra-large-text">01</div>
            <div className="background-section-title">
              Understand and Define
            </div>
          </div>
          <div className="background-section-text-content">
            Solving the right problem was an essential step. During this phase
            of the project we conducted user research for two personas and
            boiled down the insights into 8 key tasks.
          </div>
        </div>
        <div className="frame94">
          <div className="frame90">
            <div className="pointer-icon">
              <Golf />
            </div>
            <div className="heading2">Goals</div>
          </div>
          <ol>
            <li className="background-section-text-content">
              To identify various factors affecting the academic pursuits of
              students
            </li>
            <li className="background-section-text-content">
              To understand the ways in which students are handling their
              challenges
            </li>
            <li className="background-section-text-content">
              To identify gaps in the current technological solutions
            </li>
          </ol>
        </div>
        <div className="frame95">
          <div className="frame90">
            <div className="pointer-icon">
              <Usericon />
            </div>
            <div className="heading2">User Research Methodologies</div>
          </div>
          <div className="frame96">
            <div className="research-card">
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
            <div className="research-card">
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
              <Atom />
            </div>
            <div className="heading2">Key Insights</div>
          </div>
          <div className="frame60"></div>
        </div>
        <div className="frame95">
          <div className="frame90">
            <div className="pointer-icon">
              <Mask />
            </div>
            <div className="heading2">Personas</div>
          </div>
          <div className="frame60"></div>
          <div className="frame60"></div>
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
        At this point of time we had a clear direction for our design to begin
        with!
      </div>
      <div className="frame62">
        <div>
          <div className="frame112">
            <div className="extra-large-text">02</div>
            <div className="background-section-title">The First Iteration</div>
          </div>
          <div className="background-section-text-content">
            After we got meaningful insights from the research, it was time to
            brainstorm and develop our first iteration to get ready for testing.
            We started brainstorming keeping in mind the user tasks and user
            scenarios
          </div>
        </div>
        <div className="frame60"></div>
      </div>
      <div className="frame62">
        <div>
          <div className="frame112">
            <div className="extra-large-text">03</div>
            <div className="background-section-title">
              Expert Usability Testing
            </div>
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
            <div className="extra-large-text">04</div>
            <div className="background-section-title">
              Structured Usability Testing
            </div>
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
            <div className="extra-large-text">05</div>
            <div className="background-section-title">Final Design</div>
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
            <div className="extra-large-text">06</div>
            <div className="background-section-title">Prototype</div>
          </div>
          <div className="background-section-text-content">
            5 Step iterative design process was selected where we focused
            intensively on Testing and redesigning as per insights
          </div>
        </div>
        <div className="frame60"></div>
      </div>
    </div>
  );
};

export default CaseStudy;
