import React from 'react';
import '../styles/About.css';
import aboutUsImg from '../assets/about us.png';
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
        {/* Left Column: Image Asset */}
        <div className="about-image-column">
          <div className="about-img-box">
            <img src={aboutUsImg} alt="UKL 4 inch and 8 inch FRP Membrane Housings" className="about-img" />
          </div>
        </div>

        {/* Right Column: Text & Features */}
        <div className="about-content-column">
          {/* Subtitle Badge Header */}
          <div className="about-subtitle">
            <span className="asterisk-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              </svg>
            </span>
            <span className="subtitle-text">FRP Housing Membrane</span>
          </div>

          {/* Heading */}
          <ScrollReveal
            tag="h2"
            className="about-heading"
            text={`4" & 8" Side Port and End Port Membrane Housing For RO Application`}
          />

          {/* Description Paragraph */}
          <p className="about-description">
            UKL membrane housings are available with end entry design and also side entry design. This is used for Residential, commercial, municipal and industrial RO applications. Membrane housings are available in operating pressure of 300psi, 450psi, 600psi, 1000psi and 1200psi. They are manufactured using the fiber glass-epoxy composite to meet the stringent demands of the RO processes.
          </p>

          {/* Single Horizontal Row Checkmark Features */}
          <div className="about-features-row">
            {highlights.map((item, idx) => (
              <div key={idx} className="feature-item">
                <span className="check-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </span>
                <span className="feature-text">{item}</span>
              </div>
            ))}
          </div>

          {/* View More Button (Pill Button with White Arrow Circle on Left) */}
          <a href="#product" className="view-more-btn">
            <span className="view-more-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1d68a6" strokeWidth="2.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
            <span className="view-more-text">View More</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
