import React from 'react';
import '../styles/AsmeSection.css';
import asmeImg from '../assets/ASME.jpg';

const AsmeSection = () => {
  return (
    <section className="asme-section">
      <div className="asme-container">
        {/* Left Side: ASME Image Asset matching user screenshot */}
        <div className="asme-left-box">
          <img src={asmeImg} alt="ASME Setting The Standard Logo" className="asme-left-img" />
        </div>

        {/* Right Side: Deep Navy Constellation & Block Graphics Box */}
        <div className="asme-right-box">
          {/* Top Right Translucent Stacked Blocks Overlay */}
          <div className="stacked-blocks-accent">
            <div className="block block-1"></div>
            <div className="block block-2"></div>
            <div className="block block-3"></div>
          </div>

          {/* Hexagonal Honeycomb Constellation Overlay */}
          <div className="hex-constellation-bg">
            <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
              <path
                d="M100 50 L140 25 L180 50 L180 100 L140 125 L100 100 Z"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1.5"
              />
              <path
                d="M180 50 L220 25 L260 50 L260 100 L220 125 L180 100 Z"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1.5"
              />
              <path
                d="M140 125 L180 100 L220 125 L220 175 L180 200 L140 175 Z"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1.5"
              />
              <path
                d="M220 125 L260 100 L300 125 L300 175 L260 200 L220 175 Z"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1.5"
              />
              <circle cx="180" cy="100" r="3" fill="#00d2d3" />
              <circle cx="220" cy="125" r="4" fill="#0072ff" />
              <circle cx="140" cy="125" r="3" fill="#20bf6b" />
            </svg>
          </div>

          <div className="asme-right-content">
            {/* Title Header */}
            <h2 className="asme-watermark-title">ASME CERTIFICATION</h2>

            {/* Content Text with Left Blue Accent Line */}
            <div className="asme-text-block">
              <div className="left-accent-bar"></div>
              <p className="asme-description-text">
                UKL membrane housings meet the Boiler and Pressure Vessel Code(BPVC) of American
                Society of Mechanical Engineers (ASME, Section X) for the production of Fiber
                Reinforced Plastic Pressure vessels. The BPVC provides the complete rules for the
                design, fabrication, installation, inspection, care and use of pressure vessels.
              </p>
            </div>

            {/* Split Pill Button linking to ASME Certificate PDF */}
            <div className="asme-btn-wrapper">
              <a
                href="/Memrane-Housing.pdf"
                className="split-pill-btn"
                style={{ textDecoration: 'none' }}
              >
                <span className="btn-green-side">
                  <span className="arrow-circle">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </span>
                <span className="btn-blue-side">
                  Download Brochure
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AsmeSection;
