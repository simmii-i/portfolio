import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import "../About/About.css";
const About = () => {
  return (
    <>
      <div >
       <p className="about"> I'm Suman Saini, a web developer with a focus on creating websites that
        are user-friendly, minimalist, and visually appealing. I'm dedicated to
        delivering designs that look great and are easy to use, while
        maintaining a professional standard of quality. Additionally, as a
        student on a learning journey, I'm constantly seeking to improve my
        skills.
        </p>
      </div>
      <h1 className="work">What I'm Doing</h1>
      <div className="skills-main">
        <div className="skills">
          <div className="ui-ux skill-box">
            <img src="/web-design.png" alt="ui" />
            <div className="skill-discription">
              <h1>Web Design</h1>
              <p>
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </div>
          <div className="webdev skill-box">
            <img src="/webDev.png" alt="webdev" />
            <div className="skill-discription">
              <h1>Web Development</h1>
              <p>
                Developing responsive and dynamic websites using the latest
                technologies
              </p>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="research skill-box">
            <img src="/optimization.png" alt="optimizatio" />
            <div className="skill-discription">
              <h1>Optimization</h1>
              <p>
                Optimizing web pages for performance, reducing loading times and
                SEO to improve ranking.
              </p>
            </div>
          </div>
          <div className="photograph skill-box">
            <img src="/communication.png" alt="client-communication" />
            <div className="skill-discription">
              <h1>Client Communication</h1>
              <p>
                Understanding client requirements and translating them into
                technical specifications
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="work">Technologies</h1>
      <div className="technology">
        <div className="tech-details">
          <img src="/html.png" alt="html" />
          <h1>HTML</h1>
        </div>
        <div className="tech-details">
          <img src="/css-3.png" alt="css" />
          <h1>CSS</h1>
        </div>
        <div className="tech-details">
          <img src="/t-css.png" alt="t-css" />
          <h1>Tailwind CSS</h1>
        </div>

        <div className="tech-details">
          <img src="/java-script.png" alt="java-scrip" />
          <h1>JavaScript</h1>
        </div>

        <div className="tech-details">
          <img src="/react.png" alt="react" />
          <h1>React Js</h1>
        </div>

        <div className="tech-details">
          <img src="/nextjs.png" alt="nextjs" />
          <h1>Next Js</h1>
        </div>

        <div className="tech-details">
          <img src="/typescript.png" alt="typescript" />
          <h1>TypeScript</h1>
        </div>

        <div className="tech-details">
          <img src="/git.png" alt="git" />
          <h1>Git Bash</h1>
        </div>

        <div className="tech-details">
          <img src="/github.png" alt="github" />
          <h1>Github</h1>
        </div>

        <div className="tech-details">
          <img src="/api.png" alt="api" />
          <h1>API</h1>
        </div>

        <div className="tech-details">
          <img src="/mui.png" alt="mui" />
          <h1>Material Ui</h1>
        </div>

        <div className="tech-details">
          <img src="/bootstrap.png" alt="bootstrap" />
          <h1>Bootstrap</h1>
        </div>
      </div>
    </>
  );
};

export default About;
