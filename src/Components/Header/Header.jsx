import React from "react";
import Logo from "../../Images/logo3.PNG";
import { MdMenu } from "react-icons/md";
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
          <li>Services</li>
          <li>Work</li>
          <li>my cv</li>
        </ul>
      </div>
      <div className="contact-btn">Contact</div>
      <div className="mobile-nav-menu">
        <MdMenu size={28} />
      </div>
    </div>
  );
};

export default Header;
