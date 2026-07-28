import React, { useState } from 'react';
import '../styles/ContactFormMapSection.css';
import { API_BASE } from '../config';

const ContactFormMapSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    const cleanPhone = formData.phone.trim();
    if (!cleanPhone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(cleanPhone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    const cleanEmail = formData.email.trim();
    if (!cleanEmail) {
      newErrors.email = 'Email address is required';
    } else if (!cleanEmail.includes('@') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      newErrors.email = 'Please enter a valid email address with @';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Only allow digits and cap length at 10 digits
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, phone: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE}/api/website/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();

      if (data.success) {
        alert(data.message || 'Thank you! Your message has been sent successfully.');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        alert(data.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Enquiry submission error:', error);
      alert('Failed to connect to the server. Please check if backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form-map-section" id="contact">
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

          <h2 className="contact-heading">Our team is always available to help you</h2>

          <p className="contact-intro-text">
            UKL Industries' dedicated team makes every challenge easier to overcome.<br />
            Your readiness to assist keeps everything running flawlessly.
          </p>

          {/* Embedded Google Map iframe for UKL Instruments */}
          <div className="map-wrapper">
            <iframe
              title="UKL Instruments Location Map"
              src="https://maps.google.com/maps?q=UKL+Instruments+Pvt+Ltd,+232,+7th+Street,+Ashtalakshmi+Nagar,+Alapakkam,+Chennai+600116&ll=13.046609,80.16811&z=15&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Contact Form Box */}
        <div className="contact-right-col">
          <div className="form-card-box">
            <h3 className="form-title">Get In Touch</h3>

            <form noValidate onSubmit={handleSubmit} className="contact-form">
              {/* Name Field */}
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'input-error' : ''}
                  disabled={isSubmitting}
                  required
                />
                {errors.name && (
                  <span className="field-error-text">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Phone Field */}
              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (10 digits) *"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  inputMode="numeric"
                  className={errors.phone ? 'input-error' : ''}
                  disabled={isSubmitting}
                  required
                />
                {errors.phone && (
                  <span className="field-error-text">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'input-error' : ''}
                  disabled={isSubmitting}
                  required
                />
                {errors.email && (
                  <span className="field-error-text">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className="input-group">
                <textarea
                  name="message"
                  placeholder="Write your message here... *"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'input-error' : ''}
                  disabled={isSubmitting}
                  required
                ></textarea>
                {errors.message && (
                  <span className="field-error-text">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="send-msg-btn" disabled={isSubmitting}>
                <span className="send-btn-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#004dad" strokeWidth="2.5">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
                <span className="btn-text">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactFormMapSection;
