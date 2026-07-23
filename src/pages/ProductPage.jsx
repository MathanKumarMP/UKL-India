import React, { useState, useEffect } from 'react';
import AboutBanner from '../components/AboutBanner';
import ProductFeatureSpec from '../components/ProductFeatureSpec';
import AsmeSection from '../components/AsmeSection';
import PremiumFeatures from '../components/PremiumFeatures';
import ProductVariations from '../components/ProductVariations';
import HousingEndPortDetail from '../components/HousingEndPortDetail';
import HousingSidePortDetail from '../components/HousingSidePortDetail';
import HousingFourEndPortDetail from '../components/HousingFourEndPortDetail';
import HousingFourSidePortDetail from '../components/HousingFourSidePortDetail';
import '../styles/ProductPage.css';

const ProductPage = ({ initialProduct }) => {
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('8-housing-end-port') || hash.includes('8housingendport')) {
        setSelectedProduct('8 Housing End Port');
      } else if (hash.includes('8-housing-side-port') || hash.includes('8housingsideport')) {
        setSelectedProduct('8 Housing Side Port');
      } else if (hash.includes('4-housing-end-port') || hash.includes('4housingendport')) {
        setSelectedProduct('4 Housing End Port');
      } else if (hash.includes('4-housing-side-port') || hash.includes('4housingsideport')) {
        setSelectedProduct('4 Housing Side Port');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct);
    }
  }, [initialProduct]);

  // Handle back button to return to products gallery
  const handleBackToProducts = () => {
    setSelectedProduct(null);
    window.location.hash = '#product';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to render current main content
  const renderMainContent = () => {
    if (selectedProduct === '8 Housing End Port' || selectedProduct === '8HousingEndPort') {
      return <HousingEndPortDetail onBack={handleBackToProducts} />;
    }

    if (selectedProduct === '8 Housing Side Port' || selectedProduct === '8HousingSidePort') {
      return <HousingSidePortDetail onBack={handleBackToProducts} />;
    }

    if (selectedProduct === '4 Housing End Port' || selectedProduct === '4HousingEndPort') {
      return <HousingFourEndPortDetail onBack={handleBackToProducts} />;
    }

    if (selectedProduct === '4 Housing Side Port' || selectedProduct === '4HousingSidePort') {
      return <HousingFourSidePortDetail onBack={handleBackToProducts} />;
    }

    return (
      <>
        {/* 1. Header Ocean Banner */}
        <AboutBanner customTitle="Product" />

        {/* 2. 4" & 8" Side Port and End Port Specs Grid */}
        <ProductFeatureSpec />

        {/* 3. ASME Certified Banner */}
        <AsmeSection />

        {/* 4. Our Premium Features List */}
        <PremiumFeatures />
      </>
    );
  };

  return (
    <div className="page-wrapper product-page">
      {/* Product Detail or General Product Content */}
      {renderMainContent()}

      {/* Product Variations section positioned right above the Footer */}
      <ProductVariations
        activeTitle={selectedProduct || '8 Housing End Port'}
        onSelectProduct={(title) => {
          setSelectedProduct(title);
          if (title === '8 Housing End Port') window.location.hash = '#8-housing-end-port';
          else if (title === '8 Housing Side Port') window.location.hash = '#8-housing-side-port';
          else if (title === '4 Housing End Port') window.location.hash = '#4-housing-end-port';
          else if (title === '4 Housing Side Port') window.location.hash = '#4-housing-side-port';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
};

export default ProductPage;
