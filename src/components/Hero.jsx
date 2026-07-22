import React from 'react';
import '../styles/Hero.css';
import oceanBg from '../assets/hero-bg.png';
import frpVessels from '../assets/end-port-housing.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Content Side */}
        <div className="hero-content">
          <div className="hero-background-overlay">
            <img src={oceanBg} alt="Ocean background" className="hero-bg-img" />
            <div className="dark-overlay"></div>
          </div>

          <div className="hero-text-wrapper">
            <h3 className="welcome-script">Welcome to UKLInstruments</h3>
            <h1 className="hero-heading">
              A Market leader in <br />
              FRP pressure vessels 
              for water purification.
            </h1>
            <p className="hero-description">
              Advanced FRP pressure vessels engineered for exceptional strength,
              durability, and long-term performance in demanding applications.
            </p>

            <div className="hero-action-row">
              <button className="contact-us-btn">
                <span className="arrow-circle">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
                <span className="btn-text">Contact Us</span>
              </button>

              <div className="hero-mobile-vessels">
                <img src={frpVessels} alt="FRP Pressure Vessels" className="mobile-vessels-img" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Graphic Side */}
        <div className="hero-graphic">
          <div className="water-background">
            <img src={oceanBg} alt="Water splash background" className="water-bg-img" />
          </div>
          <div className="vessels-wrapper">
            <img src={frpVessels} alt="FRP Pressure Vessels" className="vessels-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
