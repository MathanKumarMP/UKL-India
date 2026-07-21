import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Product', href: '#' },
    { name: 'Quality', href: '#' },
    { name: 'News', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="UKL Instruments" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeNav === link.name ? 'active' : ''}`}
                  onClick={() => {
                    setActiveNav(link.name);
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
                {activeNav === link.name && <span className="active-indicator"></span>}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section: Email Icon, Phone, Enquire Button & Globe Icon */}
        <div className="navbar-right">
          {!scrolled ? (
            <>
              <div className="contact-info">
                <div className="email-badge">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <span className="phone-number">+91 98411 27656</span>
              </div>

              <button className="enquire-btn">Enquire Now</button>
            </>
          ) : (
            <div className="globe-icon-badge">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0c0b20" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
          )}

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
