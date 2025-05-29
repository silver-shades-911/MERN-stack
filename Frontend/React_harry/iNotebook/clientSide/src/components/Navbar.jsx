import React from "react";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand">iNotebook</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/aboutus" className="nav-link">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;
