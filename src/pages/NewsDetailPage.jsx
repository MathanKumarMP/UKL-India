import React, { useState, useEffect } from 'react';
import '../styles/NewsDetailPage.css';
import oceanBg from '../assets/about-banner-bg.png'; // Fallback bg
import { API_BASE } from '../config';

const NewsDetailPage = ({ slug }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticleDetail = async () => {
      if (!slug) return;
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(`${API_BASE}/api/website/news/${slug}`);
        const data = await res.json();
        if (data.success && data.article) {
          const item = data.article;
          setArticle({
            title: item.title,
            image: item.thumbnail ? (item.thumbnail.startsWith('http') ? item.thumbnail : `${API_BASE}${item.thumbnail}`) : oceanBg,
            author: item.author || 'UKL Team',
            date: new Date(item.blogDate).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }),
            category: item.category || 'Company News',
            excerpt: item.shortDescription || '',
            details: item.blogDetails || ''
          });
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error loading article:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchArticleDetail();
  }, [slug]);

  if (loading) {
    return (
      <div className="news-detail-loading" style={{ padding: '100px 20px', textAlign: 'center', minHeight: '60vh', color: '#64748b' }}>
        <h2>Loading article details...</h2>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="news-detail-error" style={{ padding: '100px 20px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Oops! Article not found.</h2>
        <button onClick={() => window.location.hash = '#news'} className="back-to-blog-btn" style={{ marginTop: '20px' }}>
          Back to News
        </button>
      </div>
    );
  }

  return (
    <div className="news-detail-page-wrapper">
      {/* 1. Header Banner utilizing thumbnail image as bg */}
      <section 
        className="news-detail-banner" 
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="news-detail-banner-overlay"></div>
        <div className="news-detail-banner-content">
          <span className="news-detail-category-tag">{article.category}</span>
          <h1 className="news-detail-banner-title">{article.title}</h1>
          <div className="news-detail-meta-row">
            <span>👤 By {article.author}</span>
            <span className="meta-divider">•</span>
            <span>📅 {article.date}</span>
          </div>
        </div>
      </section>

      {/* 2. Content Section */}
      <div className="news-detail-container">
        <div className="news-detail-inner">
          <button 
            onClick={() => window.location.hash = '#news'} 
            className="back-to-blog-btn"
          >
            ← Back to News Grid
          </button>

          {/* Excerpt Summary */}
          {article.excerpt && (
            <p className="news-detail-summary-block">
              {article.excerpt}
            </p>
          )}

          {/* Main Rich text body */}
          <div 
            className="news-detail-rich-body"
            dangerouslySetInnerHTML={{ __html: article.details }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
