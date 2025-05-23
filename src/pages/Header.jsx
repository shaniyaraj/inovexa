import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cmwlogo from '../assets/cmwlogo.svg';

function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);  // New: Mobile menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Close dropdowns when menu toggles (optional)
    if (menuOpen) {
      setServicesOpen(false);
      setProductsOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={cmwlogo} alt="CyberMind Works Logo" />
          <h1 style={{ margin: 0, fontSize: '22px', fontWeight: '620' }}>CyberMind Works</h1>
        </Link>
      </div>

      {/* Hamburger Button */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        type="button"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation Menu */}
      <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><Link to="about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li className="nav-item"><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>

          <li className="nav-item dropdown">
            <span
              onClick={() => setServicesOpen(!servicesOpen)}
              style={{ fontWeight: '500', fontSize: '16px', cursor: 'pointer' }}
            >
              Services
              <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </span>
            {servicesOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/services/web-apps" onClick={() => setMenuOpen(false)}>Web Apps</Link></li>
                <li><Link to="/services/mobile-apps" onClick={() => setMenuOpen(false)}>Mobile Apps</Link></li>
              </ul>
            )}
          </li>

          <li className="nav-item dropdown">
            <span
              onClick={() => setProductsOpen(!productsOpen)}
              style={{ fontWeight: '500', fontSize: '16px', cursor: 'pointer' }}
            >
              Products
              <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </span>
            {productsOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/products/profitabill" onClick={() => setMenuOpen(false)}>Profitabill</Link></li>
                <li><Link to="/products/farmyng-club" onClick={() => setMenuOpen(false)}>Farmyng Club</Link></li>
              </ul>
            )}
          </li>

          <li className="nav-item"><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li className="nav-item"><Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
        </ul>
      </nav>

      <Link to="/contact" className="contact-button" onClick={() => setMenuOpen(false)}>Contact Us</Link>
    </header>
  );
}

export default Header;
