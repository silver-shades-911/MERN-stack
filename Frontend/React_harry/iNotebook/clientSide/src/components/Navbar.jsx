import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  // want to show active on navbar ,nav-pages accroding to which page is active / open
  let location = useLocation();

  //useNAvigate

  const navigate = useNavigate();

  // using useEffect to re-render and show page location
  useEffect(
    () => {
      console.log(location.pathname);
    },
    [location] // dependency : re-render when location change
  );

  // Logout logic
   const handleLogout = () => {
    localStorage.removeItem('authtoken');
    navigate("/login");
   }

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="navbar-nav">
          <a className="navbar-brand">iNotebook</a>
          <div className="nav-item">
            <NavLink
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </NavLink>
          </div>

          <div className="nav-item">
            <NavLink
              to="/about"
              className={`nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About Us
            </NavLink>
          </div>
        </div>

        {!localStorage.getItem('authtoken') ? <div className="d-flex">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <NavLink
            to={"/login"
            }>
              <button type="button" className={`btn ${location.pathname === "/login" ? 'btn-light' : 'btn-dark'}`}>
              Login
            </button>
              </NavLink>
             <NavLink
            to={"/signup"
            }>
              <button type="button" className={`btn ${location.pathname === "/signup" ? 'btn-light' : 'btn-dark'}`}>
              SignUp
            </button>
              </NavLink>
          </div>
        </div> : <button type="button" className="btn btn-dark" onClick={handleLogout} >Logout</button> }
      </div>
    </nav>
  );
};

export default Navbar;
