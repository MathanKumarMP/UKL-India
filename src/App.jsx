import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CompanyOverview from './components/CompanyOverview';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';
import './styles/responsive.css';

function App() {
  // Auto scroll to top banner section on page refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CompanyOverview />
        <Products />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
