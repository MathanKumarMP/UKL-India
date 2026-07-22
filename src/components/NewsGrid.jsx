import React, { useState } from 'react';
import '../styles/NewsGrid.css';
import post2Img from '../assets/Explore4.png';
import post3Img from '../assets/Explore1.png';

const NewsGrid = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    {
      id: 1,
      title: 'स्थानीय रास्ते और दिलचस्प chicken road की कहानियां, पर्यटकों के लिए ज़रूरी जानकारी',
      image: null,
      author: 'ukloceansoftwars',
      comments: 'No Comments',
      date: '22 Jul/26',
      excerpt:
        'स्थानीय रास्ते और दिलचस्प chicken road की कहानियां, पर्यटकों के लिए ज़रूरी जानकारी स्थानीय रास्ते और चिकन रोड का इतिहास चिकन रोड की प्राकृतिक सुंदरता और वन्यजीव वन्यजीव संरक्षण के प्रयास चिकन रोड पर यात्रा के लिए सुझाव सुरक्षा सावधानियां चिकन रोड के आसपास के आकर्षण चिकन रोड का भविष्य...'
    },
    {
      id: 2,
      title: 'Choosing the Right UKL Membrane Housing for Residential and Industrial RO Systems',
      image: post2Img,
      author: 'ukloceansoftwars',
      comments: '3 Comments',
      date: '26 Apr/24',
      excerpt:
        'We have over 100 professional software engineers with over 10 years of experience in providing superior software engineers. Engineers will meet multiple professions with high expertise.'
    },
    {
      id: 3,
      title: 'End Entry vs Side Entry UKL Membrane Housings: Applications and Pressure Ratings Explained"',
      image: post3Img,
      author: 'ukloceansoftwars',
      comments: '3 Comments',
      date: '26 Apr/24',
      excerpt:
        'We have over 100 professional software engineers with over 10 years of experience in providing superior software engineers. Engineers will meet multiple professions with high expertise.'
    }
  ];

  return (
    <section className="news-grid-section">
      <div className="news-grid-container">
        
        {/* Left Column: Blog Post Cards Stack */}
        <div className="news-main-column">
          {posts.map((post) => (
            <article key={post.id} className="news-post-card">
              {/* Optional Post Featured Image */}
              {post.image && (
                <div className="post-image-wrapper">
                  <img src={post.image} alt={post.title} />
                </div>
              )}

              <div className="post-content-wrapper">
                {/* Post Title */}
                <h2 className="post-title">{post.title}</h2>

                {/* Unified Light-Green/Gray Meta Pill Container */}
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
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    {post.comments}
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
                </div>

                {/* Excerpt Paragraph */}
                <p className="post-excerpt">{post.excerpt}</p>

                {/* Read More Button with Circle Arrow */}
                <button className="news-read-more-btn">
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
          ))}
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
            <div className="category-pill-box">
              <span className="category-name">UKL Membrane</span>
              <span className="category-count">03</span>
            </div>
          </div>

          {/* Widget 3: Recent Posts */}
          <div className="sidebar-widget">
            <div className="widget-header">
              <span className="widget-line"></span>
              <h3 className="widget-title">Recent Posts</h3>
            </div>

            <div className="recent-posts-list">
              {/* Recent Item 1 */}
              <div className="recent-item-card">
                <h4 className="recent-title">
                  स्थानीय रास्ते और दिलचस्प chicken road की कहानियां, पर्यटकों के लिए ज़रूरी जानकारी
                </h4>
                <div className="recent-mini-pill">
                  <span>👤 22 Jul/26</span>
                  <span>💬 No Comments</span>
                </div>
              </div>

              {/* Recent Item 2 */}
              <div className="recent-item-card horizontal">
                <div className="recent-thumb">
                  <img src={post2Img} alt="Choosing the Right UKL Membrane Housing" />
                </div>
                <div className="recent-content">
                  <h4 className="recent-title">
                    Choosing the Right UKL Membrane Housing for Residential and Industrial RO Systems
                  </h4>
                  <div className="recent-mini-pill">
                    <span>👤 26 Apr/24</span>
                    <span>💬 3 Comments</span>
                  </div>
                </div>
              </div>

              {/* Recent Item 3 */}
              <div className="recent-item-card horizontal">
                <div className="recent-thumb">
                  <img src={post3Img} alt="End Entry vs Side Entry UKL Membrane Housings" />
                </div>
                <div className="recent-content">
                  <h4 className="recent-title">
                    End Entry vs Side Entry UKL Membrane Housings: Applications and Pressure Ratings Explained"
                  </h4>
                  <div className="recent-mini-pill">
                    <span>👤 26 Apr/24</span>
                    <span>💬 3 Comments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
};

export default NewsGrid;
