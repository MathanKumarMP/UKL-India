import React from 'react';
import '../styles/Clients.css';
import ScrollReveal from './ScrollReveal';

const Clients = () => {
  const clientList = [
    {
      id: 'thermax',
      name: 'THERMAX',
      logo: (
        <svg width="170" height="75" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Red T Symbol */}
          <path d="M75 10H125V28H108V52H92V28H75V10Z" fill="#E31E24" />
          <path d="M75 10H88V28H75V10Z" fill="#C4161B" />
          <path d="M112 10H125V28H112V10Z" fill="#C4161B" />
          <path d="M88 28H112V52H88V28Z" fill="#E31E24" />
          {/* Text THERMAX */}
          <text x="100" y="70" textAnchor="middle" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="900" fontSize="19" fill="#111827" letterSpacing="1.5">
            THERMAX
          </text>
        </svg>
      ),
    },
    {
      id: 'ion-exchange',
      name: 'ION EXCHANGE',
      logo: (
        <svg width="190" height="75" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cyan/Blue Circle dot icon */}
          <circle cx="28" cy="28" r="7" fill="#0088CC" />
          <circle cx="28" cy="28" r="4" fill="#00AEEF" />
          <path d="M28 17C21.925 17 17 21.925 17 28C17 34.075 21.925 39 28 39C32.1 39 35.6 36.7 37.4 33.3H31.5C30.6 34.3 29.4 35 28 35C24.1 35 21 31.9 21 28C21 24.1 24.1 21 28 21C29.4 21 30.6 21.7 31.5 22.7H37.4C35.6 19.3 32.1 17 28 17Z" fill="#0088CC" />
          {/* Text ION EXCHANGE */}
          <text x="44" y="34" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="800" fontSize="20" fill="#0088CC" letterSpacing="0.5">
            ION EXCHANGE
          </text>
          {/* Script Subtext Refreshing the Planet */}
          <text x="125" y="54" textAnchor="middle" fontFamily="'Dancing Script', 'Brush Script MT', cursive" fontWeight="700" fontSize="16" fill="#20BF6B" fontStyle="italic">
            Refreshing the Planet
          </text>
        </svg>
      ),
    },
    {
      id: 'wipro',
      name: 'wipro',
      logo: (
        <svg width="170" height="75" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wipro Dotted Multi-colored Flower/Sphere Logo */}
          <g transform="translate(45, 40)">
            {/* Outer ring of dots */}
            <circle cx="0" cy="-22" r="2.5" fill="#E83E8C" />
            <circle cx="11" cy="-19" r="2.5" fill="#FD7E14" />
            <circle cx="19" cy="-11" r="2.5" fill="#FFC107" />
            <circle cx="22" cy="0" r="2.5" fill="#28A745" />
            <circle cx="19" cy="11" r="2.5" fill="#20C997" />
            <circle cx="11" cy="19" r="2.5" fill="#17A2B8" />
            <circle cx="0" cy="22" r="2.5" fill="#007BFF" />
            <circle cx="-11" cy="19" r="2.5" fill="#6610F2" />
            <circle cx="-19" cy="11" r="2.5" fill="#6F42C1" />
            <circle cx="-22" cy="0" r="2.5" fill="#E83E8C" />
            <circle cx="-19" cy="-11" r="2.5" fill="#D63384" />
            <circle cx="-11" cy="-19" r="2.5" fill="#DC3545" />

            {/* Middle ring of dots */}
            <circle cx="0" cy="-15" r="2.2" fill="#FD7E14" />
            <circle cx="7.5" cy="-13" r="2.2" fill="#FFC107" />
            <circle cx="13" cy="-7.5" r="2.2" fill="#28A745" />
            <circle cx="15" cy="0" r="2.2" fill="#17A2B8" />
            <circle cx="13" cy="7.5" r="2.2" fill="#007BFF" />
            <circle cx="7.5" cy="13" r="2.2" fill="#6610F2" />
            <circle cx="0" cy="15" r="2.2" fill="#6F42C1" />
            <circle cx="-7.5" cy="13" r="2.2" fill="#E83E8C" />
            <circle cx="-13" cy="7.5" r="2.2" fill="#DC3545" />
            <circle cx="-15" cy="0" r="2.2" fill="#FD7E14" />
            <circle cx="-13" cy="-7.5" r="2.2" fill="#FFC107" />
            <circle cx="-7.5" cy="-13" r="2.2" fill="#28A745" />

            {/* Inner ring */}
            <circle cx="0" cy="-8" r="1.8" fill="#20C997" />
            <circle cx="7" cy="0" r="1.8" fill="#007BFF" />
            <circle cx="0" cy="8" r="1.8" fill="#6F42C1" />
            <circle cx="-7" cy="0" r="1.8" fill="#E83E8C" />
            <circle cx="0" cy="0" r="2" fill="#343A40" />
          </g>
          {/* Text wipro */}
          <text x="130" y="47" textAnchor="middle" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="700" fontSize="26" fill="#3D2069" letterSpacing="-0.5">
            wipro
          </text>
        </svg>
      ),
    },
    {
      id: 'bgr-energy',
      name: 'BGR ENERGY',
      logo: (
        <svg width="170" height="75" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* BGR Ring with Red Center Dot */}
          <circle cx="100" cy="26" r="14" stroke="#0072BC" strokeWidth="4.5" fill="none" />
          <circle cx="100" cy="26" r="6" fill="#ED1C24" />
          {/* Text BGR ENERGY */}
          <text x="100" y="55" textAnchor="middle" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="900" fontSize="21" fill="#0072BC" letterSpacing="0.5">
            BGR
          </text>
          <text x="100" y="70" textAnchor="middle" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="800" fontSize="13" fill="#ED1C24" letterSpacing="1.8">
            ENERGY
          </text>
        </svg>
      ),
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
                  {client.logo}
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
