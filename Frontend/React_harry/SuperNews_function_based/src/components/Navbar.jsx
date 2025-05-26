import React from "react";
import { Link } from "react-router";

let Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            SuperNews
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/business" className="nav-link ">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/entertainment" className="nav-link ">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/health" className="nav-link ">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/science" className="nav-link ">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sports" className="nav-link ">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/technology" className="nav-link ">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
