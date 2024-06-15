import React, { useState } from "react";
import "./Home.css";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import { MenuOpen } from "@mui/icons-material";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Home = () => {
const [activeComponent, setActiveComponent] = useState("about");
const [transitionClass,setTransitionClass] = useState("");
const [smallScreen, setSmallScreen] = useState(false);


  const componentsOrder = ["about", "resume", "projects", "contact"];
 const changeComponent = (component) => {
    if(component !== activeComponent){
               const currentIndex = componentsOrder.indexOf(activeComponent);
               const targetIndex = componentsOrder.indexOf(component);
               const direction = currentIndex > targetIndex ? "left" : "right";

               if(direction === "left"){
                setTransitionClass("transition-exit-left");
                setTimeout(()=>{
                  setActiveComponent(component);
                  setTransitionClass("transition-enter-left");

                },0);
               }
               else if (direction === "right"){
                setTransitionClass("transition-exit-right");

                setTimeout(()=>{
                  setActiveComponent(component)
                  setTransitionClass("transition-enter-right");

                },0);
               }
    }
 }



  return (
    <div className="home">
      <div className="homeleft">
        <div className="left-mask"></div>
        <div className="subleft-main">
          <div className="image">
            <img src="./heroImage.png" alt="home" />
          </div>
          <h1 className="name">Suman Saini</h1>
          <div className="title">
            <p>Web Developer</p>
          </div>
          <div className="line"></div>
          <div className="main">
            <div className="email">
              <div className="emailIcon">
                {" "}
                <EmailIcon />
              </div>

              <div className="emailContent">
                <p>Email</p>

                <h4>suman.lappii@gmail.com</h4>
              </div>
            </div>
            <div className="email">
              <div className="emailIcon">
                {" "}
                <LocationOnIcon />
              </div>

              <div className="emailContent">
                <p>Location</p>

                <h4>Rewari, Haryana, India</h4>
              </div>
            </div>
          </div>
           
          <button className="small-screen-btn"
          onClick={()=>setSmallScreen(!smallScreen)}
          >
            {smallScreen ? <MenuOpenIcon/> : <MenuOpen/> }
          </button>
          
          <div className="resources">
            
            <div className="linkedin">
              <LinkedInIcon />

              <p className="sm-socials">
                <a
                  href="https://www.linkedin.com/in/suman-saini-835130223/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>

            <div className="linkedin">
              <GitHubIcon />
              <p className="sm-socials">
                <a
                  href="https://github.com/simmii-i"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="homeright">
        <div className="right-mask"></div>
        <div className="subright-main">
          <div className="header">
           {activeComponent === "about" && <h1>About</h1>} 
           {activeComponent === "resume" && <h1>Resume</h1>} 
           {activeComponent === "projects" && <h1>Projects</h1>} 
           {activeComponent === "contact" && <h1>Contact</h1>} 
            
            <div className="header-details">

              <h2 className={activeComponent=== "about" ? "btn-active" : "btn-normal"} onClick={()=> changeComponent("about")}>About </h2>
              <h2 className={activeComponent=== "resume" ? "btn-active" : "btn-normal"} onClick={()=> changeComponent("resume")}>Resume </h2>
              <h2 className={activeComponent=== "projects" ? "btn-active" : "btn-normal"} onClick={()=> changeComponent("projects")}>Projects </h2>
              <h2 className={activeComponent=== "contact" ? "btn-active" : "btn-normal"} onClick={()=> changeComponent("contact")}>Contact </h2>

            </div>
          </div>
          <div className={`content ${transitionClass}`}>
            {activeComponent=== "about" && <About />}
            {activeComponent=== "resume" && <Resume />}
            {activeComponent=== "projects" && <Projects/>}
            {activeComponent=== "contact" && <Contact/>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
