import React from 'react';
import AboutBanner from '../components/AboutBanner';
import ProductFeatureSpec from '../components/ProductFeatureSpec';
import AsmeSection from '../components/AsmeSection';
import PremiumFeatures from '../components/PremiumFeatures';
import ProductVariations from '../components/ProductVariations';
import '../styles/ProductPage.css';

const ProductPage = () => {
  return (
    <div className="page-wrapper product-page">
      {/* 1. Header Ocean Banner */}
      <AboutBanner customTitle="Product" />

      {/* 2. 4" & 8" Side Port and End Port Specs Grid */}
      <ProductFeatureSpec />

      {/* 3. ASME Certified Banner */}
      <AsmeSection />

      {/* 4. Our Premium Features List */}
      <PremiumFeatures />

      {/* 5. Product Variations Grid */}
      <ProductVariations />
    </div>
  );
};

export default ProductPage;
