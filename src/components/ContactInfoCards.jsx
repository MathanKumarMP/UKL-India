import React from 'react';
import '../styles/ContactInfoCards.css';

const ContactInfoCards = () => {
  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        {/* Card 1: Email Address */}
        <div className="contact-card">
          <div className="card-badge">Contact</div>
          <div className="card-body">
            <div className="card-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0072ff" strokeWidth="2.2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="card-details">
              <h3 className="card-title">Email Address</h3>
              <a href="mailto:shreeram@uklindia.in" className="card-link">
                shreeram@uklindia.in
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Phone Number */}
        <div className="contact-card">
          <div className="card-badge">Call</div>
          <div className="card-body">
            <div className="card-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0072ff" strokeWidth="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="card-details">
              <h3 className="card-title">Phone Number</h3>
              <a href="tel:+919841127656" className="card-link">
                +91 98411 27656
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: Location Address */}
        <div className="contact-card">
          <div className="card-badge">Address</div>
          <div className="card-body">
            <div className="card-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0072ff" strokeWidth="2.2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="card-details">
              <h3 className="card-title">Location</h3>
              <p className="card-address-text">
                232, 7th Street, Ashtalakshmi Nagar, Alapakkam, Chennai – 600 116. Tamilnadu, INDIA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
