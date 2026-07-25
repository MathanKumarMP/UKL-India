import React, { useState } from 'react';
import '../styles/GalleryGrid.css';
import g1 from '../assets/Explore1.png';
import g2 from '../assets/Explore2.png';
import g3 from '../assets/Explore3.png';
import g4 from '../assets/Explore4.png';
import g5 from '../assets/buildingnew2.png';
import g6 from '../assets/ASME.jpg';
import g7 from '../assets/grid-item-1.png';
import g8 from '../assets/grid-item-2.png';
import g9 from '../assets/grid-item-3.png';

const GalleryGrid = () => {
  const [activeTab, setActiveTab] = useState('photo'); // 'photo' or 'video'
  const [activeModalItem, setActiveModalItem] = useState(null);

  const photoItems = [
    {
      id: 1,
      type: 'image',
      title: 'UKL Instruments Main Manufacturing Complex',
      img: g5,
      desc: 'State-of-the-art manufacturing plant in Chennai, India for high-pressure FRP membrane housings.',
    },
    {
      id: 2,
      type: 'image',
      title: '8 Inch Side Port Vessel Assembly',
      img: g1,
      desc: 'High-grade composite pressure vessels rated up to 1200 PSI with mirror-finish inner diameter.',
    },
    {
      id: 3,
      type: 'image',
      title: '4 Inch End Port Membrane Housing',
      img: g2,
      desc: 'Precision engineered 4-inch end entry FRP pressure vessels for brackish and seawater RO plants.',
    },
    {
      id: 4,
      type: 'image',
      title: 'ASME Section X Certification Inspection',
      img: g6,
      desc: 'Boiler & Pressure Vessel Code (BPVC) compliance stamp verification for burst pressure safety.',
    },
    {
      id: 5,
      type: 'image',
      title: 'Inner Diameter Mirror-Finish Polishing Station',
      img: g3,
      desc: 'Automated mirror-finish interior surface treatment ensuring smooth membrane loading & unloading.',
    },
    {
      id: 6,
      type: 'image',
      title: 'Quality Assurance Hydro-Testing Station',
      img: g4,
      desc: '100% hydrostatic burst and leak testing performed on every pressure vessel before shipment.',
    },
    {
      id: 7,
      type: 'image',
      title: 'Multi-Port RO Membrane Shell Production',
      img: g7,
      desc: 'Heavy-duty multi-port side entry housing configurations for high-capacity desalination plants.',
    },
    {
      id: 8,
      type: 'image',
      title: 'Composite Shell Winding & Curing Division',
      img: g8,
      desc: 'Advanced CNC filament winding machine applying continuous glass fiber filament reinforced epoxy resin.',
    },
    {
      id: 9,
      type: 'image',
      title: 'Final Export Packaging & Dispatch Unit',
      img: g9,
      desc: 'Export-grade protective wooden crate packing ready for sea freight to global clients.',
    },
  ];

  const videoItems = [
    {
      id: 101,
      type: 'video',
      title: 'UKL High-Pressure Hydrostatic Testing Process',
      img: g4,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      desc: 'Live video demonstration of 100% hydrostatic pressure testing performed at 1.5x design pressure.',
    },
    {
      id: 102,
      type: 'video',
      title: 'CNC Filament Winding & Shell Curing Technology',
      img: g8,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      desc: 'High-precision computer controlled glass fiber filament winding operation inside our Chennai facility.',
    },
    {
      id: 103,
      type: 'video',
      title: 'Inner Diameter Mirror-Finish Surface Treatment',
      img: g3,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      desc: 'Smooth interior surface polishing ensuring easy RO membrane loading and zero abrasion during installation.',
    },
  ];

  const currentDisplayItems = activeTab === 'photo' ? photoItems : videoItems;

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        
        {/* Intro Section Header */}
        <div className="gallery-intro-header">
          <div className="gallery-subtitle">
            <span className="asterisk-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20bf6b" strokeWidth="2.5">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
              </svg>
            </span>
            <span className="subtitle-text">Gallery Showcase</span>
          </div>
          <h2 className="gallery-heading">Our Product & Plant Showcase</h2>
          <p className="gallery-paragraph">
            Explore our manufacturing facility, advanced filament winding machinery, quality testing bays, and high-pressure FRP pressure vessel products.
          </p>

          {/* Media Type 2-Button Toggle: Photo & Video */}
          <div className="gallery-media-tabs">
            <button
              className={`media-tab-btn ${activeTab === 'photo' ? 'active' : ''}`}
              onClick={() => setActiveTab('photo')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              Photo
            </button>

            <button
              className={`media-tab-btn ${activeTab === 'video' ? 'active' : ''}`}
              onClick={() => setActiveTab('video')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
              Video
            </button>
          </div>
        </div>

        {/* 3 Column Media Gallery Grid */}
        <div className="gallery-items-grid">
          {currentDisplayItems.map((item) => (
            <div key={item.id} className="gallery-photo-card" onClick={() => setActiveModalItem(item)}>
              <div className="gallery-img-wrapper">
                <img src={item.img} alt={item.title} className="gallery-photo-img" />
                
                {/* Overlay Zoom / Play Icon */}
                <div className="gallery-overlay">
                  <div className={`gallery-zoom-icon ${item.type === 'video' ? 'video-play-btn' : ''}`}>
                    {item.type === 'video' ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              <div className="gallery-card-body">
                <h3 className="gallery-photo-title">{item.title}</h3>
                <p className="gallery-photo-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Modal */}
      {activeModalItem && (
        <div className="gallery-modal-overlay" onClick={() => setActiveModalItem(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={() => setActiveModalItem(null)} aria-label="Close">
              ✕
            </button>

            {activeModalItem.type === 'video' && activeModalItem.videoUrl ? (
              <video src={activeModalItem.videoUrl} controls autoPlay className="gallery-modal-video" />
            ) : (
              <img src={activeModalItem.img} alt={activeModalItem.title} className="gallery-modal-img" />
            )}

            <div className="gallery-modal-caption">
              <h3>{activeModalItem.title}</h3>
              <p>{activeModalItem.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
