import React from "react";
import { useLocation } from 'react-router-dom';
function Header() {
  let location = useLocation();
  console.log(location.pathname)
  let inactive = "nav-link fs-5 fw-medium";
  let active = inactive+" active"

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid" style={{justifyContent:"space-around"}}>
          <a className="navbar-brand" href="#">
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
          <div className="collapse navbar-collapse" id="navbarNav" style={{flexGrow:0}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={location.pathname === "/" ? active:inactive} aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={location.pathname === "/work" ? active:inactive} href="/work">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className={location.pathname === "/about" ? active:inactive} href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={location.pathname === "/contact" ? active:inactive} href="/contact">
                  Contact
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
