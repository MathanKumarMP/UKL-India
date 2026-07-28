import React, { useState, useEffect } from 'react';
import '../styles/NewsGrid.css';
import post2Img from '../assets/DSC_9645.JPG';
import post3Img from '../assets/DSC_9640.JPG';
import { API_BASE } from '../config';

const formatDateStr = (rawDate) => {
  if (!rawDate) return '26-Apr-2024';
  const d = new Date(rawDate);
  if (isNaN(d.getTime())) return String(rawDate).replace(/\//g, '-');
  
  const day = String(d.getDate()).padStart(2, '0');
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[d.getMonth()];
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};

const fallbackPosts = [
  {
    id: '2',
    title: 'Choosing the Right UKL Membrane Housing for Residential and Industrial RO Systems',
    image: post2Img,
    author: 'ukloceansoftwars',
    date: '26-Apr-2024',
    excerpt: 'Selecting the appropriate membrane housing requires looking at operating pressure, feed water salinity, and end plug security.',
    category: 'Technical Guide',
    slug: 'choosing-the-right-ukl-membrane-housing'
  },
  {
    id: '3',
    title: 'End Entry vs Side Entry UKL Membrane Housings: Applications and Pressure Ratings Explained',
    image: post3Img,
    author: 'ukloceansoftwars',
    date: '26-Apr-2024',
    excerpt: 'End-entry membrane housings are ideal for small to medium RO units, whereas side-entry systems support complex manifold links.',
    category: 'Technical Guide',
    slug: 'end-entry-vs-side-entry-ukl-membrane-housings'
  }
];

const NewsGrid = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (queryParam = '') => {
    setLoading(true);
    try {
      const url = queryParam.trim()
        ? `${API_BASE}/api/website/news?search=${encodeURIComponent(queryParam.trim())}`
        : `${API_BASE}/api/website/news`;
      
      const res = await fetch(url);
      const data = await res.json();
      if (data.success && data.articles && data.articles.length > 0) {
        const mapped = data.articles.map(item => ({
          id: item._id,
          title: item.title,
          image: item.thumbnail ? (item.thumbnail.startsWith('http') ? item.thumbnail : `${API_BASE}${item.thumbnail}`) : post2Img,
          author: item.author || 'UKL Team',
          date: formatDateStr(item.blogDate),
          excerpt: item.shortDescription || '',
          category: item.category || 'Company News',
          slug: item.slug
        }));
        setPosts(mapped);
      } else if (!queryParam.trim()) {
        setPosts(fallbackPosts);
      } else {
        // Search against fallback posts if API returns no match
        const filteredFallback = fallbackPosts.filter(post =>
          (post.title && post.title.toLowerCase().includes(queryParam.toLowerCase())) ||
          (post.excerpt && post.excerpt.toLowerCase().includes(queryParam.toLowerCase()))
        );
        setPosts(filteredFallback);
      }
    } catch (error) {
      console.error('Failed to load news articles via API:', error);
      const filteredFallback = fallbackPosts.filter(post =>
        (post.title && post.title.toLowerCase().includes(queryParam.toLowerCase())) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(queryParam.toLowerCase()))
      );
      setPosts(filteredFallback);
    } finally {
      setLoading(false);
    }
  };

  // Debounced API search on searchQuery change
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchNews(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchNews(searchQuery);
  };

  const handleCardClick = (slug) => {
    window.location.hash = `#news-detail-${slug}`;
  };

  return (
    <section className="news-grid-section">
      <div className="news-grid-container">
        
        {/* Section Title */}
        <div className="news-section-header">
          <h1 className="news-page-title">View All Articles</h1>

          {/* Search Controls (Connected to Backend API) */}
          <div className="news-filter-bar">
            <form className="news-search-box" onSubmit={handleSearchSubmit}>
              <button type="submit" className="search-icon-btn" aria-label="Search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button type="button" className="clear-search-btn" onClick={() => setSearchQuery('')}>×</button>
              )}
            </form>

            {/* Category tabs commented out to hide categories from website UI
            {categories.length > 1 && (
              <div className="category-tabs">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`category-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
            */}
          </div>
        </div>

        {/* 3-Column Cards Grid matching requested UI */}
        {loading ? (
          <div className="news-status-msg">Loading blog articles...</div>
        ) : posts.length === 0 ? (
          <div className="news-status-msg">No articles found matching your criteria.</div>
        ) : (
          <div className="news-cards-grid">
            {posts.map((post) => (
              <article
                key={post.id}
                className="article-card"
                onClick={() => handleCardClick(post.slug)}
              >
                {/* Article Image Container */}
                <div className="article-image-wrapper">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>

                {/* Article Info Content */}
                <div className="article-card-body">
                  {/* Date with Calendar Icon */}
                  <div className="article-date-row">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span className="article-date-text">{post.date}</span>
                  </div>

                  {/* Article Title */}
                  <h3 className="article-title">{post.title}</h3>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default NewsGrid;
