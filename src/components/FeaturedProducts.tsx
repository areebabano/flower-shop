"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GiButterflyFlower } from 'react-icons/gi';

const flowers = [
  { id: 1, name: 'Red Roses', image: '/red f1.jpg', price: '$25', description: 'A bouquet of fresh red roses for any occasion.' },
  { id: 2, name: 'Tulips', image: '/tulips f1.jpg', price: '$30', description: 'A vibrant bouquet of colorful tulips.' },
  { id: 3, name: 'Lilies', image: '/lilies f1.jpg', price: '$35', description: 'Elegant white lilies for a graceful touch.' },
  { id: 4, name: 'Daisies', image: '/daisies f1.jpg', price: '$20', description: 'Cheerful daisies that brighten up any room.' },
];

const FeaturedProducts = () => {
  const [selectedFlower, setSelectedFlower] = useState<string | null>(null);

  const handleBuyNow = (flowerName: string) => {
    setSelectedFlower(flowerName); // Show the message
  };

  useEffect(() => {
    if (selectedFlower) {
      const timer = setTimeout(() => {
        setSelectedFlower(null); // Hide the message after 3 seconds
      }, 3000);

      // Cleanup the timer if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [selectedFlower]);

  return (
    <section className="featured-products-section">
      <div className="featured-products-container">
        <h2 className="featured-products-title">
          Featured Products
          <GiButterflyFlower className="featured-icon" />
        </h2>
        <p className="featured-products-description">
          Discover our collection of beautiful, fresh flowers perfect for any occasion. From romantic roses to vibrant tulips, find the perfect bouquet to brighten up your space.
        </p>
        <div className="featured-products-grid">
          {flowers.map((flower) => (
            <div key={flower.id} className="featured-card">
              <Image
                src={flower.image}
                alt={flower.name}
                width={400}
                height={250}
                className="featured-image"
              />
              <div className="featured-card-content">
                <h3 className="featured-card-title">{flower.name}</h3>
                <p className="featured-card-description">{flower.description}</p>
                <div className="featured-card-footer">
                  <span className="featured-card-price">{flower.price}</span>
                  <button
                    onClick={() => handleBuyNow(flower.name)}
                    className="featured-card-button"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedFlower && (
          <p className="purchase-message">
            Thank you for purchasing <span>{selectedFlower}</span>! We hope you are satisfied.
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
