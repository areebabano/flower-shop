import React from 'react';

const SpecialOffersBanner = () => {
  return (
    <div className="special-offers-banner">
      <div className="container">
        {/* Text Section */}
        <p className="offer-text">
          <span className="highlight">Limited Time Offer!</span> Get 20% off on all flower bouquets! 🌸🌼
        </p>

        {/* Button */}
        <a href="/shop" className="shop-button">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default SpecialOffersBanner;
