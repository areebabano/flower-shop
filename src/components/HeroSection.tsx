"use client";
import Image from 'next/image';
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left side (Text) */}
        <div className="hero-text">
          <h1 className="hero-title">
            Premium Floral Arrangements for Every Occasion
          </h1>
          <p className="hero-description">
            At 𝕱𝖑𝖔𝖗𝖆𝖑 𝕰𝖑𝖊𝖌𝖆𝖓𝖈𝖊, we take pride in offering the finest selection of handpicked flowers, expertly arranged to suit every special moment. Whether you&apos;re celebrating a wedding, birthday, anniversary, or just want to brighten someone&apos;s day, our flowers are carefully sourced and delivered fresh to your doorstep. Trust us to bring nature&apos;s beauty to your life with elegance and sophistication.
          </p>
          <a href="/shop" className="hero-button">
            Explore Now
          </a>
        </div>

        {/* Right side (Image) */}
        <div className="hero-image-container">
          <Image 
            src="/hero.png" 
            alt="Hero Image" 
            width={400} 
            height={400} 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
