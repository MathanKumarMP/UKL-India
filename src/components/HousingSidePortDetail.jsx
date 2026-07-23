import React from 'react';
import '../styles/HousingEndPortDetail.css';
import AboutBanner from './AboutBanner';
import sidePortVesselsImg from '../assets/housing8-removebg-preview (8).png';

const HousingSidePortDetail = ({ onBack }) => {
  const keyFeatures = [
    {
      title: 'Side-entry design with integrated octagonal profile',
      desc: 'provides flat sealing surfaces for superior and reliable side-port sealing, minimizing leakage',
      accent: 'blue',
      boldTitle: 'Side-entry design with integrated octagonal profile',
      boldMiddle: 'superior and reliable side-port sealing'
    },
    {
      title: 'Multi-porting options',
      desc: 'available with 1.5", 2.0", and 2.5" diameter IPS grooved feed and concentrate ports',
      accent: 'blue',
      boldTitle: 'Multi-porting options',
      boldMiddle: '1.5", 2.0", and 2.5" diameter'
    },
    {
      title: 'Threaded side ports',
      desc: 'enable easy mounting and allow quick on-site service, maintenance, and replacements',
      accent: 'blue',
      boldTitle: 'Threaded side ports'
    },
    {
      title: 'Quick-lock head retention system',
      desc: 'ensures fast membrane access and eliminates the need for special removal tools',
      accent: 'blue',
      boldTitle: 'Quick-lock head retention system'
    },
    {
      title: 'Single-piece end plug assembly',
      desc: 'for non-coded models, made from high-grade thermoplastic material, reduces spare part requirements',
      accent: 'blue',
      boldTitle: 'Single-piece end plug assembly'
    },
    {
      title: 'Improved head sealing design',
      desc: 'with integrated head and sealing plate prevents head seal roll and eliminates head leakage',
      accent: 'blue',
      boldTitle: 'Improved head sealing design'
    },
    {
      title: 'Integrally wound locking groove',
      desc: 'enhances end-margin strength for improved mechanical performance and durability',
      accent: 'blue',
      boldTitle: 'Integrally wound locking groove'
    },
    {
      title: 'High-gloss polyurethane exterior coating',
      desc: 'provides excellent UV resistance and long service life',
      accent: 'blue',
      boldTitle: 'High-gloss polyurethane exterior coating',
      boldMiddle: 'UV resistance'
    },
    {
      title: 'Flexible permeate piping options,',
      desc: 'with customization of standard permeate ports available to meet specific flow requirements',
      accent: 'blue',
      boldTitle: 'Flexible permeate piping options,'
    },
    {
      title: 'Ultrapure and sanitary applications:',
      desc: 'Coded models of the 80S series can optionally accommodate specially designed sanitary connections',
      accent: 'blue',
      boldTitle: 'Ultrapure and sanitary applications:',
      boldMiddle: 'specially designed sanitary connections'
    }
  ];

  const techSpecs = [
    { model: '80SP300', pressure: '300 psi', minTemp: '-7°C', maxTemp: '65°C', elements: '1 to 7' },
    { model: '80SP450', pressure: '450 psi', minTemp: '-7°C', maxTemp: '65°C', elements: '1 to 7' },
    { model: '80SP600', pressure: '600 psi', minTemp: '-7°C', maxTemp: '65°C', elements: '1 to 7' },
    { model: '80SP1000', pressure: '1000 psi', minTemp: '-7°C', maxTemp: '65°C', elements: '1 to 7' },
    { model: '80SP1200', pressure: '1200 psi', minTemp: '-7°C', maxTemp: '65°C', elements: '1 to 7' },
  ];

  return (
    <div className="product-detail-wrapper">
      {/* 1. Header Ocean Banner */}
      <AboutBanner customTitle="8 Housing Side Port" />

      {/* Blue / Green Divider Accent Line */}
      <div className="banner-divider-bar"></div>

      {/* 2. Product Overview Section */}
      <section className="detail-overview-section">
        <div className="detail-container">
          <div className="overview-grid">
            <div className="overview-image-box">
              <img src={sidePortVesselsImg} alt="8 Housing Side Port Assembly" className="overview-img" />
            </div>

            <div className="overview-text-box">
              <p className="overview-paragraph">
                The <strong>UKL 80SP Series</strong> consists of <strong>8" diameter side-entry membrane housings</strong> designed for <strong>commercial, municipal, and industrial reverse osmosis (RO) applications</strong>. These housings support operating pressures ranging from <strong>300 PSI to 1200 PSI</strong>, making them suitable for <strong>brackish, high-brackish, and seawater applications</strong>, as per respective pressure ratings. Manufactured from <strong>high-strength epoxy/glass composite</strong>, the UKL 80SP housings are engineered for long-term, continuous operation. The series accommodates <strong>any standard 8" spiral-wound membrane element</strong> and offers <strong>multi-port connectivity</strong> for flexible system integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Features Section matching 1st image 100% */}
      <section className="detail-features-section">
        <div className="detail-container">
          <h2 className="detail-section-heading">Key Features</h2>

          <div className="features-grid">
            {keyFeatures.map((item, index) => (
              <div key={index} className={`feature-card ${item.accent}-border`}>
                <p className="feature-full-text">
                  <strong>{item.boldTitle}</strong> {item.boldMiddle ? (
                    <>
                      {item.desc.split(item.boldMiddle)[0]}
                      <strong>{item.boldMiddle}</strong>
                      {item.desc.split(item.boldMiddle)[1]}
                    </>
                  ) : item.desc}
                </p>
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

export default HousingSidePortDetail;
