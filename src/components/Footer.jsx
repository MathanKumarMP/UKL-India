import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/logo.png';

const Footer = ({ setActiveNav }) => {
  const handleLinkClick = (navName, hash) => {
    if (setActiveNav) {
      setActiveNav(navName);
    }
    if (hash) {
      window.location.hash = hash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main 4 Column Grid */}
        <div className="footer-grid">
          {/* Column 1: Logo & About Paragraph */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src={logo} alt="UKL Instruments Logo" />
            </div>
            <p className="brand-description">
              UKL was started in the year 1998 with the sole aim of providing high quality water treatment components which were by and large imported from other countries.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title underline-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#product" onClick={() => handleLinkClick('Product', '#product')}>8 Housing End Port</a></li>
              <li><a href="#product" onClick={() => handleLinkClick('Product', '#product')}>8 Housing Side Port</a></li>
              <li><a href="#product" onClick={() => handleLinkClick('Product', '#product')}>4 Housing End Port</a></li>
              <li><a href="#product" onClick={() => handleLinkClick('Product', '#product')}>4 Housing Side Port</a></li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="footer-col">
            <h3 className="footer-col-title underline-title">Useful Links</h3>
            <ul className="footer-links">
              <li><a href="#about" onClick={() => handleLinkClick('About Us', '#about')}>About Us</a></li>
              <li><a href="#product" onClick={() => handleLinkClick('Product', '#product')}>Product</a></li>
              <li><a href="#quality" onClick={() => handleLinkClick('Quality', '#quality')}>Quality</a></li>
              <li><a href="#contact" onClick={() => handleLinkClick('Contact Us', '#contact')}>Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col contact-col">
            <h3 className="footer-col-title">Contact Info</h3>
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-badge-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+919841127656" className="contact-text">+91 98411 27656</a>
              </div>

              <div className="contact-item">
                <span className="contact-badge-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <a href="mailto:shreeram@uklindia.in" className="contact-text">shreeram@uklindia.in</a>
              </div>

              <div className="contact-item align-top">
                <span className="contact-badge-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="contact-text address-text">
                  UKL Instruments Pvt. Ltd. 232, 7th Street, Ashtalakshmi Nagar, Alapakkam, Chennai - 600 116. Tamilnadu, INDIA.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © Copyright 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
