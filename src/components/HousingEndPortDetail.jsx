import React from 'react';
import '../styles/HousingEndPortDetail.css';
import AboutBanner from './AboutBanner';
import overviewVesselsImg from '../assets/slider-1-3 (1).png';

const HousingEndPortDetail = ({ onBack }) => {
  const keyFeatures = [
    {
      title: 'Mirror-Finished Inner Diameter (ID)',
      desc: 'Precision-finished internal surface minimizes friction and prevents membrane damage during element insertion and removal.',
      accent: 'blue',
    },
    {
      title: 'Quick-Lock Head Retention Mechanism',
      desc: 'Ergonomically designed quick-lock mechanism enables rapid, safe access to membrane elements without special tools, reducing service downtime.',
      accent: 'blue',
    },
    {
      title: 'Integrally Formed Locking Groove',
      desc: 'Monolithic locking groove construction enhances end-margin strength and long-term structural integrity.',
      accent: 'blue',
    },
    {
      title: 'Seawater-Grade Port Construction',
      desc: 'Corrosion-resistant feed and concentrate ports ensure dependable performance in high-salinity and seawater environments.',
      accent: 'blue',
    },
    {
      title: 'High-Gloss Polyurethane External Coating',
      desc: 'UV-resistant industrial grade coating protects against environmental exposure and surface degradation.',
      accent: 'green',
    },
    {
      title: 'Captured Head Seal Configuration',
      desc: 'Integrated seal design prevents roll-over during installation, ensuring consistent sealing integrity and leak prevention.',
      accent: 'green',
    },
    {
      title: 'Application-Specific Compatibility',
      desc: 'Suitable for brackish, high-brackish, and seawater RO systems according to specified pressure ratings.',
      accent: 'green',
    },
    {
      title: 'Compliance & Certification Options',
      desc: 'Available in ASME-certified models to meet international regulatory and quality standards.',
      accent: 'green',
    },
  ];

  const techSpecs = [
    { model: '80EP300', pressure: '300 psi', minTemp: '-7°C', maxTemp: '65°C', elements: '1 to 7' },
    { model: '80EP450', pressure: '450 psi', minTemp: '-7°C', maxTemp: '65°C', elements: '1 to 7' },
    { model: '80EP600', pressure: '600 psi', minTemp: '-7°C', maxTemp: '65°C', elements: '1 to 7' },
    { model: '80EP1000', pressure: '1000 psi', minTemp: '-7°C', maxTemp: '65°C', elements: '1 to 7' },
    { model: '80EP1200', pressure: '1200 psi', minTemp: '-7°C', maxTemp: '65°C', elements: '1 to 7' },
  ];

  return (
    <div className="product-detail-wrapper">
      {/* 1. Header Ocean Banner */}
      <AboutBanner customTitle="8 Housing End Port" />

      {/* Blue / Green Divider Accent Line */}
      <div className="banner-divider-bar"></div>

      {/* 2. Product Overview Section */}
      <section className="detail-overview-section">
        <div className="detail-container">
          <div className="overview-grid">
            <div className="overview-image-box">
              <img src={overviewVesselsImg} alt="8 Housing End Port Assembly" className="overview-img" />
            </div>

            <div className="overview-text-box">
              <p className="overview-paragraph">
                The <strong>UKL 80EP</strong> is an <strong>8 end-entry membrane housing</strong> designed for <strong>commercial, municipal, and industrial RO applications</strong>. Available in operating pressure ratings from <strong>300 to 1200 PSI</strong>, the vessel is constructed from <strong>epoxy / glass composite</strong> for reliable long-term and continuous service. UKL 80EP housings are compatible with <strong>all standard 8 spiral-wound RO membrane elements</strong>, making them suitable for brackish and seawater RO systems.
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
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.desc}</p>
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

export default HousingEndPortDetail;
