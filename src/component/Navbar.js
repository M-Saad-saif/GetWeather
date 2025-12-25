// import { title } from "framer-motion/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import IconImg from "./GetweathericonIMG.png";

const Navbar = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleNavClick = (mode) => {
    props.setMode(mode);
    closeSidebar();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={IconImg} alt="Weather Icon" />
            {props.title}
          </Link>

          {/* Desktop Navigation */}
          <div className="d-none d-lg-block">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={(e) => {
                      props.setMode("Current");
                    }}
                  >
                    Current
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={(e) => {
                      props.setMode("forecast");
                    }}
                  >
                    Forecast
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <a
                  href="https://github.com/M-Saad-saif"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline-light" type="button">
                    GitHub <i className="ri-github-fill"></i>
                  </button>
                </a>
              </form>
            </div>
          </div>

          {/* Mobile Hamburger Button (Right side) */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
        onClick={closeSidebar}
      ></div>

      {/* Mobile Sidebar (Slides from right) */}
      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <button className="sidebar-close-btn" onClick={closeSidebar}>
            <i className="ri-close-line"></i>
          </button>
          <div className="sidebar-brand">
            <span>{props.title}</span>
          </div>
        </div>

        <div className="sidebar-menu">
          <Link
            className="sidebar-item"
            to="/"
            onClick={() => handleNavClick("Current")}
          >
            <i className="ri-sun-line"></i>
            <span>Current</span>
          </Link>

          <Link
            className="sidebar-item"
            to="/"
            onClick={() => handleNavClick("forecast")}
          >
            <i className="ri-calendar-line"></i>
            <span>Forecast</span>
          </Link>

          <Link className="sidebar-item" to="/about" onClick={closeSidebar}>
            <i className="ri-information-line"></i>
            <span>About</span>
          </Link>

          <div className="sidebar-divider"></div>

          <a
            className="sidebar-item"
            href="https://github.com/M-Saad-saif"
            target="_blank"
            rel="noreferrer"
            onClick={closeSidebar}
          >
            <i className="ri-github-fill"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </>
  );
};

Navbar.prototype = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
