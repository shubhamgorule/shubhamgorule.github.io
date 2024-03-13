import React, { useEffect, useState } from "react";
import { ReactComponent as Figma } from "../assets/icons/figma.svg";
import { ReactComponent as Spreadsheet } from "../assets/icons/spreadsheet.svg";
import goalsetting from "../assets/images/Frame82.png";
import academicresource from "../assets/images/Frame83.png";
import senseofcommunity from "../assets/images/Frame84.png";
import CaseTile from "./CaseTile";
import finalApp1 from "../assets/images/Frame 26085527.svg";
import finalApp2 from "../assets/images/Frame 26085529.svg";
import ideation from "../assets/images/Frame 1668 (2).svg";
import ideation2 from "../assets/images/Frame 1668.svg";
import ideation3 from "../assets/images/Frame 16681.svg";
import Tags from "./Tags";
import persona1 from "../assets/images/Persona 3.svg";
import persona2 from "../assets/images/Persona 4.svg";
import analysis1 from "../assets/images/Findings 1.png";
import analysis2 from "../assets/images/Thematic Analysis 1.png";
import keyInsights from "../assets/images/Key Insights (1).svg";
import keyFlow1 from "../assets/images/Frame 26085527 (1).svg";
import keyFlow2 from "../assets/images/Frame 26085525.svg";
import keyFlow3 from "../assets/images/Frame 26085528.svg";

