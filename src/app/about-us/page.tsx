"use client";
import Image from "next/image";
import { IoBusiness } from "react-icons/io5";
import { MdAutoStories, MdEventAvailable } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { TbBrightnessUpFilled } from "react-icons/tb";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Mission Statement */}
      <section className="mission-section">
        <div className="mission-content">
          {/* Left Image */}
          <div className="mission-image">
            <Image
              src="/flora1.png"
              alt="Left Flower"
              width={200}
              height={200}
              className="rounded-image"
            />
          </div>

          {/* Center Text */}
          <div className="mission-text">
            <h2 className="section-title">
              <IoBusiness className="icon" />
              Our Mission
            </h2>
            <p className="section-description">
              At <b><i>Floral Elegance</i></b>, we are committed to providing
              the highest quality floral arrangements for every occasion.
              Whether it&apos;s a wedding, anniversary, or just because, our
              flowers are delivered with love and care.
            </p>
          </div>

          {/* Right Image */}
          <div className="mission-image">
            <Image
              src="/flora1.png"
              alt="Right Flower"
              width={200}
              height={200}
              className="rounded-image"
            />
          </div>
        </div>
      </section>
      {/* Our Story */}
<section className="our-story-section">
  <div className="our-story-container">

    {/* Left Flower Image */}
    <div className="our-story-image">
      <Image
        src="/p1.png"
        alt="Left Flower"
        width={200}
        height={200}
        className="rounded-full object-cover"
      />
    </div>

    {/* Center Text */}
    <div className="our-story-text">
      <h2 className="our-story-title">
        <MdAutoStories className="icon" />
        Our Story
      </h2>
      <p className="our-story-description">
        <b><i>Floral Elegance</i></b> was founded with a passion for flowers and the desire to bring beauty to every home. 
        Our journey began in 2010, and since then, we’ve grown into a trusted name in the floral industry, 
        delivering fresh, vibrant arrangements to customers worldwide.
      </p>
    </div>

    {/* Right Flower Image */}
    <div className="our-story-image">
      <Image
        src="/p1.png"
        alt="Right Flower"
        width={200}
        height={200}
        className="rounded-full object-cover"
      />
    </div>

  </div>
</section>

{/* Products and Services */}
<section className="products-services-section">
  <div className="max-w-5xl mx-auto">
    <h2 className="products-services-title">
      <MdEventAvailable className="icon" />
      Our Products & Services
    </h2>
    <p className="products-services-description">
      Explore our floral offerings designed to make your occasions special. From weddings to birthdays, we have the perfect solution for you.
    </p>
    <div className="products-grid">
      <div className="product-card">
        <h3 className="product-card-title">Custom Floral Arrangements</h3>
        <p className="product-card-description">
          Handcrafted arrangements for all occasions. Our florists work closely with you to create the perfect design.
        </p>
      </div>
      <div className="product-card">
        <h3 className="product-card-title">Flower Subscriptions</h3>
        <p className="product-card-description">
          Beautiful fresh flowers delivered to your door regularly. A perfect gift that keeps giving every month.
        </p>
      </div>
      <div className="product-card">
        <h3 className="product-card-title">Event Floral Design</h3>
        <p className="product-card-description">
          Elegant floral decorations for events, from weddings to corporate parties. We ensure every detail is perfect.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Team Introduction */}
<section className="team-section">
  <div className="max-w-5xl mx-auto">
    <h2 className="team-title">
      <RiTeamFill className="icon" />
      Meet the Floral Elegance Team
    </h2>
    <p className="team-description">
      Our dedicated team is passionate about creating stunning floral arrangements and providing exceptional service.
    </p>
    <div className="team-grid">
      {/* Team Member 1 */}
      <div className="team-card">
        <Image src="/owner.jpg" alt="Areeba Hammad" width={200} height={200} />
        <h3 className="team-card-title">Areeba Hammad</h3>
        <p className="team-card-role">Owner & Lead Florist</p>
        <p className="team-card-description">
          Areeba is the creative visionary behind our floral designs. With a passion for floristry and attention to detail, she ensures every bouquet and arrangement is a masterpiece.
        </p>
      </div>
      {/* Team Member 2 */}
      <div className="team-card">
        <Image src="/customers1.jpeg" alt="John Smith" width={200} height={200} />
        <h3 className="team-card-title">John Smith</h3>
        <p className="team-card-role">Customer Support</p>
        <p className="team-card-description">
          John is the friendly face behind our customer support. Always ready to assist with orders and floral queries, he ensures our customers feel valued and cared for.
        </p>
      </div>
      {/* Team Member 3 */}
      <div className="team-card">
        <Image src="/team.jpg" alt="Emily White" width={200} height={200} />
        <h3 className="team-card-title">Emily White</h3>
        <p className="team-card-role">Event Coordinator</p>
        <p className="team-card-description">
          Emily ensures that every event is perfectly coordinated. Her eye for detail and seamless execution make every occasion unforgettable.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Call to Action */}
<div className="cta-section">
  <div className="container mx-auto px-6">
    <h2 className="cta-title">
      <span className="icon">
        <TbBrightnessUpFilled size={28} />
      </span>
      Brighten Your Day! <span>with Flowers!🌸🌼</span>
    </h2>
    <p className="cta-description">
      Discover stunning floral arrangements for every occasion. From weddings to birthdays, we have the perfect bouquet for you.
    </p>
    <a href="#shop-now" className="cta-button">
      Shop Now
    </a>
  </div>
</div>

{/* Contact Information Section */}
<section className="contact-info-section">
  <p className="contact-info-text">
    If you have any inquiries, <a href="/contact" className="contact-info-link">please reach out to us</a>.
  </p>
</section>

    </div>
  );
};

export default AboutPage;

