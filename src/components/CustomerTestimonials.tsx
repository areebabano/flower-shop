"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiButterflyFlower } from "react-icons/gi";

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      location: "New York",
      review: "The flower arrangements were absolutely stunning! I got them for my wedding, and they made the day even more special.",
      rating: 5,
      image: "/customer1.jpeg", // Replace with the actual image path
    },
    {
      id: 2,
      name: "John Smith",
      location: "Los Angeles",
      review: "I ordered a bouquet for my mom's birthday, and it arrived fresh and beautifully packaged. Highly recommend this shop!",
      rating: 4,
      image: "/customer2.jpg", // Replace with the actual image path
    },
    {
      id: 3,
      name: "Emily Johnson",
      location: "Chicago",
      review: "Fantastic customer service and quick delivery. The flowers were even more beautiful than I expected!",
      rating: 5,
      image: "/customer3.jpg", // Replace with the actual image path
    },
  ];

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>What Our Customers Say</h2>
        <GiButterflyFlower className="flower-icon" />
      </div>
      <p className="testimonials-subtitle">
        We are committed to making every experience memorable. Hear directly from our happy customers!
      </p>

      <div className="testimonial-card">
        <button onClick={handlePrev} className="prev-btn" aria-label="Previous Testimonial">
          <FaChevronLeft />
        </button>

        <div className="testimonial-content">
          <Image
            src={testimonials[current].image}
            alt={testimonials[current].name}
            height={80}
            width={80}
            className="testimonial-image"
          />
          <h4 className="testimonial-name">{testimonials[current].name}</h4>
          <p className="testimonial-location">{testimonials[current].location}</p>

          <p className="testimonial-review">{testimonials[current].review}</p>

          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={`star ${i < testimonials[current].rating ? "" : "inactive"}`}
              />
            ))}
          </div>
        </div>

        <button onClick={handleNext} className="next-btn" aria-label="Next Testimonial">
          <FaChevronRight />
        </button>
      </div>

      <div className="pagination">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`pagination-dot ${current === index ? "active" : ""}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;
