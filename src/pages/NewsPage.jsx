import React from 'react';
import AboutBanner from '../components/AboutBanner';
import NewsGrid from '../components/NewsGrid';
import '../styles/NewsPage.css';

const NewsPage = () => {
  return (
    <div className="page-wrapper news-page">
      {/* 1. Header Ocean Banner */}
      <AboutBanner customTitle="News" />

      {/* 2. Main News Grid (Blog Posts + Sidebar) */}
      <NewsGrid />
    </div>
  );
};

export default NewsPage;
