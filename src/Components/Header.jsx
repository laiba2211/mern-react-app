import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="logo" width="40" className="me-2" />
          <span className="fw-bold text-success">Eatoreum</span>
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home  </Link>
            </li>
   
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">Our Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>

          </ul>

          <button className="btn btn-success">
            Shop Now
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Header;