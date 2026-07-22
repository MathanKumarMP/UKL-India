import React from 'react';
import '../styles/QualityCertifications.css';

const QualityCertifications = () => {
  const certs = [
    {
      id: 'asme',
      title: 'ASME',
      description:
        'The FRP membrane housings meet the Boiler and Pressure Vessel Code (BPVC) of American Society of Mechanical Engineers (ASME, Section X) for the production of Fiber Reinforced Plastic Pressure vessels.',
      hasBtn: true,
      logo: (
        <div className="cert-logo-asme">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
            <path
              d="M30 20 L70 20 C80 20 85 25 85 35 C85 45 80 50 70 50 L30 50 L30 20 Z"
              stroke="#1a1a1a"
              strokeWidth="3"
            />
            <path
              d="M40 32 Q 50 18, 60 32 Q 50 46, 40 32 Z"
              stroke="#1a1a1a"
              strokeWidth="2.5"
            />
            <text x="50" y="38" fontSize="14" fontWeight="800" textAnchor="middle" fill="#1a1a1a">
              ASME
            </text>
            <text x="50" y="68" fontSize="18" fontWeight="900" textAnchor="middle" fill="#1a1a1a">
              RP
            </text>
          </svg>
        </div>
      )
    },
    {
      id: 'iso',
      title: 'ISO 9001:2015',
      description:
        'The ISO 9001:2015 standard from TÜV NORD CERT GmbH is recognized internationally for promoting consistent quality practices in manufacturing. ISO 9001:2015 sets out the criteria for a quality management system. The standard is based on a number of quality management principles including a strong customer focus, motivation and implication of top management, process approach and continual improvement.',
      hasBtn: true,
      logo: (
        <div className="cert-logo-iso">
          <div className="tuv-badge">
            <span className="tuv-text">TÜV NORD</span>
          </div>
          <div className="iso-badge">
            <svg width="50" height="50" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="4" fill="#0c4a6e" />
              <circle cx="20" cy="20" r="14" stroke="#ffffff" strokeWidth="2" />
              <path d="M14 20 L18 24 L26 16" stroke="#ffffff" strokeWidth="2.5" />
            </svg>
            <span className="iso-text">ISO 9001</span>
          </div>
        </div>
      )
    },
    {
      id: 'nbbi',
      title: 'NBBI',
      description:
        "Accreditation involves thorough evaluation of an organization's quality system manual and requires a demonstration of its ability to implement the system. The manufacturing facilities must remain under observation and renewal review periodically, by an NBBI Commissioned Inspector.",
      hasBtn: false,
      logo: (
        <div className="cert-logo-nbbi">
          <svg width="130" height="130" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="42" stroke="#047857" strokeWidth="4" />
            <circle cx="50" cy="50" r="34" stroke="#047857" strokeWidth="1.5" />
            <path d="M50 18 L50 82 M18 50 L82 50" stroke="#047857" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="14" fill="#047857" />
            <text x="50" y="54" fontSize="11" fontWeight="800" textAnchor="middle" fill="#ffffff">
              NBBI
            </text>
            <text x="50" y="86" fontSize="5.5" fontWeight="700" textAnchor="middle" fill="#047857">
              NATIONAL BOARD INSPECTORS
            </text>
          </svg>
        </div>
      )
    },
    {
      id: 'nsf',
      title: 'NSF International',
      description:
        "This certificate is the property of NSF International and must be returned upon request. This certificate remains valid subject to the listed standard products in NSF's Official Listings for the referenced standards. For the most current and complete Listing information, please access NSF's website (nsf.org).",
      hasBtn: true,
      logo: (
        <div className="cert-logo-nsf">
          <svg width="130" height="130" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="42" r="36" fill="#0284c7" />
            <text x="50" y="49" fontSize="22" fontWeight="900" textAnchor="middle" fill="#ffffff">
              NSF
            </text>
            <text x="50" y="90" fontSize="11" fontWeight="800" textAnchor="middle" fill="#0284c7">
              NSF International
            </text>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="quality-certs-section">
      <div className="quality-certs-container">
        {/* Intro Section Header */}
        <div className="quality-intro-header">
          <h2 className="quality-intro-title">Quality</h2>
          <p className="quality-intro-paragraph">
            At UKL Instruments, products are produced to the highest standard of quality and safety.
            Each pressure vessel is subject to rigorous quality inspection and hydro testing before it is
            shipped out of the factory. The quality certifications follow from independent and separate
            accreditations for materials, standards and practices at the manufacturing facility in Chennai, India.
          </p>
        </div>

        {/* 4 Accreditation Cards Stack */}
        <div className="certs-stack">
          {certs.map((item) => (
            <div key={item.id} className="cert-card">
              {/* Left Column: Light Gray Box with Stamp Logo */}
              <div className="cert-card-left">
                {item.logo}
              </div>

              {/* Right Column: Title, Paragraph & Download Button */}
              <div className="cert-card-right">
                <h3 className="cert-title">{item.title}</h3>
                <p className="cert-description">{item.description}</p>

                {item.hasBtn && (
                  <button className="cert-download-btn">
                    <span className="btn-text">View Certificate</span>
                    <span className="btn-green-circle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityCertifications;
