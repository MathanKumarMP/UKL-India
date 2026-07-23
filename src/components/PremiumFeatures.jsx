import React from 'react';
import '../styles/PremiumFeatures.css';
import vesselHoverBg from '../assets/grid-item-3.png';

const PremiumFeatures = () => {
  const features = [
    {
      num: '01',
      part1: 'Internal diameter is mirror finished for easy, quick loading & unloading of membranes. ',
      part2: 'Quick lock head retention system for easy access to membranes.'
    },
    {
      num: '02',
      part1: 'Head assembly comprises of a single molded seal plate, a unique high quality head seal ',
      part2: 'and an aluminum alloy bearing plate which prevents rolling.'
    },
    {
      num: '03',
      part1: '8″ housings are available from 1 element long to 7 element long for all the pressure ratings ',
      part2: 'from 300psi to 1200 psi in both end port and multiport configurations.'
    },
    {
      num: '04',
      part1: 'For 8″ housings multiport options are available with 1.5″, 2″, 2.5″, 3″ and 4″ diameter IPS grooved ',
      part2: 'feed/ concentrate ports for inter connecting the vessels.'
    },
    {
      num: '05',
      part1: '4″ housings are available from 1 element to 6 element long for all pressure rating from 300 psi to 1200 psi ',
      part2: 'in end port and multiport configurations with 1″ port size for side entry designs.'
    },
    {
      num: '06',
      part1: 'Our side entry models have the unique design feature of flat seating surfaces in the circular membrane housing. ',
      part2: 'This ensures excellent sealing of the side ports which have a threaded metallic sleeve and a nut.'
    }
  ];

  return (
    <section className="premium-features-section">
      {/* City Skyline Silhouette & Organic Green Polygon Backdrop on Right Edge */}
      <div className="city-backdrop"></div>
      <div className="green-wave-bg"></div>

      <div className="premium-features-container">
        <h2 className="premium-title">Our Premium Features</h2>

        <div className="premium-features-grid">
          {features.map((item, idx) => (
            <div key={item.num} className="premium-item-card">
              {/* Background vessel image revealed on hover */}
              <div
                className="hover-vessel-bg"
                style={{ backgroundImage: `url(${vesselHoverBg})` }}
              ></div>

              {/* Number and Text Content */}
              <div className="card-inner-content">
                <span className="item-number">{item.num}</span>
                <p className="item-text">
                  <span className="text-green">{item.part1}</span>
                  <span className="text-blue">{item.part2}</span>
                </p>
              </div>

              {/* Bottom Divider Accent Bar */}
              <div className="bottom-accent-bar"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
