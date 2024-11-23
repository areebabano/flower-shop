"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { FaEye, FaHeart, FaTimes, FaRegHeart, FaFilter, FaSort } from 'react-icons/fa';
import { GiButterflyFlower } from 'react-icons/gi';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
}

const FlowerShopSection: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());
  const [cartMessage, setCartMessage] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('default');
  const [filterBy, setFilterBy] = useState<string>('all');
  const [discountCode, setDiscountCode] = useState<string>('');
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const products: Product[] = [
    { id: 1, name: 'Red Roses', description: 'Perfect for special occasions', price: 20, image: '/redrose1.jpg', badge: 'Best Seller' },
    { id: 2, name: 'White Lilies', description: 'Elegant and timeless', price: 30, image: '/whitelilies.jpg', badge: 'New Arrival' },
    { id: 3, name: 'Tulips Bouquet', description: 'Brighten up your day', price: 25, image: '/tulipsbouqet.jpg', badge: 'Discount' },
    { id: 4, name: 'Sunflowers', description: 'Bring cheer to any space', price: 15, image: '/sunflowers.jpg' },
    { id: 5, name: 'Orchids', description: 'Sophisticated and graceful', price: 40, image: '/orchids.jpg', badge: 'New Arrival' },
    { id: 6, name: 'Daisies', description: 'Perfect for summer days', price: 10, image: '/daisies.jpg' },
    { id: 7, name: 'Lavender', description: 'Calming and soothing fragrance', price: 18, image: '/lavender.jpg' },
    { id: 8, name: 'Peonies', description: 'Romantic and lush', price: 35, image: '/peonies.jpg', badge: 'Best Seller' },
    { id: 9, name: 'Magnolias', description: 'Graceful and fragrant', price: 50, image: '/magnolias.jpg' },
    { id: 10, name: 'Carnations', description: 'Classic and colorful', price: 12, image: '/carnations.jpg' },
    { id: 11, name: 'Gerberas', description: 'Vibrant and cheerful', price: 22, image: '/gerbera.jpg' },
    { id: 12, name: 'Calla Lilies', description: 'Elegant and exotic', price: 28, image: '/callalily.jpg' },
    { id: 13, name: 'Violets', description: 'Delicate and charming', price: 16, image: '/violets.jpg' },
    { id: 14, name: 'Gardenias', description: 'Sweet-scented and stunning', price: 45, image: '/gardenias.jpg', badge: 'New Arrival' },
    { id: 15, name: 'Chrysanthemums', description: 'Bold and vibrant colors', price: 20, image: '/Chrysanthemums.jpg' },
    { id: 16, name: 'Lillies of the Valley', description: 'Graceful and fragrant', price: 38, image: '/lilies of the valley.jpg' },
    { id: 17, name: 'Freesia', description: 'Beautiful and fragrant', price: 17, image: '/freesia.jpg' },
    { id: 18, name: 'Zinnias', description: 'Bright and cheerful', price: 13, image: '/zennias.jpg' },
    { id: 19, name: 'Camellias', description: 'Soft and romantic', price: 23, image: '/camellia.jpg' },
    { id: 20, name: 'Begonias', description: 'Colorful and long-lasting', price: 18, image: '/begonias.jpg' },
  ];

  console.log(addedToCart);

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setAddedToCart(false);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    setCartMessage(null);
  };

  const sortProducts = (products: Product[], sortBy: string) => {
    switch (sortBy) {
      case 'price':
        return products.sort((a, b) => a.price - b.price);
      case 'popularity':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case 'newest':
        return products.reverse();
      default:
        return products;
    }
  };

  const filterProducts = (products: Product[], filterBy: string) => {
    if (filterBy === 'all') return products;
    return products.filter(product => product.badge?.toLowerCase() === filterBy.toLowerCase());
  };

  const filteredAndSortedProducts = sortProducts(filterProducts(products, filterBy), sortBy);

  const toggleLike = (productId: number) => {
    setLikedProducts((prevLiked) => {
      const newLiked = new Set(prevLiked);
      if (newLiked.has(productId)) {
        newLiked.delete(productId);
      } else {
        newLiked.add(productId);
      }
      return newLiked;
    });
  };

  const handleAddToCart = () => {
    setCartMessage("Product added to cart!");
    setAddedToCart(true);
    setTimeout(() => setCartMessage(null), 3000);
  };

  const applyDiscount = () => {
    if (discountCode === "SAVE10") {
      setDiscountAmount(10);
    } else if (discountCode === "SAVE20") {
      setDiscountAmount(20);
    } else {
      setDiscountAmount(0);
      alert("Invalid discount code!");
    }
  };

  return (
    <div className="flower-shop-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <Image 
            src="/hero.jpg" 
            alt="Flowers" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-md"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome To
            <span className="hero-title-accent">
              <GiButterflyFlower className="butterfly-icon" size={50} /> 
              𝕱𝖑𝖔𝖗𝖆𝖑 𝕰𝖑𝖊𝖌𝖆𝖓𝖈𝖊 
              <GiButterflyFlower className="butterfly-icon" size={50} />
            </span>
          </h1>
        </div>
      </section>

      {/* Filters and Sort Section */}
      <section className="filters-section">
        <div className="filter-container">
          <FaFilter className="filter-icon" size={20} />
          <span className="filter-label">Filter by:</span>
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="filter-select"
          >
            <option value="all">All</option>
            <option value="Best Seller">Best Seller</option>
            <option value="New Arrival">New Arrival</option>
            <option value="Discount">Discount</option>
          </select>
        </div>

        <div className="sort-container">
          <FaSort className="sort-icon" size={20} />
          <span className="sort-label">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="default">Default</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </section>

      {/* Discount Code Section */}
      <section className="discount-section">
        <div className="discount-content">
          <p className="discount-title">
            <span className="discount-highlight">Special Offer!</span> Get up to 20% off on your first order!🌸🌼
          </p>
          <div className="discount-input-container">
            <input
              type="text"
              placeholder="Enter discount code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="discount-input"
            />
            <button
              onClick={applyDiscount}
              className="discount-button"
            >
              Apply Discount 
            </button>
          </div>
          {discountAmount > 0 && (
            <div className="discount-applied">
              Discount Applied: {discountAmount}% off
            </div>
          )}
        </div>
      </section>
        
      {/* Products Section */}
<section className="products-section">
  {filteredAndSortedProducts.map((product) => (
    <div key={product.id} className="product-card">
      {product.badge && (
        <span className="product-badge">{product.badge}</span>
      )}
      <Image
        src={product.image}
        alt={product.name}
        height={150}
        width={150}
        className="product-image"
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <div className="product-actions">
        <div
          onClick={() => handleQuickView(product)}
          className="action-quick-view"
        >
          <FaEye size={20} />
        </div>
        <div
          onClick={() => toggleLike(product.id)}
          className="action-like"
        >
          {likedProducts.has(product.id) ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
        </div>
      </div>
    </div>
  ))}
</section>

{/* Quick View Modal */}
{quickViewProduct && (
  <div className="quick-view-modal">
    <div className="quick-view-content">
      <button
        onClick={closeQuickView}
        className="quick-view-close"
      >
        <FaTimes size={20} />
      </button>
      <h2 className="quick-view-title">{quickViewProduct.name}</h2>
      <Image
        src={quickViewProduct.image}
        alt={quickViewProduct.name}
        height={100}
        width={100}
        className="quick-view-image"
      />
      <p className="quick-view-description">{quickViewProduct.description}</p>
      <p className="quick-view-price">${quickViewProduct.price}</p>
      <div className="quick-view-actions">
        <button
          onClick={handleAddToCart}
          className="quick-view-cart-button"
        >
          Add to Cart 
        </button>
        <button
          onClick={() => toggleLike(quickViewProduct.id)}
          className="quick-view-like-button"
        >
          {likedProducts.has(quickViewProduct.id) ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
        </button>
      </div>
      {/* Cart Notification */}
{cartMessage && (
  <div className="cart-notification">
    {cartMessage}
  </div>
)}
    </div>
  </div>
)}



    </div>
  );
};

export default FlowerShopSection;

