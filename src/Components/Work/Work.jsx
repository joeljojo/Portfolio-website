import React from "react";
import "../Work/Work.css";
import { FaConnectdevelop, FaReact, FaNodeJs } from "react-icons/fa";

const Work = () => {
  // const style ={color:"rgb(17, 17, 182)", transform:}
  return (
    <div>
      <div className="top-services">
        <div className="top-service-heading">
          <h2>Top</h2>
          <h1>Skills</h1>
        </div>
        <div className="service">
          <FaConnectdevelop size={28} />
          <h2>Responsive Web Development</h2>
          <p>
            I develop highly responsive website with great experience even on
            smaller screen sizes.
          </p>
        </div>

        <div className="service">
          <FaReact size={28} />
          <h2>Frontend</h2>
          <p>
            I build applications with React, HTML, CSS and Javascript to produce
            beautiful and attractive <b>UI</b> to the users.
          </p>
        </div>
        <div id="service3" className="service">
          <FaNodeJs size={28} />
          <h2>Backend</h2>
          <p>
            I am experienced in backend development using Nodejs, Express,
            MySQL, MSSQL, and MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
