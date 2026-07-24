import React, { useState, useEffect } from 'react';
import '../styles/ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 200px
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate total page scroll percentage (0 to 100)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Calculate SVG strokeDashoffset based on scroll percentage (circumference = 2 * PI * r = 2 * PI * 22 ≈ 138.23)
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      {/* SVG Progress Circle Ring (Orange border loads as page scrolls) */}
      <svg className="scroll-progress-svg" width="52" height="52" viewBox="0 0 52 52">
        {/* Background Track */}
        <circle
          className="progress-bg-track"
          cx="26"
          cy="26"
          r={radius}
          stroke="rgba(255, 107, 26, 0.2)"
          strokeWidth="3.5"
          fill="none"
        />
        {/* Animated Loading Ring (Closes to 100% full circle when reaching footer) */}
        <circle
          className="progress-fill-ring"
          cx="26"
          cy="26"
          r={radius}
          stroke="#0762a6"
          strokeWidth="3.5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Center Arrow Icon */}
      <div className="scroll-arrow-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
      </div>
    </button>
  );
};

export default ScrollToTop;
