import React from 'react';
import '../styles/PremiumFeatures.css';

const PremiumFeatures = () => {
  return (
    <section className="premium-features-section">
      {/* City Skyline Silhouette & Organic Green Polygon Backdrop on Right Edge */}
      <div className="city-backdrop"></div>
      <div className="green-wave-bg"></div>

      <div className="premium-features-container">
        <h2 className="premium-title">Our Premium Features</h2>

        <div className="premium-features-grid">
          {/* Row 1 */}
          <div className="premium-row">
            <div className="premium-item">
              <span className="item-number">01</span>
              <p className="item-text">
                Internal diameter is mirror finished for easy, quick loading & unloading of membranes. Quick lock head retention system for easy access to membranes.
              </p>
            </div>
            <div className="premium-item">
              <span className="item-number">02</span>
              <p className="item-text">
                Head assembly comprises of a single molded seal plate, a unique high quality head seal and an aluminum alloy bearing plate which prevents rolling.
              </p>
            </div>
          </div>
          <div className="row-divider"></div>

          {/* Row 2 */}
          <div className="premium-row">
            <div className="premium-item">
              <span className="item-number">03</span>
              <p className="item-text">
                8″ housings are available from 1 element long to 7 element long for all the pressure ratings from 300psi to 1200 psi in both end port and multiport configurations.
              </p>
            </div>
            <div className="premium-item">
              <span className="item-number">04</span>
              <p className="item-text">
                For 8″ housings multiport options are available with 1.5″, 2″, 2.5″, 3″ and 4″ diameter IPS grooved feed/ concentrate ports for inter connecting the vessels.
              </p>
            </div>
          </div>
          <div className="row-divider"></div>

          {/* Row 3 */}
          <div className="premium-row">
            <div className="premium-item">
              <span className="item-number">05</span>
              <p className="item-text">
                4″ housings are available from 1 element to 6 element long for all pressure rating from 300 psi to 1200 psi in end port and multiport configurations with 1″ port size for side entry designs.
              </p>
            </div>
            <div className="premium-item">
              <span className="item-number">06</span>
              <p className="item-text">
                Our side entry models have the unique design feature of flat seating surfaces in the circular membrane housing. This ensures excellent sealing of the side ports which have a threaded metallic sleeve and a nut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
