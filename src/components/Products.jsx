import React from 'react';
import '../styles/Products.css';
import prod1 from '../assets/8 Housing.png';
import prod2 from '../assets/8 Housing Side.png';
import prod3 from '../assets/4 Housing End.png';
import prod4 from '../assets/4 Housing Side Port.png';
import ScrollReveal from './ScrollReveal';

const Products = () => {
  const productItems = [
    { id: 1, title: '8 Housing End Port', src: prod1, hash: '#8-housing-end-port' },
    { id: 2, title: '8 Housing Side Port', src: prod2, hash: '#8-housing-side-port' },
    { id: 3, title: '4 Housing End Port', src: prod3, hash: '#4-housing-end-port' },
    { id: 4, title: '4 Housing Side Port', src: prod4, hash: '#4-housing-side-port' },
  ];

  const handleCardClick = (hash) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="products-section" id="product">
      <div className="products-container">
        {/* Header Subtitle & Title */}
        <div className="products-header">
          <div className="products-subtitle">
            <span className="asterisk-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              </svg>
            </span>
            <span className="subtitle-text">Our Featured Products</span>
          </div>

          <ScrollReveal
            tag="h2"
            className="products-heading"
            text={`Explore Our Premium Product Range`}
          />
        </div>

        {/* 4 Cards Row Grid */}
        <div className="products-grid">
          {productItems.map((item) => (
            <div
              key={item.id}
              className="product-card"
              onClick={() => handleCardClick(item.hash)}
            >
              {/* Upper Image Box */}
              <div className="card-image-box">
                <img src={item.src} alt={item.title} className="card-img" />
              </div>

              {/* Bottom Title Footer Box */}
              <div className="card-title-box">
                <h3 className="product-card-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
