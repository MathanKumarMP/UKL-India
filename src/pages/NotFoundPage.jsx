import React from 'react';
import '../styles/NotFoundPage.css';

const NotFoundPage = ({ setActiveNav }) => {
  const handleGoHome = () => {
    if (setActiveNav) {
      setActiveNav('Home');
    }
    window.location.hash = '#home';
  };

  const handleNavClick = (navName, hash) => {
    if (setActiveNav) {
      setActiveNav(navName);
    }
    window.location.hash = hash;
  };

  return (
    <div className="not-found-page-wrapper">
      {/* Top Banner Header */}
      <div className="not-found-hero-banner">
        <div className="not-found-banner-overlay"></div>
        <div className="not-found-banner-content">
          <div className="not-found-badge">
            <span className="asterisk-icon">✴</span> 404 Error
          </div>
          <h1 className="not-found-banner-title">Page Not Found</h1>
          <p className="not-found-banner-subtitle">
            Oops! The page you are looking for does not exist or has been moved.
          </p>
        </div>
      </div>

      {/* Main 404 Content Container */}
      <div className="not-found-body-container">
        <div className="not-found-card">
          <div className="not-found-glitch-box">
            <span className="not-found-number">404</span>
            <div className="not-found-pulse-ring"></div>
          </div>

          <h2 className="not-found-heading">Look Like You're Lost</h2>
          <p className="not-found-desc">
            The link you followed might be broken, or the page may have been removed. 
            Don't worry, you can easily find your way back!
          </p>

          <div className="not-found-actions">
            <button onClick={handleGoHome} className="not-found-btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Back to Home
            </button>
          </div>

          <div className="not-found-quick-links">
            <p className="quick-links-title">Or explore popular pages:</p>
            <div className="quick-links-pills">
              <button onClick={() => handleNavClick('About Us', '#about')} className="quick-pill-btn">About Us</button>
              <button onClick={() => handleNavClick('Product', '#product')} className="quick-pill-btn">Products</button>
              <button onClick={() => handleNavClick('Quality', '#quality')} className="quick-pill-btn">Quality</button>
              <button onClick={() => handleNavClick('Gallery', '#gallery')} className="quick-pill-btn">Gallery</button>
              <button onClick={() => handleNavClick('News', '#news')} className="quick-pill-btn">News</button>
              <button onClick={() => handleNavClick('Contact Us', '#contact')} className="quick-pill-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
