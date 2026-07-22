import React from 'react';
import '../styles/AboutBanner.css';
import oceanBg from '../assets/about-banner-bg.png';
import bannerVesselsImg from '../assets/download.png';

const AboutBanner = ({ bgImage, customTitle }) => {
  const activeBg = bgImage || oceanBg;

  return (
    <section className="about-banner-section" style={{ backgroundImage: `url(${activeBg})` }}>
      <div className="about-banner-overlay"></div>
      <div className="about-banner-container">
        {/* Left Side: Title & Breadcrumb Pill */}
        <div className="about-banner-content">
          <h1 className="about-banner-title">{customTitle || 'About us'}</h1>
          
          <div className="about-breadcrumb-pill">
            <span className="breadcrumb-link">Home</span>
            <span className="breadcrumb-star">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              </svg>
            </span>
            <span className="breadcrumb-current">{customTitle || 'About us'}</span>
          </div>
        </div>

        {/* Right Side: FRP Housing Membrane Vessels Cutout Image Flipped Horizontally */}
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
