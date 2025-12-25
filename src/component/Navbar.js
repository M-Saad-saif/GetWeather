// import { title } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import IconImg from "./GetweathericonIMG.png";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={IconImg} alt="" />
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={(e) => {
                    // e.preventDefault();
                    props.setMode("Current");
                    // this.props.setshowResult(false);
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
                    // e.preventDefault();
                    props.setMode("forecast");
                    // this.props.setshowResult(false);
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
                  GitHub<i className="ri-github-fill"></i>
                </button>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.prototype = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
