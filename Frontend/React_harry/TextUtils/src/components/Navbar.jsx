import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Navbar({ brand = "TextUtils", navOption = "About Us", toggleModeFunc, darkMode}) {

  return (
    <nav className={`navbar navbar-expand-lg bg-${darkMode === true ? 'black' : 'light'} `} >
      <div className={`container-fluid text-${darkMode === false? 'dark' : 'light'}`}>
        <a className={`navbar-brand text-${darkMode === false? 'dark' : 'light'}`} href="/">
          {brand}
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
              <Link className={`nav-link text-${darkMode === false? 'dark' : 'light'}`} aria-current="page" to="/">
                Home
                {console.log(darkMode)}
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${darkMode === false? 'dark' : 'light'}`} to="/about">
                {navOption}
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch ${document.body.style.width > "500px" ? "mx-5" : "me-5"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckChecked"
              onChange={toggleModeFunc}
            />
            <label className={`form-check-label text-${darkMode === false? 'dark' : 'light'}`} htmlFor="switchCheckChecked">
             {darkMode ? "Dark Mode" : "Light Mode"}
            </label>
          </div>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className={`btn btn-${darkMode === false ? 'dark' : 'secondary' }`} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// This synatx is for type checking  -- In Begineer level
// In advance level --> we use TypeScript that handle Type checking
Navbar.propTypes = {
  brand: PropTypes.string,
  navOption: PropTypes.string,
};

export default Navbar;
