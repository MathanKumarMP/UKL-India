import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import QualityPage from './pages/QualityPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import './styles/global.css';
import './styles/responsive.css';

function App() {
  const [activeNav, setActiveNav] = useState('Home');

  // Read URL Hash on mount, hashchange, & popstate for Chrome Back/Forward buttons
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about') setActiveNav('About Us');
      else if (hash === 'product' || hash.includes('housing')) setActiveNav('Product');
      else if (hash === 'quality') setActiveNav('Quality');
      else if (hash === 'news') setActiveNav('News');
      else if (hash === 'contact') setActiveNav('Contact Us');
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
      case 'News':
        return <NewsPage />;
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
