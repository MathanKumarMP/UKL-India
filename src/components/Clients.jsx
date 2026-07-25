import React from 'react';
import '../styles/Clients.css';
import ScrollReveal from './ScrollReveal';
import wiproLogo from '../assets/wipro.png';
import thermaxLogo from '../assets/til.png';
import bgrLogo from '../assets/bgr.png';
import ionLogo from '../assets/ion.png';

const Clients = () => {
  const clientList = [
    {
      id: 'wipro',
      name: 'Wipro',
      logoSrc: wiproLogo,
    },
    {
      id: 'thermax',
      name: 'Thermax',
      logoSrc: thermaxLogo,
    },
    {
      id: 'bgr-energy',
      name: 'BGR Energy',
      logoSrc: bgrLogo,
    },
    {
      id: 'ion-exchange',
      name: 'Ion Exchange',
      logoSrc: ionLogo,
    },
    {
      id: 'l-and-t',
      name: 'LARSEN & TOUBRO',
      logo: (
        <svg width="180" height="75" viewBox="0 0 210 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* L&T Blue Emblem Box */}
          <rect x="25" y="15" width="42" height="42" rx="6" fill="#005B9E" />
          <text x="46" y="42" textAnchor="middle" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="900" fontSize="18" fill="#FFFFFF">
            L&T
          </text>
          {/* Text Larsen & Toubro */}
          <text x="82" y="36" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="900" fontSize="16" fill="#005B9E" letterSpacing="0.5">
            LARSEN & TOUBRO
          </text>
          <text x="82" y="52" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="600" fontSize="11" fill="#64748B" letterSpacing="1.2">
            ENGINEERING & CONST.
          </text>
        </svg>
      ),
    },
    {
      id: 'tata-chem',
      name: 'TATA CHEMICALS',
      logo: (
        <svg width="180" height="75" viewBox="0 0 210 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tata Symbol */}
          <path d="M35 20H65M50 20V48M40 30H60" stroke="#0A4B94" strokeWidth="4" strokeLinecap="round" />
          {/* Text TATA CHEMICALS */}
          <text x="78" y="36" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="900" fontSize="18" fill="#0A4B94" letterSpacing="1">
            TATA
          </text>
          <text x="78" y="52" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="700" fontSize="12" fill="#475569" letterSpacing="1.5">
            CHEMICALS LIMITED
          </text>
        </svg>
      ),
    },
    {
      id: 'pentair',
      name: 'PENTAIR',
      logo: (
        <svg width="170" height="75" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Water wave icon */}
          <path d="M30 40C30 32 40 22 45 22C50 22 60 32 60 40C60 48 53 54 45 54C37 54 30 48 30 40Z" fill="#0077C8" />
          <path d="M45 27C47 30 53 38 53 42C53 46 49 49 45 49C41 49 37 46 37 42C37 38 43 30 45 27Z" fill="#00A3E0" />
          {/* Text PENTAIR */}
          <text x="72" y="46" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="900" fontSize="22" fill="#003B71" letterSpacing="1.5">
            PENTAIR
          </text>
        </svg>
      ),
    },
    {
      id: 'bhel',
      name: 'BHEL',
      logo: (
        <svg width="170" height="75" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="38" height="38" rx="4" fill="#E31837" />
          <path d="M28 28L50 50M50 28L28 50" stroke="#FFFFFF" strokeWidth="4" />
          <text x="72" y="44" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="900" fontSize="24" fill="#003A70" letterSpacing="1">
            BHEL
          </text>
        </svg>
      ),
    },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...clientList, ...clientList, ...clientList];

  return (
    <section className="clients-section" id="clients">
      <div className="clients-container">
        {/* Subtitle & Header matching exact visual style */}
        <div className="clients-header">
          <div className="clients-subtitle">
            <span className="asterisk-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              </svg>
            </span>
            <span className="subtitle-text">Our Clients</span>
          </div>

          <ScrollReveal
            tag="h2"
            className="clients-heading"
            text="Companies That Trust Us"
          />
        </div>

        {/* Auto Scroll Marquee Slider */}
        <div className="clients-marquee-wrapper">
          <div className="clients-marquee-track">
            {marqueeItems.map((client, index) => (
              <div key={`${client.id}-${index}`} className="client-logo-card">
                <div className="client-logo-inner">
                  {client.logoSrc ? (
                    <img src={client.logoSrc} alt={client.name} className="client-logo-img" />
                  ) : (
                    client.logo
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
