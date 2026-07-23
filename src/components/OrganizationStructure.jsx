import React from 'react';
import '../styles/OrganizationStructure.css';
import orgChartImg from '../assets/Organization Structure.avif';

const OrganizationStructure = () => {
  return (
    <section className="org-section">
      {/* Background Graphic Overlay Tiles matching user screenshot */}
      <div className="org-bg-overlay-right"></div>

      <div className="org-content">
        <h2 className="org-heading">Organization Structure</h2>

        {/* Floating White Card Overlapping Bottom Edge */}
        <div className="org-card">
          <img
            src={orgChartImg}
            alt="UKL Instruments Organization Structure Chart"
            className="org-chart-img"
          />
        </div>
      </div>
    </section>
  );
};

export default OrganizationStructure;
