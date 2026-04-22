import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="FITNASHTA" />
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#hero">HOME</a></li>
          <li><a href="#hero">ABOUT US</a></li>
          <li><a href="#products">PRODUCTS</a></li>
          <li><a href="#ingredients">INGREDIENTS</a></li>
          <li><a href="#about">SERVICES</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>

        {/* Order Button */}
        <div className="button-wrapper">
          <button className="ord-btn">ORDER NOW</button>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
