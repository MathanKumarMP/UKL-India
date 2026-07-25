import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
import ScrollReveal from './ScrollReveal';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        '“Turn your ideas into reality with our exceptional software design and development team. Join the growing list of clients who have leveraged our expertise to scale their business. Our process is streamlined for quality and efficiency”.',
      name: 'Tommy Linda',
      role: 'Founder & CEO',
      avatar: avatar1,
    },
    {
      id: 2,
      quote:
        '“Turn your ideas into reality with our exceptional software design and development team. Join the growing list of clients who have leveraged our expertise to scale their business. Our process is streamlined for quality and efficiency”.',
      name: 'Jerome Bell',
      role: 'Leadership Group',
      avatar: avatar2,
    },
    {
      id: 3,
      quote:
        '“Turn your ideas into reality with our exceptional software design and development team. Join the growing list of clients who have leveraged our expertise to scale their business. Our process is streamlined for quality and efficiency”.',
      name: 'Eleanor Pena',
      role: 'Senior Director',
      avatar: avatar3,
    },
    {
      id: 4,
      quote:
        '“Exceptional water treatment engineering and top-notch customer support. Highly recommended for industrial grade membrane housings”.',
      name: 'Robert Fox',
      role: 'Operations Head',
      avatar: avatar1,
    },
    {
      id: 5,
      quote:
        '“UKL Instruments has consistently delivered durable composite pressure vessels for our municipal desalination plants”.',
      name: 'Courtney Henry',
      role: 'Project Manager',
      avatar: avatar2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile Auto Scroll Carousel Timer
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Auto scroll every 4 seconds
    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // On Mobile: show exactly 1 card. On Desktop: show 3 cards.
  const visibleTestimonials = isMobile
    ? [testimonials[currentIndex]]
    : testimonials.slice(currentIndex, currentIndex + 3).length === 3
    ? testimonials.slice(currentIndex, currentIndex + 3)
    : [...testimonials.slice(currentIndex), ...testimonials.slice(0, 3 - (testimonials.length - currentIndex))];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Top Header */}
        <div className="testimonials-header">
          <div className="header-left">
            <div className="testimonials-subtitle">
              <span className="asterisk-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                  <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                </svg>
              </span>
              <span className="subtitle-text">Testimonials</span>
            </div>
            <ScrollReveal
              tag="h2"
              className="testimonials-heading"
              text="Client’s Feedback"
            />
          </div>

          {/* Active Interactive Navigation Arrows */}
          {!isMobile && (
            <div className="carousel-controls">
              <button className="control-btn prev-btn" onClick={handlePrev} aria-label="Previous testimonial">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0c0b20" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="control-btn next-btn" onClick={handleNext} aria-label="Next testimonial">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0c0b20" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Carousel Wrapper for Side Positioning on Mobile */}
        <div className="testimonials-carousel-wrapper">
          {/* 3 Column Testimonials Grid */}
          <div className="testimonials-grid">
            {visibleTestimonials.map((item) => (
              <div key={item.id} className="testimonial-card">
                {/* User Author Header (Name & Designation First) */}
                <div className="author-wrapper">
                  <div className="author-info">
                    <h4 className="author-name">{item.name}</h4>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="card-divider"></div>

                {/* Quote / Comment Text Underneath */}
                <p className="testimonial-quote">{item.quote}</p>
              </div>
            ))}
          </div>

          {/* Active Interactive Navigation Arrows below card on mobile */}
          {isMobile && (
            <div className="carousel-controls mobile-controls">
              <button className="control-btn prev-btn" onClick={handlePrev} aria-label="Previous testimonial">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0c0b20" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="control-btn next-btn" onClick={handleNext} aria-label="Next testimonial">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0c0b20" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
