import React from "react";
import Logo from "../../Images/logo2.PNG";
import "../Header/Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img id="logo" src={Logo} alt="Logo" />
      </div>
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>Work</li>
          <li>Services</li>
          <li>my cv</li>
        </ul>
      </div>
      <div className="contact-btn">Contact</div>
    </div>
  );
};

export default Header;
