import React, { useState, useEffect } from 'react';
import '../styles/NewsGrid.css';
import post2Img from '../assets/DSC_9645.JPG';
import post3Img from '../assets/DSC_9640.JPG';
import { API_BASE } from '../config';

const fallbackPosts = [
  {
    id: '2',
    title: 'Choosing the Right UKL Membrane Housing for Residential and Industrial RO Systems',
    image: post2Img,
    author: 'ukloceansoftwars',
    comments: '3 Comments',
    date: '26 Apr/24',
    excerpt: 'We have over 100 professional software engineers with over 10 years of experience in providing superior software engineers. Engineers will meet multiple professions with high expertise.',
    details: 'Selecting the appropriate membrane housing requires looking at operating pressure, feed water salinity, and end plug security. UKL offers premium FRP housings tailored for both commercial brackish water and heavy industrial desalination environments.',
    category: 'Technical Guide',
    slug: 'choosing-the-right-ukl-membrane-housing'
  },
  {
    id: '3',
    title: 'End Entry vs Side Entry UKL Membrane Housings: Applications and Pressure Ratings Explained',
    image: post3Img,
    author: 'ukloceansoftwars',
    comments: '3 Comments',
    date: '26 Apr/24',
    excerpt: 'We have over 100 professional software engineers with over 10 years of experience in providing superior software engineers. Engineers will meet multiple professions with high expertise.',
    details: 'End-entry membrane housings are ideal for small to medium RO units, whereas side-entry systems support complex manifold links in large industrial reverse osmosis trains. Understanding the application helps define proper pressure ratings.',
    category: 'Technical Guide',
    slug: 'end-entry-vs-side-entry-ukl-membrane-housings'
  }
];

const NewsGrid = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/website/news`);
        const data = await res.json();
        if (data.success && data.articles && data.articles.length > 0) {
          const mapped = data.articles.map(item => ({
            id: item._id,
            title: item.title,
            image: item.thumbnail ? (item.thumbnail.startsWith('http') ? item.thumbnail : `${API_BASE}${item.thumbnail}`) : post2Img,
            author: item.author || 'UKL Team',
            comments: '0 Comments',
            date: new Date(item.blogDate).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            }),
            excerpt: item.shortDescription || '',
            details: item.blogDetails || '',
            category: item.category || 'Company News',
            slug: item.slug
          }));
          setPosts(mapped);
        } else {
          setPosts(fallbackPosts);
        }
      } catch (error) {
        console.error('Failed to load news articles:', error);
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  // Filter posts based on search input
  const filteredPosts = posts.filter(post =>
    (post.title && post.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (post.category && post.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Group and count categories dynamically
  const categoriesList = {};
  posts.forEach(post => {
    const cat = post.category || 'General';
    categoriesList[cat] = (categoriesList[cat] || 0) + 1;
  });

  // Get recent 3 posts
  const recentPosts = [...posts].slice(0, 3);

  const handleReadMore = (post) => {
    // Navigate using custom hash router trigger
    window.location.hash = `#news-detail-${post.slug}`;
  };

  return (
    <section className="news-grid-section">
      <div className="news-grid-container">
        
        {/* Left Column: Blog Post Cards Stack */}
        <div className="news-main-column">
          {loading && posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#64748b', fontSize: '16px' }}>
              Loading blog articles from server...
            </div>
          ) : filteredPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#64748b', fontSize: '16px' }}>
              No articles match your search query.
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article key={post.id} className="news-post-card">
                {/* Featured Image */}
                {post.image && (
                  <div className="post-image-wrapper">
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '340px', objectFit: 'cover' }} />
                  </div>
                )}

                <div className="post-content-wrapper">
                  <h2 className="post-title">{post.title}</h2>

                  {/* Meta Pills */}
                  <div className="unified-meta-pill">
                    <span className="meta-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      by {post.author}
                    </span>

                    <span className="meta-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {post.date}
                    </span>

                    <span className="meta-item">
                      <span style={{ fontSize: '11px', background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>
                        {post.category}
                      </span>
                    </span>
                  </div>

                  {/* Excerpt Paragraph */}
                  <p className="post-excerpt">{post.excerpt}</p>

                  {/* Read More Button with Circle Arrow */}
                  <button className="news-read-more-btn" onClick={() => handleReadMore(post)}>
                    <span>Read More</span>
                    <span className="arrow-circle-btn">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </span>
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Right Column: Sidebar Widgets */}
        <aside className="news-sidebar">
          {/* Widget 1: Search */}
          <div className="sidebar-widget">
            <div className="widget-header">
              <span className="widget-line"></span>
              <h3 className="widget-title">Search</h3>
            </div>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn" aria-label="Search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </div>

          {/* Widget 2: Categories */}
          <div className="sidebar-widget">
            <div className="widget-header">
              <span className="widget-line"></span>
              <h3 className="widget-title">Categories</h3>
            </div>
            {Object.keys(categoriesList).map((catName, index) => (
              <div 
                key={index} 
                className="category-pill-box" 
                onClick={() => setSearchQuery(catName)}
                style={{ cursor: 'pointer', marginBottom: '8px' }}
              >
                <span className="category-name">{catName}</span>
                <span className="category-count">{String(categoriesList[catName]).padStart(2, '0')}</span>
              </div>
            ))}
          </div>

          {/* Widget 3: Recent Posts */}
          <div className="sidebar-widget">
            <div className="widget-header">
              <span className="widget-line"></span>
              <h3 className="widget-title">Recent Posts</h3>
            </div>

            <div className="recent-posts-list">
              {recentPosts.map((post) => (
                <div key={post.id} className="recent-item-card horizontal" style={{ cursor: 'pointer' }} onClick={() => handleReadMore(post)}>
                  <div className="recent-thumb">
                    <img src={post.image} alt={post.title} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                  </div>
                  <div className="recent-content">
                    <h4 className="recent-title" style={{ fontSize: '13px', fontWeight: 700, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {post.title}
                    </h4>
                    <div className="recent-mini-pill" style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
                      <span>👤 {post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
};

export default NewsGrid;
