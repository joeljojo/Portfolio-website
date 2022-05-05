import React from "react";
import "../About/About.css";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import PersonalPicture from "../../Images/web-pic4.PNG";
import { IconContext } from "react-icons";
const About = () => {
  return (
    <div className="about">
      <div className="contact-icons">
        <ul>
          <li>
            <IconContext.Provider
              value={{
                color: "rgb(175, 171, 247)",
                size: "25px",
                tooltip: "Linkedin",
              }}
            >
              <FaLinkedin />
            </IconContext.Provider>
          </li>
          <li>
            <IconContext.Provider
              value={{ color: "rgb(175, 171, 247)", size: "25px" }}
            >
              <FaGithub />
            </IconContext.Provider>
          </li>
          <li>
            <IconContext.Provider
              value={{ color: "rgb(175, 171, 247)", size: "25px" }}
            >
              <FaTwitter />
            </IconContext.Provider>
          </li>
          <li>
            <IconContext.Provider
              value={{ color: "rgb(175, 171, 247)", size: "25px" }}
            >
              <FaInstagram />
            </IconContext.Provider>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="about-text">
          <h1>Hi, I'm Pamphyl</h1>
          <h1>
            Ouma Joel, <strong>a Web</strong>
          </h1>
          <h1>
            <strong>Developer.</strong>
          </h1>
          <p>I'm a young developer and a coding enthusiast</p>
          <p>with a huge motivation to create user-friendly </p>
          <p>and beautiful websites.</p>

          <div className="about-btn">Hire Me</div>
        </div>
        <div className="personal-pic">
          <img src={PersonalPicture} alt="Pamphyl Ouma Joel" />
        </div>
      </div>
    </div>
  );
};

export default About;
