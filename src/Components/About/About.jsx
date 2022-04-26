import React from "react";
import "../About/About.css";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const About = () => {
  return (
    <div className="about">
      <div className="contact-icons">
        <ul>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
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
          <p>I'm a yound developer and a coding enthusiast</p>
          <p>with a huge motivation to create user-friendly </p>
          <p>and beautiful websites.</p>

          <div className="about-btn">Hire Me</div>
        </div>
        <div className="personal-pic">
          <img src="" alt="Pamphyl Ouma Joel" />
        </div>
      </div>
    </div>
  );
};

export default About;
