import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import "./Projects.css";
import MyInsta1 from "./myinsta-clone.jpg";
import AmazonClone1 from "./amazon-clone.jpg";
import Notes1 from "./google-notes.jpg";
import Portfolio1 from "./portfolio.jpg";
import CryptoMagnet1 from "./cryptomagnet.jpg";
import Amazon from "./Amazon.js";
import MyInsta from "./MyInsta.js";
import Notes from "./Notes.js";
import Portfolio from "./Portfolio.js";
import CryptoMagnet from "./CryptoMagnet.js";

const Projects = () => {
  const [activeProject, setActiveProject] = useState("");

  const [animation, setAnimation] = useState("");
  const showProject = (project) => {
    setAnimation("zoom-out full-page-animation");
    setTimeout(() => {
      setActiveProject(project);
      setAnimation("zoom-in full-page-animation");
    }, 10);
  };

  const goBack = () => {
    setAnimation("zoom-out full-page-animation");
    setTimeout(() => {
      setActiveProject("");
      setAnimation("zoom-in full-page-animation");
    }, 10);
  };

  return (
    <div className={animation}>
      {activeProject === "" ? (
        <div className="project-main">
          <h1 className="software-projects">Software Projects</h1>
          <div className="wrapper">
            <div className="project">
              <div
                className="project-box"
                onClick={() => showProject("CryptoMagnet")}
              >
                <div className="img-div">
                  <img
                    className="img-p"
                    src={CryptoMagnet1}
                    alt="CryptoMagnet"
                  />
                </div>
                <h1 className="h1"> Crypto Magnet </h1>
                <p className="p">
                  HTML, Chakra UI, JavaScript, React.js, API, React-Chartjs
                </p>
              </div>

              <div
                className="project-box"
                onClick={() => showProject("Portfolio")}
              >
                <div className="img-div">
                  <img className="img-p" src={Portfolio1} alt="Portfolio" />
                </div>
                <h1 className="h1"> Portfolio Website </h1>
                <p className="p">HTML, CSS, JavaScript, React.js, EmailJs</p>
              </div>


              <div
                className="project-box"
                onClick={() => showProject("MyInsta")}
              >
                <div className="img-div">
                  <img className="img-p" src={MyInsta1} alt="myInstaClone" />
                </div>
                <h1 className="h1"> MyInsta Clone </h1>
                <p className="p">
                  {" "}
                  HTML, TailWind CSS, JavaScript, React.js, Redux
                </p>
              </div>

             
              {/* <div className="project-box" onClick={() => showProject("Notes")}>
                <div className="img-div">
                  <img className="img-p" src={Notes1} alt="Google notes" />
                </div>
                <h1 className="h1"> Google Keep Notes </h1>
                <p className="p"> HTML, CSS, javascript</p>
              </div> */}

              <div
                className="project-box"
                onClick={() => showProject("Amazon")}
              >
                <div className="img-div">
                  <img
                    className="img-p"
                    src={AmazonClone1}
                    alt="Amazon Clone"
                  />
                </div>
                <h1 className="h1"> Amazon Clone </h1>
                <p className="p"> HTML, CSS</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="project-explore">
          <Button className="backbtn" onClick={goBack} variant="outlined">
            {" "}
            <ArrowBackIcon style={{ marginRight: 2 }} /> Back{" "}
          </Button>
          {activeProject === "MyInsta" && <MyInsta />}
          {activeProject === "Portfolio" && <Portfolio />}
          {activeProject === "Notes" && <Notes />}
          {activeProject === "Amazon" && <Amazon />}
          {activeProject === "CryptoMagnet" && <CryptoMagnet />}
        </div>
      )}
    </div>
  );
};

export default Projects;
