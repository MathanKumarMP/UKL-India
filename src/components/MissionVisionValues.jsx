import React, { useState } from 'react';
import '../styles/MissionVisionValues.css';

const MissionVisionValues = () => {
  // Mission card is active by default as shown in reference image, 
  // and hovering any card seamlessly activates it
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      id: 'mission',
      title: 'Mission',
      text: 'The very basis of our existence is to successfully develop and produce high quality water treatment components at the most affordable prices worldwide.',
      icon: (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" stroke="url(#icon-grad-1)" />
          <circle cx="12" cy="12" r="6" stroke="url(#icon-grad-1)" />
          <circle cx="12" cy="12" r="2" stroke="url(#icon-grad-1)" fill="url(#icon-grad-1)" />
          <path d="M19 5l-4 4" stroke="url(#icon-grad-1)" />
          <path d="M15 5h4v4" stroke="url(#icon-grad-1)" />
        </svg>
      ),
      plainIcon: (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="#111827" />
          <path d="M19 5l-4 4" />
          <path d="M15 5h4v4" />
        </svg>
      )
    },
    {
      id: 'vision',
      title: 'Vision',
      text: 'To strive towards Customer Satisfaction all the time and become the leading manufacturer of water treatment components worldwide.',
      icon: (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="url(#icon-grad-2)" />
          <circle cx="12" cy="12" r="4.5" fill="url(#icon-grad-2)" />
        </svg>
      ),
      plainIcon: (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="4.5" fill="#111827" />
        </svg>
      )
    },
    {
      id: 'values',
      title: 'Values',
      text: 'In our business, the customer is the KING. We strive to exceed the expectations of our customers through ethical business practices and strong leadership and well coordinated teamwork.',
      icon: (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" stroke="url(#icon-grad-3)" />
          <path d="M10 22h4" stroke="url(#icon-grad-3)" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" stroke="url(#icon-grad-3)" />
          <path d="M12 2v2" stroke="url(#icon-grad-3)" />
          <path d="M4.93 4.93l1.41 1.41" stroke="url(#icon-grad-3)" />
          <path d="M17.66 6.34l1.41-1.41" stroke="url(#icon-grad-3)" />
        </svg>
      ),
      plainIcon: (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
          <path d="M12 2v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 6.34l1.41-1.41" />
        </svg>
      )
    }
  ];

  return (
    <section className="mission-section">
      {/* SVG Gradient definitions for active card icons */}
      <svg style={{ height: 0, width: 0, position: 'absolute' }} aria-hidden="true">
        <defs>
          <linearGradient id="icon-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0072ff" />
            <stop offset="100%" stopColor="#2ed573" />
          </linearGradient>
          <linearGradient id="icon-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0072ff" />
            <stop offset="100%" stopColor="#2ed573" />
          </linearGradient>
          <linearGradient id="icon-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0072ff" />
            <stop offset="100%" stopColor="#2ed573" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mission-container">
        <div className="cards-grid">
          {cards.map((card, index) => {
            const isActive = activeCard === index;
            return (
              <div
                key={card.id}
                className={`mv-card ${isActive ? 'active-dark' : 'default-light'}`}
                onMouseEnter={() => setActiveCard(index)}
              >
                {/* Card Icon */}
                <div className="card-icon-wrapper">
                  {isActive ? card.icon : card.plainIcon}
                </div>

                {/* Card Title */}
                <h3 className="card-title">{card.title}</h3>

                {/* Card Text Description */}
                <p className="card-text">{card.text}</p>

                {/* Bottom Dashed Accent Line */}
                <div className="card-bottom-accent"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
