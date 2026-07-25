import React from 'react';
import '../styles/QualityCertifications.css';
import asmeLogo from '../assets/logo RP.png';
import tuvLogo from '../assets/logo TUV.png';
import nbbiLogo from '../assets/logo NBBI.png';
import nsfLogo from '../assets/image copy 2.png';

const QualityCertifications = () => {
  const certs = [
    
    {
      id: 'iso',
      title: 'ISO 9001:2015',
      description:
        'The ISO 9001:2015 standard from TUV NORD CERT GmbH is recognized internationally for promoting consistent quality practices in manufacturing. ISO 9001:2015 sets out the criteria for the quality management system. The standard is based on a number of quality management principles. This includes a strong customer focus, motivation and implication of top management, process approach and continuous improvement.',
      hasBtn: true,
      pdfUrl: '/Certificate_NABCB_ISO_9001_638936284457144111_Ver_1.pdf',
      logoImg: tuvLogo,
      alt: 'TÜV NORD ISO 9001 Certification Logo'
    },
    
    {
      id: 'nsf',
      title: 'NSF',
      description:
        'NSF (National Sanitation Foundation) International is the US recognized standard for components which contact drinking water to ensure that they do not contribute contaminants that could cause health problems. The NSF certification mark shows that our products comply with all standard requirements. NSF conducts periodic unannounced inspections and product testing to verify that our products continues to comply with the standard.',
      hasBtn: true,
      pdfUrl: '/Certificate-C0838879.pdf',
      logoImg: nsfLogo,
      alt: 'NSF International Certification Logo'
    },
    {
      id: 'asme',
      title: 'ASME',
      description:
        'The FRP membrane housings meet the Boiler and Pressure Vessel Code (BPVC) of American Society of Mechanical Engineers (ASME, Section X) for the production of Fiber Reinforced Plastic Pressure vessels.',
      hasBtn: true,
      pdfUrl: '/107360-BPV-CERT-10.15.25-RR.pdf',
      logoImg: asmeLogo,
      alt: 'ASME Certification Stamp Logo'
    },
    {
      id: 'nbbi',
      title: 'NBBI',
      description:
        "Accreditation involves thorough evaluation of an organization’s quality system manual and requires a demonstration of its ability to implement the system. The stamp signifies strict repair and/or alteration requirements have been met and verified by an NBBI Commissioned Inspector.",
      hasBtn: false,
      logoImg: nbbiLogo,
      alt: 'NBBI Certification Stamp Logo'
    },
  ];

  return (
    <section className="quality-certs-section">
      <div className="quality-certs-container">
        {/* Intro Section Header */}
        <div className="quality-intro-header">
          <div className="quality-subtitle">
            <span className="asterisk-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              </svg>
            </span>
            <span className="subtitle-text">Certifications & Accreditations</span>
          </div>
          <h2 className="quality-intro-title">Quality</h2>
          <p className="quality-intro-paragraph">
            At UKL Instruments, products are produced to the highest standard of quality and safety.
            Each pressure vessel is subject to rigorous quality inspection and hydro testing before it is
            shipped out of the factory. The quality certifications follow from independent and separate
            accreditations for materials, standards and practices at the manufacturing facility in Chennai, India.
          </p>
        </div>

        {/* 4 Accreditation Cards 2-Column Grid */}
        <div className="certs-grid">
          {certs.map((item) => (
            <div key={item.id} className="cert-card">
              {/* Left Column: Light Gray Box with Official Stamp Logo */}
              <div className="cert-card-left">
                <div className="cert-logo-img-wrapper">
                  <img src={item.logoImg} alt={item.alt} className="cert-official-logo" />
                </div>
              </div>

              {/* Right Column: Title, Paragraph & Download Button */}
              <div className="cert-card-right">
                <h3 className="cert-title">{item.title}</h3>
                <div className="cert-description">{item.description}</div>

                <div className="cert-action-row">
                  {item.hasBtn ? (
                    <a
                      href={item.pdfUrl || '#'}
                      className="cert-download-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <span className="cert-btn-circle">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#004dad" strokeWidth="2.5">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                      <span className="btn-text">View Certificate</span>
                    </a>
                  ) : (


                    <></>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityCertifications;
