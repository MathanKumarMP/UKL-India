import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import oceanBg from '../assets/hero-bg.png';
import frpVessels from '../assets/end-port-housing.png';
import { API_BASE } from '../config';

const Hero = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/website/banners`);
        const data = await res.json();
        if (data.success && data.banners && data.banners.length > 0) {
          setBanners(data.banners);
        }
      } catch (error) {
        console.error('Failed to load website banners:', error);
      }
    };
    fetchBanners();
  }, []);

  // Fallback to static values if no banners in DB
  const hasBanners = banners.length > 0;
  const currentBanner = hasBanners ? banners[currentIndex] : null;

  const title = (currentBanner && currentBanner.title) ? currentBanner.title : "A Market leader in FRP pressure vessels for water purification.";
  const description = (currentBanner && currentBanner.description) ? currentBanner.description : "Advanced FRP pressure vessels engineered for exceptional strength, durability, and long-term performance in demanding applications.";
  const bannerBg = (currentBanner && currentBanner.image) ? `${API_BASE}${currentBanner.image}` : oceanBg;
  const bannerImg = frpVessels; // Static product image stays on the right
  const linkUrl = (currentBanner && currentBanner.linkUrl) ? currentBanner.linkUrl : '#contact';

  // Autoplay slider if multiple active banners
  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [banners]);

  const isExternalLink = linkUrl && typeof linkUrl === 'string' && linkUrl.startsWith('http');

  return (
    <section className="hero-section">
      {/* Full-width dynamic background overlay */}
      <div className="hero-background-overlay">
        <img src={bannerBg} alt="Ocean background" className="hero-bg-img" />
        <div className="dark-overlay"></div>
      </div>

      <div className="hero-container">
        {/* Left Content Side */}
        <div className="hero-content">
          <div className="hero-text-wrapper" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            <h3 className="welcome-script">Welcome to UKLInstruments</h3>
            <h1 className="hero-heading" style={{ whiteSpace: 'pre-line' }}>
              {title}
            </h1>
            <p className="hero-description">
              {description}
            </p>

            <div className="hero-action-row">
              <a
                className="contact-us-btn"
                href={isExternalLink ? linkUrl : (linkUrl || '#contact')}
                onClick={(e) => {
                  if (!isExternalLink) {
                    e.preventDefault();
                    window.location.hash = linkUrl || '#contact';
                  }
                }}
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
              >
                <span className="contact-btn-circle">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#004dad"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
                <span className="btn-text">Contact Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Graphic Side (with static product image) */}
        <div className="hero-graphic">
          <div className="vessels-wrapper">
            <img src={bannerImg} alt="FRP Pressure Vessels" className="vessels-img" style={{ maxHeight: '420px', objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
