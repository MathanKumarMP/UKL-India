import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import CompanyOverview from '../components/CompanyOverview';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Clients from '../components/Clients';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="page-wrapper home-page">
      <Hero />
      <About />
      <CompanyOverview />
      <Products />
      <Testimonials />
      <Blog />
      <Clients />
    </div>
  );
};

export default Home;
