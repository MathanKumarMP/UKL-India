import React, { useState, useEffect } from 'react';
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
import buildingFront from '../assets/building-front.png';
import buildingSide from '../assets/building-side.png';
import capCloseup from '../assets/cap-closeup.png';
import endPortHousing from '../assets/end-port-housing.png';
import frpVessels from '../assets/frp-vessels.png';
import aboutUs from '../assets/about us.png';
import { API_BASE } from '../config';

const fallbackPhotoItems = [
  { id: 1, type: 'image', title: 'UKL Instruments Main Manufacturing Complex', images: [g5, buildingFront, buildingSide] },
  { id: 2, type: 'image', title: '8 Inch Side Port Vessel Assembly', images: [g1, g7, frpVessels] },
  { id: 3, type: 'image', title: '4 Inch End Port Membrane Housing', images: [g2, endPortHousing, capCloseup] },
  { id: 4, type: 'image', title: 'ASME Section X Certification Inspection', images: [g6, g4, g8] },
  { id: 5, type: 'image', title: 'Inner Diameter Mirror-Finish Polishing Station', images: [g3, g8, g1] },
  { id: 6, type: 'image', title: 'Quality Assurance Hydro-Testing Station', images: [g4, g6, g2] },
  { id: 7, type: 'image', title: 'Multi-Port RO Membrane Shell Production', images: [g7, g1, frpVessels] },
  { id: 8, type: 'image', title: 'Composite Shell Winding & Curing Division', images: [g8, g3, g5] },
  { id: 9, type: 'image', title: 'Final Export Packaging & Dispatch Unit', images: [g9, aboutUs, g7] },
];

const fallbackVideoItems = [
  { id: 101, type: 'video', title: 'UKL High-Pressure Hydrostatic Testing Process', img: g4, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
  { id: 102, type: 'video', title: 'CNC Filament Winding & Shell Curing Technology', img: g8, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
  { id: 103, type: 'video', title: 'Inner Diameter Mirror-Finish Surface Treatment', img: g3, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
];

const GalleryGrid = () => {
  const [activeTab, setActiveTab] = useState('photo'); // 'photo' or 'video'
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [modalImgIndex, setModalImgIndex] = useState(0);

  const [photoItems, setPhotoItems] = useState([]);
  const [videoItems, setVideoItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Track active image index per card: { [itemId]: number }
  const [cardImageIndices, setCardImageIndices] = useState({});

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/website/gallery`);
        const data = await res.json();
        if (data.success && data.items && data.items.length > 0) {
          const photos = [];
          const videos = [];

          data.items.forEach(item => {
            const fullUrls = item.mediaUrls.map(url => url.startsWith('http') ? url : `${API_BASE}${url}`);
            
            if (item.type === 'video') {
              videos.push({
                id: item._id,
                type: 'video',
                title: item.title || 'Video Clip',
                img: '', // Default placeholder
                videoUrl: fullUrls[0] || '',
                images: fullUrls
              });
            } else {
              photos.push({
                id: item._id,
                type: 'image',
                title: item.title || 'Gallery Image',
                images: fullUrls
              });
            }
          });

          setPhotoItems(photos);
          setVideoItems(videos);
        } else {
          // If no items in DB, load static fallbacks
          setPhotoItems(fallbackPhotoItems);
          setVideoItems(fallbackVideoItems);
        }
      } catch (error) {
        console.error('Failed to fetch gallery items:', error);
        setPhotoItems(fallbackPhotoItems);
        setVideoItems(fallbackVideoItems);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // Helper for Card Arrow Click
  const handleCardPrevImage = (e, item) => {
    e.stopPropagation();
    const total = item.images ? item.images.length : 1;
    const current = cardImageIndices[item.id] || 0;
    const prev = current === 0 ? total - 1 : current - 1;
    setCardImageIndices({ ...cardImageIndices, [item.id]: prev });
  };

  const handleCardNextImage = (e, item) => {
    e.stopPropagation();
    const total = item.images ? item.images.length : 1;
    const current = cardImageIndices[item.id] || 0;
    const next = (current + 1) % total;
    setCardImageIndices({ ...cardImageIndices, [item.id]: next });
  };

  // Open Modal Lightbox
  const handleOpenModal = (item) => {
    setActiveModalItem(item);
    setModalImgIndex(cardImageIndices[item.id] || 0);
  };

  // Modal Arrows Click
  const handleModalPrevImage = (e) => {
    e.stopPropagation();
    if (!activeModalItem || !activeModalItem.images) return;
    const total = activeModalItem.images.length;
    setModalImgIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleModalNextImage = (e) => {
    e.stopPropagation();
    if (!activeModalItem || !activeModalItem.images) return;
    const total = activeModalItem.images.length;
    setModalImgIndex((prev) => (prev + 1) % total);
  };

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

          {/* Media Type Toggle */}
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

        {/* Media Gallery Grid */}
        <div className="gallery-items-grid">
          {loading && currentDisplayItems.length === 0 ? (
            <div style={{ textAlign: 'center', width: '100%', gridColumn: '1 / -1', padding: '40px 0', fontSize: '16px', color: '#64748b' }}>
              Loading media gallery from server...
            </div>
          ) : currentDisplayItems.map((item) => {
            const currentImgIndex = cardImageIndices[item.id] || 0;
            const currentImgSrc = item.images && item.images.length > 0 ? item.images[currentImgIndex] : item.img;
            const isVideo = item.type === 'video';

            return (
              <div key={item.id} className="gallery-photo-card" onClick={() => handleOpenModal(item)}>
                <div className="gallery-img-wrapper">
                  {isVideo ? (
                    <video src={item.videoUrl} className="gallery-photo-img" style={{ height: '240px', width: '100%', objectFit: 'cover' }} preload="metadata" muted />
                  ) : (
                    <img src={currentImgSrc} alt={item.title} className="gallery-photo-img" style={{ height: '240px', objectFit: 'cover' }} />
                  )}

                  {/* Top Right Photo Count Glass Badge */}
                  {item.images && item.images.length > 1 && (
                    <div className="card-photo-count-badge">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <span>{currentImgIndex + 1}/{item.images.length}</span>
                    </div>
                  )}

                  {/* Expand Overlay on Hover */}
                  <div className="gallery-overlay">
                    <div className="gallery-expand-pill">
                      {isVideo ? (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                          <span>Play Video</span>
                        </>
                      ) : (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                          <span>View Fullscreen</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="gallery-card-body">
                  <h3 className="gallery-photo-title">{item.title}</h3>
                </div>
              </div>
            );
          })}
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
              <div className="modal-image-slider-wrapper">
                <img
                  src={activeModalItem.images ? activeModalItem.images[modalImgIndex] : activeModalItem.img}
                  alt={activeModalItem.title}
                  className="gallery-modal-img"
                />

                {/* Arrow Navigation */}
                {activeModalItem.images && activeModalItem.images.length > 1 && (
                  <>
                    <button className="modal-nav-arrow modal-prev" onClick={handleModalPrevImage} aria-label="Previous photo">
                      ‹
                    </button>
                    <button className="modal-nav-arrow modal-next" onClick={handleModalNextImage} aria-label="Next photo">
                      ›
                    </button>

                    <div className="modal-img-counter">
                      {modalImgIndex + 1} / {activeModalItem.images.length}
                    </div>
                  </>
                )}
              </div>
            )}

            <div className="gallery-modal-caption">
              <h3>{activeModalItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
