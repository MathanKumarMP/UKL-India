import React from 'react';
import '../styles/AboutBanner.css';
import oceanBg from '../assets/about-banner-bg.png';
import bannerVesselsImg from '../assets/download.png';

const AboutBanner = ({ bgImage, customTitle }) => {
  const activeBg = bgImage || oceanBg;
  const currentTitle = customTitle || 'About us';

  const handleNav = (e, target) => {
    e.preventDefault();
    if (target === 'Home') {
      window.location.hash = '#home';
    } else if (target.includes('About') || target.includes('about')) {
      window.location.hash = '#about';
    } else if (target.includes('Housing') || target.includes('Product')) {
      window.location.hash = '#product';
    } else if (target.includes('Quality')) {
      window.location.hash = '#quality';
    } else if (target.includes('News')) {
      window.location.hash = '#news';
    } else if (target.includes('Contact')) {
      window.location.hash = '#contact';
    } else {
      window.location.hash = '#home';
    }
  };

  return (
    <section className="about-banner-section" style={{ backgroundImage: `url(${activeBg})` }}>
      <div className="about-banner-overlay"></div>
      <div className="about-banner-container">
        {/* Left Side: Title & Interactive Breadcrumb Pill */}
        <div className="about-banner-content">
          <h1 className="about-banner-title">{currentTitle}</h1>
          
          <div className="about-breadcrumb-pill">
            <a 
              href="#home" 
              className="breadcrumb-link"
              onClick={(e) => handleNav(e, 'Home')}
            >
              Home
            </a>

            <span className="breadcrumb-star">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              </svg>
            </span>

            <a
              href="#about"
              className="breadcrumb-current"
              onClick={(e) => handleNav(e, currentTitle)}
            >
              {currentTitle}
            </a>
          </div>
        </div>

        {/* Right Side: FRP Housing Membrane Vessels Cutout Image */}
        <div className="about-banner-graphic">
          <img 
            src={bannerVesselsImg} 
            alt="UKL FRP Membrane Housing Vessels" 
            className="about-banner-vessels-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
