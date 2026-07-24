import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = ({ activeNav = 'Home', setActiveNav }) => {
  const [currentNav, setCurrentNav] = useState(activeNav);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setCurrentNav(activeNav);
  }, [activeNav]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Product', href: '#product' },
    { name: 'Quality', href: '#quality' },
    { name: 'News', href: '#news' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (name, href) => {
    setCurrentNav(name);
    if (setActiveNav) {
      setActiveNav(name);
    }
    if (href && window.location.hash !== href) {
      window.location.hash = href;
    }
    setMobileMenuOpen(false);
    setSidebarOpen(false);
  };

  return (
    <>
      <header className={`header-wrapper ${scrolled ? 'header-scrolled' : ''}`}>
        {/* 1. Dark Navy Top Contact & Social Bar */}
        <div className="top-bar">
          <div className="top-bar-container">
            {/* Left Side Contact Info */}
            <div className="top-bar-left">
              <div className="top-contact-item">
                <span className="top-icon mail-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>
                <a href="mailto:shreeram@uklindia.in" className="top-text-link">
                  shreeram@uklindia.in
                </a>
              </div>

              <div className="top-contact-item">
                <span className="top-icon phone-badge">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+919841127656" className="top-text-link phone-num">
                  +91 98411 27656
                </a>
              </div>
            </div>

            {/* Right Side Hours & Social Icons */}
            <div className="top-bar-right">
              <div className="top-hours">
                <span className="top-icon clock-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <span className="hours-text">Mon-Sat: 8:00 am – 7.00 pm</span>
              </div>

              <div className="social-icons-group">
                <a href="#" className="social-circle-btn" aria-label="Facebook">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#171738">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="social-circle-btn" aria-label="Twitter">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#171738">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                <a href="#" className="social-circle-btn" aria-label="YouTube">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#171738">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#ffffff" />
                  </svg>
                </a>
                <a href="#" className="social-circle-btn" aria-label="Instagram">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#171738" strokeWidth="2.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Main White Navigation Header */}
        <div className={`main-navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="navbar-container">
            {/* Logo */}
            <div className="navbar-logo" onClick={() => handleNavClick('Home', '#home')}>
              <img src={logo} alt="UKL Instruments" />
            </div>

            {/* Desktop Navigation Links with Active Green Underline Bar & Separators on Scroll */}
            <nav className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
              <ul className="navbar-links">
                {navLinks.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <li className="nav-item">
                      <a
                        href={link.href}
                        className={`nav-link ${currentNav === link.name ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.name, link.href);
                        }}
                      >
                        {link.name}
                      </a>
                      {currentNav === link.name && !scrolled && <span className="active-indicator"></span>}
                    </li>
                    {scrolled && index < navLinks.length - 1 && (
                      <span className="nav-separator">|</span>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </nav>

            {/* Right Section: Grid Icon Button opens Side Drawer */}
            <div className="navbar-right">
              {scrolled ? (
                <button
                  className="grid-icon-btn"
                  onClick={() => setSidebarOpen(true)}
                  aria-label="Grid Navigation Menu"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.2">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </button>
              ) : (
                <div className="navbar-top-right-group">
                  <a href="#contact" className="enquire-btn" style={{ textDecoration: 'none' }}>
                    <span className="enquire-circle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#004dad" strokeWidth="2.5">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                    <span className="enquire-text">Enquire Now</span>
                  </a>
                  <button
                    className="grid-icon-btn top-grid-btn"
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Side Info Drawer Menu"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.2">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    </svg>
                  </button>
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
        </div>
      </header>

      {/* 3. Slide-Over Sidebar Drawer (Matching Screenshot 1) */}
      <div
        className={`drawer-backdrop ${sidebarOpen ? 'open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside className={`drawer-panel ${sidebarOpen ? 'open' : ''}`}>
        {/* Top Close Button */}
        <button
          className="drawer-close-btn"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close Drawer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="drawer-body">
          {/* Logo */}
          <div className="drawer-logo">
            <img src={logo} alt="UKL Instruments" />
          </div>

          {/* Description Paragraph */}
          <p className="drawer-about-text">
            UKL was started in the year 1998 with the sole aim of providing high quality water treatment components which were by and large imported from other countries.
          </p>

          {/* Contact Details List */}
          <div className="drawer-contact-list">
            {/* Address */}
            <div className="drawer-info-item">
              <span className="drawer-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2.2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div className="drawer-info-content">
                <strong>UKL Instruments Pvt. Ltd.</strong>
                <span>232, 7th Street, Ashtalakshmi Nagar, Alapakkam, Chennai - 600 116, Tamilnadu, INDIA.</span>
              </div>
            </div>

            {/* Phone */}
            <div className="drawer-info-item">
              <span className="drawer-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2.2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div className="drawer-info-content">
                <a href="tel:+919841127656" className="drawer-phone-link">
                  Call Us: +91 98411 27656
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="drawer-info-item">
              <span className="drawer-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              <div className="drawer-info-content">
                <strong>Monday - Friday</strong>
                <span>(10am - 05pm)</span>
              </div>
            </div>
          </div>

          {/* Contact Us Pill Button */}
          <a
            href="#contact"
            className="drawer-contact-btn"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('Contact Us', '#contact');
            }}
          >
            Contact us
          </a>
        </div>

        {/* Bottom Social Media Circles */}
        <div className="drawer-footer">
          <div className="drawer-socials">
            <a href="#" className="drawer-social-circle" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#64748b">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="drawer-social-circle" aria-label="Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#64748b">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" className="drawer-social-circle" aria-label="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#64748b">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              </svg>
            </a>
            <a href="#" className="drawer-social-circle" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
