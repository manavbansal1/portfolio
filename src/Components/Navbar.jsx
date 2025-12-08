import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Navbar.css';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function Navbar( {onContactClick}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const getLinkClass = (path) => {
    const isActive = pathname === path;
    return `nav-link mx-lg-2${isActive ? ' active' : ''}`;
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand me-auto mx-3" href="/">Portfolio</Link>
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
                <Link href="/" className={getLinkClass('/')} onClick={handleLinkClick}>Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/projects" className={getLinkClass('/projects')} onClick={handleLinkClick}>Projects</Link>
              </li>
              <li className="nav-item">
                <Link href="/skills" className={getLinkClass('/skills')} onClick={handleLinkClick}>Skills</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className={getLinkClass('/about')} onClick={handleLinkClick}>About</Link>
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
        <button 
          className="theme-toggle-btn ms-3" 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
        >
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
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