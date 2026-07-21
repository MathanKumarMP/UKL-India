import React from 'react';
import '../styles/CompanyOverview.css';
import buildingFront from '../assets/building-front.png';
import buildingSide from '../assets/aboutus.png';
import ScrollReveal from './ScrollReveal';

const CompanyOverview = () => {
  return (
    <section className="overview-section">
      {/* Organic Decorative Background Blobs */}
      <div className="bg-blob blob-bottom-left"></div>
      <div className="bg-blob blob-bottom-right"></div>

      <div className="overview-container">
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
          {/* Subtitle */}
          <div className="overview-subtitle">
            <span className="asterisk-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              </svg>
            </span>
            <span className="subtitle-text">About Us</span>
          </div>

          {/* Heading with Word-by-Word Scroll Reveal */}
          <ScrollReveal
            tag="h2"
            className="overview-heading"
            text={`Leading the Way in\nOEM Water Treatment\nSolutions`}
          />

          {/* Description */}
          <p className="overview-description">
            With over 25 years of dedicated engineering and an unwavering
            commitment to service excellence and product quality, we have
            solidified our position as a leading expert in the production of
            OEM components for water treatment.
          </p>

          {/* Read More Pill Button */}
          <button className="read-more-btn">
            <span className="read-more-text">Read More</span>
            <span className="read-more-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10ac84" strokeWidth="2.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
