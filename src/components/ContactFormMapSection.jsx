import React, { useState } from 'react';
import '../styles/ContactFormMapSection.css';

const ContactFormMapSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section className="contact-form-map-section">
      <div className="contact-form-map-container">
        
        {/* Left Column: Title, Intro & Embedded Google Map */}
        <div className="contact-left-col">
          <div className="contact-subtitle">
            <span className="asterisk-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              </svg>
            </span>
            <span className="subtitle-text">Contact Us</span>
          </div>

          <h2 className="contact-heading">Our team is always here to help</h2>

          <p className="contact-intro-text">
            UKL Industries' dedicated team makes every challenge easier to overcome. Your readiness to assist keeps everything running flawlessly.
          </p>

          {/* Embedded Google Map iframe for UKL Instruments Chennai */}
          <div className="map-wrapper">
            <iframe
              title="UKL Instruments Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.685353123861!2d80.1633!3d13.0456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52610d54020d5d%3A0x9d4a8e3f42111111!2sAlapakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600116!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Light Gray Contact Form Box */}
        <div className="contact-right-col">
          <div className="form-card-box">
            <h3 className="form-title">Get In Touch</h3>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-msg-btn">
                <span className="btn-text">Send Message</span>
                <span className="btn-green-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactFormMapSection;
