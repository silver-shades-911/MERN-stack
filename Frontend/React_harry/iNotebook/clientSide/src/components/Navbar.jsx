import React, { useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {

  // want to show active on navbar ,nav-pages accroding to which page is active / open
   let location = useLocation();

   // using useEffect to re-render and show page location
  useEffect(
    () => {
     console.log(location.pathname);
    },
    [location] // dependency : re-render when location change
  );


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
              <NavLink to="/home" className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/aboutus" className={`nav-link ${location.pathname === "/aboutus" ? "active" : ""}`}>
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
