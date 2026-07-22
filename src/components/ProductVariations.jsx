import React from 'react';
import '../styles/ProductVariations.css';
import v1 from '../assets/prod-1.png';
import v2 from '../assets/prod-2.png';
import v3 from '../assets/prod-3.png';
import v4 from '../assets/prod-4.png';

const ProductVariations = () => {
  const variations = [
    { id: 1, img: v1, title: '1-Element / 2-Element Vessel' },
    { id: 2, img: v2, title: '3-Element Vessel' },
    { id: 3, img: v3, title: '4-Element / 5-Element Vessel' },
    { id: 4, img: v4, title: '6-Element Vessel' }
  ];

  return (
    <section className="variations-section">
      <div className="variations-container">
        {/* Header Subtitle & Title */}
        <div className="variations-header">
          <div className="variations-subtitle">
            <span className="asterisk-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              </svg>
            </span>
            <span className="subtitle-text">FRP Pressure Vessels</span>
          </div>

          <h2 className="variations-heading">Product Variations</h2>
        </div>

        {/* 4 Cards Row Grid */}
        <div className="variations-grid">
          {variations.map((item) => (
            <div key={item.id} className="variation-card">
              <div className="variation-img-box">
                <img src={item.img} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductVariations;
