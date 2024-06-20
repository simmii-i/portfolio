import Diversity1Icon from "@mui/icons-material/Diversity2";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import network from "./network.jpg"
import java from "./java.jpg"
import ehe from "./ehe.jpg"

import React from "react";
import "../Resume/Resume.css";
const Resume = () => {
  return (
    <>
      <div className="education">
        <div className="education-left">
          <div className="education-line"></div>
          <SchoolIcon className="education-icon" />
          <RadioButtonCheckedIcon className="education-point1" />
          <RadioButtonCheckedIcon className="education-point2" />
          <RadioButtonCheckedIcon className="education-point3" />
        </div>
        <div className="education-right">
          <h1 className="Education-Section">Education</h1>
          <div className="college">
            <h1>Indira Gandhi University, Rewari, Haryana</h1>
            <h3>2021-Present</h3>
            <p>Bachelor Of Computer Application </p>
          </div>

          <div className="college class-12">
            <h1>Govt Senior Secondary School, Bawal, Rewari, Haryana</h1>
            <h3>2019</h3>
            <p>
              {" "}
              HBSE | Class XII <b> (Score: 80 %) </b>
            </p>
          </div>
          <div className="college class-10">
            <h1>Govt Senior Secondary School, Bawal, Rewari, Haryana</h1>
            <h3>2017</h3>
            <p>
              {" "}
              HBSE | Class X <b> (Score: 80 %) </b>
            </p>
          </div>
        </div>
      </div>

      <div className="achivements">
        <div className="achivements-left">
          <div className="achivements-line"></div>
          <EmojiEventsIcon className="achivements-icon" />
          <RadioButtonCheckedIcon className="achievements-point1" />
          <RadioButtonCheckedIcon className="achievements-point2" />
          <RadioButtonCheckedIcon className="achievements-point3" />
        </div>
        <div className="achivements-right">
          <h1 className="Achivements-Section">Certificates</h1>
          <div className="achivement1">
            <h1 >Java  </h1>
            <div className="certificate">
            <img className="cert-img" src={java} alt="certificate" />
          </div>
            <h3  className="ach-name">Apna College</h3>
            <p className="ach-place"
            >March, 2024 - Online</p>
          </div>


          <div className="achivement1">
            <h1>Network Security </h1>
            <div className="certificate">
            <img className="cert-img" src={network} alt="certificate" />
          </div>
            <h3  className="ach-name">Great Learning</h3>
            <p className="ach-place">August, 2022 - Online</p>
          </div>

          <div className="achivement1">
            <h1 >Ethical Hacking Essential (EHE)</h1>
            <div className="certificate">
            <img className="cert-img ehe" src={ehe} alt="certificate" />
          </div>
            <h3 className="ach-name">EC - Council (CoderRed)</h3>
            <p className="ach-place">April, 2022 - Online</p>
          </div>

        </div>

      </div>
          
      <div className="skill-percent">
          <h1 style={{fontSize:"2rem",fontWeight:600,display:"flex",alignItems:"center"}}> <PsychologyIcon style={{fontSize:"2rem",marginRight:5}} />Skills </h1>
          <div className="skill-Section">
            <h1 className="skill-name"> <b>HTML</b> 95% </h1>
            <div className="html"></div>
          </div>

          <div className="skill-Section">
            <h1 className="skill-name"> <b>CSS</b> 80% </h1>
            <div className="css"></div>
          </div>

          <div className="skill-Section">
            <h1 className="skill-name"> <b>JavaScript</b> 80% </h1>
            <div className="js"></div>
          </div>

          <div className="skill-Section">
            <h1 className="skill-name"> <b>TypeScript</b> 78% </h1>
            <div className="ts"></div>
          </div>

          <div className="skill-Section">
            <h1 className="skill-name"> <b>React Js</b> 90% </h1>
            <div className="react"></div>
          </div>

          <div className="skill-Section">
            <h1 className="skill-name"> <b>Next Js</b> 7% </h1>
            <div className="next"></div>
          </div>
      </div>
    </>
  );
};

export default Resume;
