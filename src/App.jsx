import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import QualityPage from './pages/QualityPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import './styles/global.css';
import './styles/responsive.css';

function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [selectedNewsSlug, setSelectedNewsSlug] = useState('');

  // Read URL Hash & Path on mount, hashchange, & popstate for invalid route handling (404 Page)
  useEffect(() => {
    const handleHashSync = () => {
      const rawHash = window.location.hash.replace('#', '').trim();
      const rawPath = window.location.pathname.replace(/^\/+|\/+$/g, '').trim().toLowerCase();

      // Determine active route key (hash takes precedence if present, else path)
      const target = rawHash ? rawHash.toLowerCase() : rawPath;

      if (target.startsWith('news-detail-')) {
        const slug = (rawHash || rawPath).replace(/^news-detail-/i, '');
        setSelectedNewsSlug(slug);
        setActiveNav('NewsDetail');
      } else if (target === 'about') {
        setActiveNav('About Us');
      } else if (target === 'product' || target === 'housing' || (target.includes('housing') && !target.includes('news'))) {
        setActiveNav('Product');
      } else if (target === 'quality') {
        setActiveNav('Quality');
      } else if (target === 'gallery') {
        setActiveNav('Gallery');
      } else if (target === 'news') {
        setActiveNav('News');
      } else if (target === 'contact') {
        setActiveNav('Contact Us');
      } else if (target === 'home' || target === '') {
        setActiveNav('Home');
      } else {
        // Unknown or wrong route -> Show 404 Page
        setActiveNav('NotFound');
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    window.addEventListener('popstate', handleHashSync);
    return () => {
      window.removeEventListener('hashchange', handleHashSync);
      window.removeEventListener('popstate', handleHashSync);
    };
  }, []);

  // Auto scroll to top on nav switch
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [activeNav]);

  const renderCurrentPage = () => {
    switch (activeNav) {
      case 'About Us':
        return <AboutPage />;
      case 'Product':
        return <ProductPage />;
      case 'Quality':
        return <QualityPage />;
      case 'Gallery':
        return <GalleryPage />;
      case 'News':
        return <NewsPage />;
      case 'NewsDetail':
        return <NewsDetailPage slug={selectedNewsSlug} />;
      case 'Contact Us':
        return <ContactPage />;
      case 'Home':
        return <Home />;
      case 'NotFound':
      default:
        return <NotFoundPage setActiveNav={setActiveNav} />;
    }
  };

  return (
    <div className="app-container">
      <Preloader />
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer setActiveNav={setActiveNav} />
      <ScrollToTop />
    </div>
  );
}

export default App;
