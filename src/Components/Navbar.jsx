import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../CSS/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <NavLink className="navbar-brand me-auto mx-3" to="/">Portfolio</NavLink>
        
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Manav's Portfolio</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink to="/" end className={({ isActive }) => 'nav-link mx-lg-2' + (isActive ? ' active' : '')}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className={({ isActive }) => 'nav-link mx-lg-2' + (isActive ? ' active' : '')}>Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/skills" className={({ isActive }) => 'nav-link mx-lg-2' + (isActive ? ' active' : '')}>Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => 'nav-link mx-lg-2' + (isActive ? ' active' : '')}>About</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <NavLink className="contact-button" to="/contact" role="button">Contact</NavLink>
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
