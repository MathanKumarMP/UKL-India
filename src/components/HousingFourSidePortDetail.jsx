import React from 'react';
import '../styles/HousingEndPortDetail.css';
import AboutBanner from './AboutBanner';
import overviewImg4SP from '../assets/housing8-removebg-preview (8).png';

const HousingFourSidePortDetail = ({ onBack }) => {
  const keyFeatures = [
    {
      text: 'Multi-port connectivity options for inter-connecting vessels efficiently',
      accent: 'blue',
    },
    {
      text: 'Quick-lock head retention system for fast and convenient membrane access',
      accent: 'blue',
    },
    {
      text: 'Captured head seal design to prevent seal roll-over during head assembly',
      accent: 'blue',
    },
    {
      text: 'Mirror-finish internal diameter (ID) for smooth, easy, and quick membrane loading and unloading',
      accent: 'blue',
    },
    {
      text: 'High-gloss polyurethane exterior coating for enhanced UV resistance and long-term durability',
      accent: 'blue',
    },
    {
      text: 'Available in multiple ASME-certified configurations to meet diverse application requirements',
      accent: 'blue',
    },
    {
      text: 'Housing can accommodate up to six membrane elements',
      accent: 'blue',
    },
    {
      text: 'Integrally wound locking groove Provides enhanced end-margin strength for improved structural integrity and long-term performance',
      accent: 'blue',
    },
    {
      text: 'Integrated end plug and head sealing plate design ensures superior sealing, prevents head seal roll-over, and eliminates the risk of head leakage',
      accent: 'blue',
    },
    {
      text: 'Single-piece head assembly for non-coded models, manufactured from high-grade thermoplastic material, reducing the number of spares required',
      accent: 'blue',
    },
  ];

  const techSpecs = [
    { model: '40SP300', pressure: '300 psi', minTemp: '-7°C', maxTemp: '55°C', elements: '1 to 6' },
    { model: '40SP450', pressure: '450 psi', minTemp: '-7°C', maxTemp: '55°C', elements: '1 to 6' },
    { model: '40SP600', pressure: '600 psi', minTemp: '-7°C', maxTemp: '55°C', elements: '1 to 6' },
    { model: '40SP1000', pressure: '1000 psi', minTemp: '-7°C', maxTemp: '55°C', elements: '1 to 6' },
    { model: '40SP1200', pressure: '1200 psi', minTemp: '-7°C', maxTemp: '55°C', elements: '1 to 6' },
  ];

  return (
    <div className="product-detail-wrapper">
      {/* 1. Header Ocean Hero Banner */}
      <AboutBanner customTitle="4 Housing Side Port" />

      {/* Blue / Green Divider Accent Line */}
      <div className="banner-divider-bar"></div>

      {/* 2. Product Overview Section */}
      <section className="detail-overview-section">
        <div className="detail-container">
          <div className="overview-grid">
            <div className="overview-image-box">
              <img src={overviewImg4SP} alt="4 Housing Side Port Assembly" className="overview-img" />
            </div>

            <div className="overview-text-box">
              <p className="overview-paragraph">
                <strong>UKL 40SP</strong> is a premium membrane housing series with a <strong>4" diameter side-entry design</strong>, engineered for <strong>commercial, municipal, and industrial RO applications</strong>. The vessel is available in <strong>300 PSI, 450 PSI, and 600 PSI operating pressure ratings</strong>, with <strong>multi-port connectivity</strong> to support flexible system configurations. Manufactured from <strong>high-strength epoxy-glass composite</strong>, UKL 40SP housings are built to withstand long-term, continuous operation in demanding RO processes. The <strong>UKL 40SP series</strong> is compatible with <strong>all standard 4" spiral-wound membrane elements</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Features Section */}
      <section className="detail-features-section">
        <div className="detail-container">
          <h2 className="detail-section-heading">Key Features</h2>

          <div className="features-grid">
            {keyFeatures.map((item, index) => (
              <div key={index} className={`feature-card ${item.accent}-border`}>
                <p className="feature-full-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical Specifications Table Section */}
      <section className="detail-specs-section">
        <div className="detail-container">
          <h2 className="detail-section-heading">Technical Specifications</h2>

          <div className="specs-table-wrapper">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Model/Spec</th>
                  <th>Design Pressure</th>
                  <th>Min. Temperature</th>
                  <th>Max. Temperature</th>
                  <th>No. of Elements</th>
                </tr>
              </thead>
              <tbody>
                {techSpecs.map((row, idx) => (
                  <tr key={idx}>
                    <td className="model-col">{row.model}</td>
                    <td>{row.pressure}</td>
                    <td>{row.minTemp}</td>
                    <td>{row.maxTemp}</td>
                    <td>{row.elements}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HousingFourSidePortDetail;
