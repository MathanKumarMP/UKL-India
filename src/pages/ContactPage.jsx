import React from 'react';
import AboutBanner from '../components/AboutBanner';
import ContactInfoCards from '../components/ContactInfoCards';
import ContactFormMapSection from '../components/ContactFormMapSection';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="page-wrapper contact-page">
      {/* 1. Header Ocean Banner */}
      <AboutBanner customTitle="Contact us" />

      {/* 2. 3 Contact Info Cards (Email, Phone, Address) */}
      <ContactInfoCards />

      {/* 3. Get In Touch Form & Interactive Google Map */}
      <ContactFormMapSection />
    </div>
  );
};

export default ContactPage;
