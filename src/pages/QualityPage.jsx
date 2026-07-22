import React from 'react';
import AboutBanner from '../components/AboutBanner';
import QualityCertifications from '../components/QualityCertifications';
import '../styles/QualityPage.css';

const QualityPage = () => {
  return (
    <div className="page-wrapper quality-page">
      {/* 1. Ocean Banner Header */}
      <AboutBanner customTitle="Quality" />

      {/* 2. Quality Overview & 4 Accreditation Cards Stack */}
      <QualityCertifications />
    </div>
  );
};

export default QualityPage;
