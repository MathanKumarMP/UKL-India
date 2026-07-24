import React from 'react';
import '../styles/CompanyOverview.css';
import buildingFront from '../assets/Buildind1.JPG';
import buildingSide from '../assets/buildingnew2.png';
import ScrollReveal from './ScrollReveal';

const CompanyOverview = () => {
  return (
    <section className="overview-section">
      {/* Organic Decorative Background Blobs */}
      <div className="bg-blob blob-bottom-left"></div>
      <div className="bg-blob blob-bottom-right"></div>

      <div className="overview-container">
        {/* Subtitle & Heading for Mobile View (rendered above images) */}
        <div className="overview-header-mobile">
          <div className="overview-subtitle">
            <span className="asterisk-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              </svg>
            </span>
            <span className="subtitle-text">About Us</span>
          </div>

          <ScrollReveal
            tag="h2"
            className="overview-heading"
            text={`Leading the Way in\nOEM Water Treatment\nSolutions`}
          />
        </div>

        {/* Left Side: Overlapping Photo Collage */}
        <div className="overview-images-column">
          <div className="img-top-right">
            <img src={buildingFront} alt="UKL Instruments Headquarters Building" />
          </div>
          <div className="img-bottom-left">
            <img src={buildingSide} alt="UKL Instruments Factory Complex" />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="overview-content-column">
          {/* Subtitle & Heading for Desktop View */}
          <div className="overview-header-desktop">
            <div className="overview-subtitle">
              <span className="asterisk-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                  <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                </svg>
              </span>
              <span className="subtitle-text">About Us</span>
            </div>

            <ScrollReveal
              tag="h2"
              className="overview-heading"
              text={`Leading the Way in\nOEM Water Treatment\nSolutions`}
            />
          </div>

          {/* Description */}
          <p className="overview-description">
            With over 25 years of dedicated engineering and an unwavering
            commitment to service excellence and product quality, we have
            solidified our position as a leading expert in the production of
            OEM components for water treatment.
          </p>

          {/* Read More Pill Button */}
          <a href="#about" className="read-more-btn" style={{ textDecoration: 'none' }}>
            <span className="read-more-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#004dad" strokeWidth="2.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
            <span className="read-more-text">Read More</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
