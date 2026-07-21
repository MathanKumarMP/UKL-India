import React from 'react';
import '../styles/Products.css';
import prod1 from '../assets/prod-1.png';
import prod2 from '../assets/prod-2.png';
import prod3 from '../assets/prod-3.png';
import prod4 from '../assets/prod-4.png';
import ScrollReveal from './ScrollReveal';

const Products = () => {
  const productImages = [
    { id: 1, title: '8 Housing End Port', src: prod1, alt: '8 Housing End Port' },
    { id: 2, title: '8 Housing Side Port', src: prod2, alt: '8 Housing Side Port' },
    { id: 3, title: '4 Housing End Port', src: prod3, alt: '4 Housing End Port' },
    { id: 4, title: '4 Housing Side Port', src: prod4, alt: '4 Housing Side Port' },
  ];

  return (
    <section className="products-section" id="product">
      <div className="products-container">
        {/* Header Title */}
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
            text={`Explore Our Premium\nProduct Range`}
          />
        </div>

        {/* 4 Card Gallery Grid with Hover Slide Overlay */}
        <div className="products-grid">
          {productImages.map((item) => (
            <div key={item.id} className="product-card">
              <div className="card-image-wrapper">
                <img src={item.src} alt={item.alt} className="card-img" />
              </div>

              {/* Slanted White Overlay Revealed on Hover */}
              <div className="card-hover-overlay">
                <h3 className="hover-title">{item.title}</h3>

                <button className="read-more-pill">
                  <span className="pill-text">Read More</span>
                  <span className="pill-arrow-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