import { Collapse } from "@mui/material";
const CaseStudy = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div className="case-study-page">
      <div className="w-100 case-study-title-img-container">
        <div className="case-study-title-container">
          <div className="case-study-title">Study-Eaze</div>
          <div className="case-study-subtitle">
            Mobile based app which helps students stay productive and achieve
            their academic ambitions
          </div>
          <div className="tag-container">
            <Tags tags="User Research" />
            <Tags tags="UX Strategy" />
            <Tags tags="Visual Design" />
            <Tags tags="User Testing" />
            <Tags tags="Evaluation" />
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
              title="Hard to set achievable goals"
              subtitle="8/12 students faced challenges in setting achievable goals"
            />
            <CaseTile
              title="Avoided conversation with strangers "
              subtitle="10/12 students avoided connecting with new students due to lack of information about common interest and lacked skill in breaking the ice"
            />
            <CaseTile
              title="Lacked academic resources"
              subtitle="8/12 Students faced issues in searching valuable academic resources apart from syllabus"
            />
          </div>
        </div>
        <div>
          <span
            className="see-more pointer"
            onClick={() => {
              setOpen(!open);
            }}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Click here
          </span>{" "}
          to know more about User Research
        </div>
        <Collapse in={open}>
          <div className="frame95">
            <div className="frame90">
              <div className="heading2">Personas</div>
            </div>
            <div className="frame60">
              <img src={persona1} className="w-50" alt="" />
              <img src={persona2} className="w-50" alt="" />
            </div>
          </div>
          <div className="frame95">
            <div className="frame90">
              <div className="heading2">Key Insights</div>
            </div>
            <div className="">
              <img src={keyInsights} className="w-100" alt="" />
            </div>
          </div>
        </Collapse>
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
            title="Goal Setting"
            subtitle="How might we help students in setting achievable academic goals"
          />
          <CaseTile
            title="Community Engagement"
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
        <div className="frame95">
          <div className="frame90">
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
        {/* <div className="frame69">
          <div className="background-section-title">Final App</div>
          <div className="background-section-text-content">
            The insights from research guided the team to focus on following
            opportunities:
          </div>
        </div>
        <div className="app-img-cont">
          <img className="w-100" src={finalApp1} alt="" />
          <img className="w-100" src={finalApp2} alt="" />
        </div> */}
      </div>

      <div className="tile-section-cont">
        <div className="frame69">
          <div className="heading2">
            The project heavily focused on user testing to refine the design
          </div>
          <div className="background-section-text-content">
            The project heavily emphasized expert usability testing, seeking
            objective critiques and facilitating early design changes before
            transitioning to Structured Usability Testing. Due to time
            constraints, the team developed mid-fidelity prototypes for expert
            usability testing, balancing the need for detail with the necessity
            for efficiency.
          </div>
        </div>
        <div className="case-tile-cont">
          <CaseTile
            title="2 Expert Usability Tests"
            subtitle="2 Expert Usability Tests were performed and 2 iterations of designs were developed"
          />
          <CaseTile
            title="1 Structured Usability Test"
            subtitle="Key issue were related to goal setting, navigation, iconography and discoverability"
          />
          <CaseTile
            title="10 Key changes"
            subtitle="Out of 26 changes, 10 key changes were finalized based on its impact and relevance to the Key tasks"
          />
        </div>
        <div>
          <span
            className="see-more pointer"
            onClick={() => {
              setOpen2(!open2);
            }}
            aria-controls="example-collapse-text"
            aria-expanded={open2}
          >
            Click here
          </span>{" "}
          to know more about Usability testing
        </div>
        <Collapse in={open2}>
          <div className="tile-section-cont">
            <div className="frame69">
              <div className="heading2">Analysis</div>
              <div className="background-section-text-content">
                Thematic Analysis was performed to organize qualitative data and
                the design changes were prioritized as per relevance to the key
                tasks
              </div>
            </div>
            <div className="d-flex gap-3">
              <div className="w-50">
                <img src={analysis2} alt="" />
                <label className="text-center w-100 mt-2">
                  Data Points from the usability testing
                </label>
              </div>
              <div className="w-50">
                <img src={analysis1} alt="" />
                <label className="text-center w-100 mt-2">
                  Thematic Analysis
                </label>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      <div className="tile-section-cont">
        <div className="frame69">
          <div className="heading2">
            Not every goal was achieved using same method
          </div>
          <div className="background-section-text-content">
            The initial design used AI to help clarify students' goals. However,
            tests showed it wasn't flexible enough for all goal types, mainly
            because of unclear goals and lack of method awareness amongst
            students. To solve this issue, goals were organized into four
            categories: Time-bound, Deadline-based, Habit-based, and AI-assisted
            goals, improving clarity and awareness.
          </div>
        </div>
        <div className="app-img-cont">
          <img className="w-100" src={ideation2} alt="" />
        </div>
      </div>
      <div className="tile-section-cont">
        <div className="frame69">
          <div className="heading2">
            Tracking the streak was effective than tracking completed goals
          </div>
          <div className="background-section-text-content">
            9/12 students felt the donut chart showing completed goals was not
            enough moreover incomplete goals made them anxious. As a result goal
            streak was measured to track the progress. Tracking the streaks gave
            students a sense of achievement along with the motivation to
            maintain the streaks
          </div>
        </div>
        <div className="app-img-cont">
          <img className="w-100" src={ideation} alt="" />
        </div>
        <div>
          <span
            className="see-more pointer"
            onClick={() => {
              setOpen3(!open3);
            }}
            aria-controls="example-collapse-text"
            aria-expanded={open3}
          >
            Click here
          </span>{" "}
          to view in depth user flows
        </div>
        <Collapse in={open3}>
          <div className="tile-section-cont">
            <div className="frame69">
              <div className="heading2">Key User Flows</div>
            </div>
            <div className="frame69">
              <div className="list-heading">1. Setting Achievable Goals</div>
              <div className="background-section-text-content">
                The Goal setting was categorized into 4 major parts which was
                helpful to 92% of users. This categorization ensured all types
                of Goals are included.
              </div>
            </div>
            <div className="app-img-cont">
              <img className="w-100" src={keyFlow1} alt="" />
            </div>
            <div className="frame69">
              <div className="list-heading">
                2. Having a sense of community and Its engagement
              </div>
              <div className="background-section-text-content">
                Connections section was a go to place for all the community
                related activities. 67% of users found the connection section
                helpful to start new conversations. 92% of users very highly
                satisfied with the events and resources tabs in the groups.
              </div>
            </div>
            <div className="app-img-cont">
              <img className="w-100" src={keyFlow2} alt="" />
            </div>
            <div className="frame69">
              <div className="list-heading">
                3. Personalized Recommendations
              </div>
              <div className="background-section-text-content">
                The personal recommendations feature was found helpful by 100%
                of users due to its scope of personal as well as academic
                interest and hobbies. The onboarding data helped student get
                personalized student recommendation with similar interest and
                hobbies.
              </div>
            </div>
            <div className="app-img-cont">
              <img className="w-100" src={keyFlow3} alt="" />
            </div>
          </div>
        </Collapse>
      </div>
      <div className="tile-section-cont">
        <div className="frame69">
          <div className="heading2">The Opportunity</div>
          <div className="background-section-text-content">
            The insights from research guided the team to focus on following
            opportunities:
          </div>
        </div>
        <div className="case-tile-cont">
          <CaseTile
            title="Goal Setting"
            subtitle="How might we help students in setting achievable academic goals"
          />
          <CaseTile
            title="Community Engagement"
            subtitle="How might we help students in building a sense of community and foster engagement"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
