import React from 'react';
import '../styles/AboutUKL.css';
import singleCollageImg from '../assets/image copy.png';
import shapeImg from '../assets/h1-shape-1.png';

const AboutUKL = () => {
  return (
    <section className="about-ukl-section">
      {/* Decorative Ribbon Image in Top Right */}
      <div className="purple-swirl-wrapper">
        <img src={shapeImg} alt="Decorative Ribbon Graphic" className="purple-swirl-img" />
      </div>

      <div className="about-ukl-container">
        {/* Left Side: Single Image Container matching 2nd image */}
        <div className="about-ukl-image-column">
          <div className="single-image-wrapper">
            <img
              src={singleCollageImg}
              alt="UKL Membrane Housing End Cap and Assembly"
              className="single-about-img"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="about-ukl-content-column">
          <h2 className="about-ukl-heading">About UKL</h2>

          <p className="about-ukl-paragraph">
            UKL was started in the year 1998 with the sole aim of providing high quality water
            treatment components which were by and large imported from other countries. We
            started with the manufacturing of paddle wheel flow meters and further went on to add
            Multiport valves, Rotameters, Dosing Pumps and Distribution systems for FRP vessels in
            our product portfolio in a very short span of time.
          </p>

          <p className="about-ukl-paragraph">
            In 2006 we started manufacturing FRP membrane housings. With this product range we
            could cater to most of the key component requirements of all our Water Treatment Plant
            manufacturers. Presently we cater to more than 3000 Water Treatment Plant
            manufacturers across the world including major corporates like Thermax Ltd, Ion
            Exchange India Ltd., BGR Energy Ltd., Wipro., BHEL and many others. Over the years, UKL
            has emerged as the most trusted brand for the water treatment plant components with
            the help of our Quality products and Customer Service. UKL's dedicated team of
            Engineers have ensured that there is continuous development in the products to exceed
            the expectations of our customers.
          </p>

          <p className="about-ukl-paragraph">
            We have our manufacturing set up in Chennai with a covered area of about 50000 Sq.Ft
            which is fully equipped with all the state of the art machinery handled by our team of
            highly qualified Engineers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUKL;
