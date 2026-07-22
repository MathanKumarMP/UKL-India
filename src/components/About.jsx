import React from 'react';
import '../styles/About.css';
import dsc9640 from '../assets/DSC_9640.JPG';
import dsc9645 from '../assets/DSC_9645.JPG';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const highlights = [
    'Quick-Lock System',
    'Mirror-Finished Interior',
    'High Precision Build',
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Mobile Header (rendered at top above images on mobile) */}
        <div className="about-header-mobile">
          <div className="about-subtitle">
            <span className="asterisk-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              </svg>
            </span>
            <span className="subtitle-text">FRP Housing Membrane</span>
          </div>

          <ScrollReveal
            tag="h2"
            className="about-heading"
            text={`4" & 8" Side Port and\nEnd Port Membrane Housing\nFor RO Application`}
          />
        </div>

        {/* Left Column: Vertical Image Stack */}
        <div className="about-image-column">
          <div className="about-image-stack">
            <div className="about-image-wrapper">
              <img src={dsc9645} alt="FRP Membrane Housing - View 1" className="about-img" />
            </div>
            <div className="about-image-wrapper">
              <img src={dsc9640} alt="FRP Membrane Housing - View 2" className="about-img" />
            </div>
          </div>
        </div>

        {/* Right Column: Text & Features */}
        <div className="about-content-column">
          {/* Desktop Header */}
          <div className="about-header-desktop">
            <div className="about-subtitle">
              <span className="asterisk-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                  <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                </svg>
              </span>
              <span className="subtitle-text">FRP Housing Membrane</span>
            </div>

            <ScrollReveal
              tag="h2"
              className="about-heading"
              text={`4" & 8" Side Port and\nEnd Port Membrane\nHousing For RO\nApplication`}
            />
          </div>

          {/* Description Paragraph */}
          <p className="about-description">
            UKL membrane housings are available with end entry design and also side
            entry design. This is used for Residential, commercial, municipal and
            Industrial RO applications. Membrane housings are available in operating
            pressure of 300psi, 450psi, 600psi, 1000psi and 1200psi. They are
            manufactured using the fiber glass-epoxy composite to meet the stringent
            demands of the RO processes.
          </p>

          {/* Checkmark Features & View More Button Row */}
          <div className="about-action-row">
            <div className="about-features">
              {highlights.map((item, idx) => (
                <div key={idx} className="feature-item">
                  <span className="check-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="feature-text">{item}</span>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <button className="view-more-btn">
              <span className="view-more-text">View More</span>
              <span className="view-more-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00a884" strokeWidth="2.5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
