import React from 'react';
import '../styles/Blog.css';
import blogImg1 from '../assets/blog1.JPG';
import blogImg2 from '../assets/Explore2.png';
import ScrollReveal from './ScrollReveal';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      date: '26 APR, 2024',
      title: 'Choosing the Right UKL Membrane Housing for Residential and Industrial RO Systems',
      author: 'ukloceansoftwars',
      image: blogImg1,
    },
    {
      id: 2,
      date: '26 APR, 2024',
      title: 'End Entry vs Side Entry UKL Membrane Housings: Applications and Pressure Ratings Explained”',
      author: 'ukloceansoftwars',
      image: blogImg2,
    },
  ];

  return (
    <section className="blog-section" id="news">
      {/* Background City Skyline & Right Green Diagonal Blob */}
      <div className="blog-city-bg"></div>
      <div className="blog-right-green-blob"></div>

      <div className="blog-container">
        {/* Subtitle & Header */}
        <div className="blog-header">
          <div className="blog-subtitle">
            <span className="asterisk-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              </svg>
            </span>
            <span className="subtitle-text">Our Recent News</span>
          </div>

          <ScrollReveal
            tag="h2"
            className="blog-heading"
            text={`Learn more from\nour new blog`}
          />
        </div>

        {/* 2 Column Blog Cards */}
        <div className="blog-grid">
          {blogs.map((item, index) => (
            <div key={item.id} className="blog-card">
              {/* Card Image Banner with Asymmetric Top Corner Curves */}
              <div className={`blog-image-wrapper ${index === 1 ? 'card-right-curve' : 'card-left-curve'}`}>
                <img src={item.image} alt={item.title} className="blog-img" />

                {/* Dark Gradient Overlay */}
                <div className="blog-img-overlay"></div>

                {/* Author Badge inside image bottom-left */}
                <div className="author-badge">
                  <div className="author-circle-avatar">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="#cbd5e1">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-3.8-1.04-4.84-2.6.03-1.6 3.23-2.4 4.84-2.4s4.81.8 4.84 2.4c-1.04 1.56-2.81 2.6-4.84 2.6z" />
                    </svg>
                  </div>
                  <div className="author-text-group">
                    <span className="by-post-label">BY POST</span>
                    <span className="author-username">{item.author}</span>
                  </div>
                </div>

                {/* Green Bottom Accent Line */}
                <div className="green-accent-line"></div>
              </div>

              {/* Card Text Content */}
              <div className="blog-card-content">
                <span className="blog-date">{item.date}</span>
                <h3 className="blog-card-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Center Button */}
        <div className="blog-button-wrapper">
          <button className="learn-more-btn">
            <span className="btn-text">Learn More</span>
            <span className="arrow-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00a884" strokeWidth="3">
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

export default Blog;
