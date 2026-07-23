import React from 'react';
import '../styles/ProductFeatureSpec.css';
import img1 from '../assets/grid-item-2.png';
import img2 from '../assets/grid-item-1.png';
import img3 from '../assets/grid-item-3.png';
import img4 from '../assets/grid-item-4.png';

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

          <h2 className="spec-heading">
            4" & 8" Side Port and End Port Membrane Housing For RO Application
          </h2>
        </div>

        {/* 2-Row Stack matching User Screenshot 2 */}
        <div className="spec-rows-container">
          {/* Row 1 */}
          <div className="spec-row">
            <div className="spec-card">
              <img src={img1} alt="UKL Membrane Housing End View White Port Cap" />
            </div>
            <div className="spec-card">
              <img src={img2} alt="UKL Membrane Housing Black Cap with Stainless Steel Pipe" />
            </div>
            <div className="spec-text-box">
              <p className="spec-paragraph">
                UKL membrane housings are available with end entry design and also side entry design. This is used for Residential, commercial, municipal and industrial RO applications. Membrane housings are available in operating pressure of 300psi, 450psi, 600psi, 1000psi and 1200psi. They are manufactured using the fiber glass-epoxy composite to meet the stringent demands of the RO processes.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="spec-row">
            <div className="spec-card">
              <img src={img3} alt="UKL Membrane Housing End View White Port Cap" />
            </div>
            <div className="spec-card">
              <img src={img4} alt="UKL Membrane Housing Black Cap Component" />
            </div>
            <div className="spec-text-box">
              <p className="spec-paragraph">
                UKL membrane pressure vessels are manufactured by computer controlled filament winding machine and associated high precision processing equipment. With a team of highly skilled technical experts in the field of Composites technology and with all the state-of-the-art processing machines in-house, UKL offers a complete range of high quality membrane housings in sizes of 4" and 8" diameters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatureSpec;
