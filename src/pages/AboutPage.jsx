import React from 'react';
import AboutBanner from '../components/AboutBanner';
import AboutUKL from '../components/AboutUKL';
import MissionVisionValues from '../components/MissionVisionValues';
import OrganizationStructure from '../components/OrganizationStructure';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="page-wrapper about-page">
      <AboutBanner />
      <AboutUKL />
      <MissionVisionValues />
      <OrganizationStructure />
    </div>
  );
};

export default AboutPage;
