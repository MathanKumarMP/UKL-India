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
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import './styles/global.css';
import './styles/responsive.css';

function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [selectedNewsSlug, setSelectedNewsSlug] = useState('');

  // Read URL Hash on mount, hashchange, & popstate for Chrome Back/Forward buttons
  useEffect(() => {
    const handleHashSync = () => {
      const rawHash = window.location.hash.replace('#', '');
      const hash = rawHash.toLowerCase();
      if (hash === 'about') setActiveNav('About Us');
      else if (hash === 'product' || hash.includes('housing')) setActiveNav('Product');
      else if (hash === 'quality') setActiveNav('Quality');
      else if (hash === 'gallery') setActiveNav('Gallery');
      else if (hash === 'news') setActiveNav('News');
      else if (hash === 'contact') setActiveNav('Contact Us');
      else if (hash.startsWith('news-detail-')) {
        const slug = rawHash.replace('news-detail-', '');
        setSelectedNewsSlug(slug);
        setActiveNav('NewsDetail');
      }
      else if (hash === 'home' || hash === '') setActiveNav('Home');
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
      default:
        return <Home />;
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
