import React from 'react';
import '../styles/ProductVariations.css';
import v1 from '../assets/8 Housing.png';
import v2 from '../assets/8 Housing Side.png';
import v3 from '../assets/4 Housing End.png';
import v4 from '../assets/4 Housing Side Port.png';

const ProductVariations = ({ onSelectProduct }) => {
  const variations = [
    {
      id: 1,
      title: '8 Housing End Port',
      img: v1,
    },
    {
      id: 2,
      title: '8 Housing Side Port',
      img: v2,
    },
    {
      id: 3,
      title: '4 Housing End Port',
      img: v3,
    },
    {
      id: 4,
      title: '4 Housing Side Port',
      img: v4,
    },
  ];

  const handleCardClick = (title) => {
    if (onSelectProduct) {
      onSelectProduct(title);
    }
  };

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

        {/* 4 Cards Row Grid matching User Screenshot 2 */}
        <div className="variations-grid">
          {variations.map((item) => (
            <div
              key={item.id}
              className="variation-card"
              onClick={() => handleCardClick(item.title)}
            >
              {/* Default Normal State: Light Card with Vessel Image */}
              <div className="variation-img-box">
                <img src={item.img} alt={item.title} />
              </div>

              {/* Hover State: Blue-Green Gradient Overlay with Arrow & Title */}
              <div className="variation-hover-overlay">
                <div className="card-arrow-circle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="3">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>

                <div className="gradient-card-bg-img">
                  <img src={item.img} alt={item.title} />
                </div>

                <h3 className="gradient-card-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductVariations;
