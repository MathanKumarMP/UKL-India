import React from 'react';
import '../styles/HousingEndPortDetail.css';
import AboutBanner from './AboutBanner';
import overviewImg4EP from '../assets/housing8-removebg-preview (8).png';

const HousingFourEndPortDetail = ({ onBack }) => {
  const keyFeatures = [
    {
      text: 'A robust single-piece head assembly constructed from advanced engineering thermoplastics ensures exceptional strength and enhanced chemical resistance.',
      accent: 'blue',
    },
    {
      text: 'A redesigned head seal captured within the head delivers superior sealing efficiency while significantly reducing leakage.',
      accent: 'blue',
    },
    {
      text: 'Integrally formed locking grooves ensure enhanced locking strength.',
      accent: 'blue',
    },
    {
      text: 'Precision mirror-finish ID ensures effortless and efficient membrane loading and removal.',
      accent: 'blue',
    },
    {
      text: 'A high-gloss polyurethane exterior coating delivers long-lasting UV resistance and durability.',
      accent: 'blue',
    },
    {
      text: 'A mandrel-formed head seal area ensures precise sealing dimensions and improved performance.',
      accent: 'blue',
    },
    {
      text: 'Compact design for low-energy, space-efficient water treatment units.',
      accent: 'blue',
    },
    {
      text: 'A quick-lock head retention mechanism allows rapid onsite maintenance and servicing.',
      accent: 'blue',
    },
  ];

  const techSpecs = [
    { model: '40EP300', pressure: '300 psi', minTemp: '-7°C', maxTemp: '55°C', elements: '1 to 6' },
    { model: '40EP450', pressure: '450 psi', minTemp: '-7°C', maxTemp: '55°C', elements: '1 to 6' },
    { model: '40EP600', pressure: '600 psi', minTemp: '-7°C', maxTemp: '55°C', elements: '1 to 6' },
    { model: '40EP1000', pressure: '1000 psi', minTemp: '-7°C', maxTemp: '55°C', elements: '1 to 6' },
    { model: '40EP1200', pressure: '1200 psi', minTemp: '-7°C', maxTemp: '55°C', elements: '1 to 6' },
  ];

  return (
    <div className="product-detail-wrapper">
      {/* 1. Header Ocean Hero Banner */}
      <AboutBanner customTitle="4 Housing End Port" />

      {/* Blue / Green Divider Accent Line */}
      <div className="banner-divider-bar"></div>

      {/* 2. Product Overview Section */}
      <section className="detail-overview-section">
        <div className="detail-container">
          <div className="overview-grid">
            <div className="overview-image-box">
              <img src={overviewImg4EP} alt="4 Housing End Port Assembly" className="overview-img" />
            </div>

            <div className="overview-text-box">
              <p className="overview-paragraph">
                <strong>UKL 40EP</strong> is a 4-inch diameter membrane housing series with an end-entry design, intended for commercial RO applications operating at pressures up to <strong>1200 PSI</strong>. The housings are manufactured from <strong>epoxy/glass composite materials</strong>, ensuring high strength, durability, and reliable performance for long-term, continuous operation. The <strong>UKL 40L30N</strong> is compatible with all standard <strong>4-inch nominal diameter spiral-wound membrane elements</strong>.
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

export default HousingFourEndPortDetail;
