import React, { useEffect, useState } from 'react';
import '../styles/Preloader.css';
import logo from '../assets/logo.png';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(removeTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-circle-container">
        <div className="preloader-spinner-ring"></div>
        <div className="preloader-logo-box">
          <img src={logo} alt="UKL Instruments Loading..." />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
