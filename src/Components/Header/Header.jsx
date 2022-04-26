import React from "react";
import "../Header/Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img id="logo" src="" alt="Logo" />
      </div>
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>Work</li>
          <li>Services</li>
        </ul>
      </div>
      <div className="contact-btn">Contact</div>
    </div>
  );
};

export default Header;
