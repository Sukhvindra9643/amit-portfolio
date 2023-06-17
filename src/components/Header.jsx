import React from "react";
import { useLocation,Link } from 'react-router-dom';
import "../App.css"

function Header() {
  let location = useLocation();
  let inactive = "nav-link fs-5 fw-medium";
  let active = inactive+" active"

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid" style={{justifyContent:"space-around"}}>
          <a className="navbar-brand navbar-logo" href="#">
            <img src="https://res.cloudinary.com/dk0o7tdks/image/upload/v1686433147/logo_portfolio_1_eptpen.png" alt="logo" className="w-50"/>
          </a>
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
                <Link className={location.pathname === "/" ? active:inactive} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={location.pathname === "/work" ? active:inactive} to="/work">
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link className={location.pathname === "/about" ? active:inactive} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={location.pathname === "/contact" ? active:inactive} to="/contact">
                  Contact
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
