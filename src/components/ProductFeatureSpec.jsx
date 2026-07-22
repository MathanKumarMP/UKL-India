import React from 'react';
import '../styles/ProductFeatureSpec.css';
import item1 from '../assets/grid-item-3.png';
import item2 from '../assets/grid-item-2.png';
import item3 from '../assets/grid-item-4.png';
import item4 from '../assets/grid-item-1.png';

const ProductFeatureSpec = () => {
  return (
    <section className="product-spec-section">
      <div className="product-spec-container">
        {/* Section Header Subtitle & Title */}
        <div className="product-spec-header">
          <div className="spec-subtitle">
            <span className="asterisk-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              </svg>
            </span>
            <span className="subtitle-text">FRP Pressure Vessels</span>
          </div>

          <h2 className="spec-heading">4" & 8" Side Port and End Port</h2>
        </div>

        {/* 2-Column Content: Left 2x2 Grid + Right Text Description */}
        <div className="spec-body-grid">
          {/* Left Side: 2x2 Photo Cards */}
          <div className="spec-photo-grid">
            <div className="spec-card">
              <img src={item1} alt="4 inch Side Port Vessel End View" />
            </div>
            <div className="spec-card">
              <img src={item2} alt="COMRO 300 PSI End Cap" />
            </div>
            <div className="spec-card">
              <img src={item3} alt="8 inch Side Port Vessel Assembly" />
            </div>
            <div className="spec-card">
              <img src={item4} alt="1200 PSI End Cap with Hose Barb" />
            </div>
          </div>

          {/* Right Side: Paragraph Descriptions */}
          <div className="spec-text-column">
            <p className="spec-paragraph">
              UKL membrane housings are available with end entry design and also side entry design. 
              This is used for Residential, commercial, municipal and Industrial RO applications. 
              Membrane housings are available in operating pressure of 300psi, 450psi, 600psi, 
              1000psi and 1200psi. They are manufactured using the fiber glass-epoxy composite to 
              meet the stringent demands of the RO processes.
            </p>

            <p className="spec-paragraph">
              Membrane housings are available with multi-porting options up to 4" ports for side entry. 
              This allows multiple membrane housings to be connected together without separate manifolds. 
              Smooth inner mirror finish for easy loading & unloading of membrane elements. Membrane 
              housing are available from 1 element to 8 elements in length for RO applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatureSpec;
