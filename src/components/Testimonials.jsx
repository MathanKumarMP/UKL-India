import React, { useState } from 'react';
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

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

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
        </div>

        {/* 3 Column Testimonials Grid */}
        <div className="testimonials-grid">
          {visibleTestimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              {/* Google Rating Pill Badge */}
              <div className="rating-badge">
                <svg className="google-icon" width="22" height="22" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>

                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star-icon">
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <p className="testimonial-quote">{item.quote}</p>

              {/* Divider Line */}
              <div className="card-divider"></div>

              {/* User Author Footer */}
              <div className="author-wrapper">
                <div className="author-avatar-ring">
                  <img src={item.avatar} alt={item.name} className="author-avatar" />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{item.name}</h4>
                  <span className="author-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
