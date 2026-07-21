import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main 4 Column Navigation Grid */}
        <div className="footer-main-grid">
          {/* Column 1: Brand Logo, Mission Paragraph & Social Icons below */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src={logo} alt="UKL Instruments Logo" />
            </div>
            <p className="brand-description">
              UKL was started in the year 1998 with the sole aim of providing high
              quality water treatment components which were by and large imported
              from other countries.
            </p>

            {/* Social Icons positioned below brand paragraph */}
            <div className="footer-social-icons">
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="social-icon">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </a>
              <a href="#" aria-label="Skype" className="social-icon">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001 2c-5.523 0-10 4.477-10 10 0 1.258.232 2.46.654 3.57a7.971 7.971 0 0 1-.654 4.43c.277.92.83 1.724 1.583 2.298a7.96 7.96 0 0 1 4.43-.654C9.124 21.769 10.326 22 11.584 22c5.523 0 10-4.477 10-10s-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Resources */}
          <div className="footer-col">
            <h3 className="footer-col-title">Resources</h3>
            <ul className="footer-links">
              <li><a href="#">Samples</a></li>
              <li><a href="#">Permissions</a></li>
              <li><a href="#">Data and files</a></li>
              <li><a href="#">User identity</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-col">
            <h3 className="footer-col-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">History</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col contact-col">
            <h3 className="footer-col-title">Contact Info</h3>
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-badge-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="contact-text">+91 98411 27656</span>
              </div>

              <div className="contact-item">
                <span className="contact-badge-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span className="contact-text">shreeram@uklindia.in</span>
              </div>

              <div className="contact-item align-top">
                <span className="contact-badge-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="contact-text address-text">
                  UKL Instruments Pvt. Ltd. 232, 7th Street, Ashtalakshmi Nagar,
                  Alapakkam, Chennai – 600 116. Tamilnadu, INDIA.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
