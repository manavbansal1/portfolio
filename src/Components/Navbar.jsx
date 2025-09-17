import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../CSS/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand me-auto mx-3" href="#">Portfolio</a>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Manav's Portfolio</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link mx-lg-2 active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
        <a className="contact-button" href="#" role="button">Contact</a>
        <button
          className="navbar-toggler pe-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
