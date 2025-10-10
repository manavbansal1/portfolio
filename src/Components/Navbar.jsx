import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Navbar.css';

export default function Navbar( {onContactClick}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <NavLink className="navbar-brand me-auto mx-3" to="/">Portfolio</NavLink>
        <div
          className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ visibility: isOpen ? 'visible' : 'hidden' }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Manav's Portfolio</h5>
            <button type="button" className="btn-close" onClick={() => setIsOpen(false)} aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink to="/" end className={({ isActive }) => 'nav-link mx-lg-2' + (isActive ? ' active' : '')} onClick={handleLinkClick}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className={({ isActive }) => 'nav-link mx-lg-2' + (isActive ? ' active' : '')} onClick={handleLinkClick}>Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/skills" className={({ isActive }) => 'nav-link mx-lg-2' + (isActive ? ' active' : '')} onClick={handleLinkClick}>Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => 'nav-link mx-lg-2' + (isActive ? ' active' : '')} onClick={handleLinkClick}>About</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <button className="contact-button" onClick={onContactClick}>Contact</button>
        <button
          className="navbar-toggler pe-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      {isOpen && (
        <div 
          className="offcanvas-backdrop fade show" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}