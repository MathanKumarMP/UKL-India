import React from 'react';
import AboutBanner from '../components/AboutBanner';
import GalleryGrid from '../components/GalleryGrid';

const GalleryPage = () => {
  return (
    <div className="page-wrapper gallery-page">
      {/* Header Ocean Banner */}
      <AboutBanner customTitle="Gallery" />

      {/* Main Gallery Grid with Category Filter Tabs */}
      <GalleryGrid />
    </div>
  );
};

export default GalleryPage;
