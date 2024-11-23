"use client"
import { FaEnvelope, FaFacebook, FaInstagram, FaPinterest, FaShareAlt, FaSpinner, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import Image from 'next/image';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Cast `name` as a key of `formErrors` to avoid the TypeScript error
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  
    // Clear errors when the user starts typing again
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name as keyof typeof formErrors]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const errors = { name: '', email: '', message: '' };
    let isValid = true;

    // Name validation
    if (!formData.name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    // Message validation
    if (!formData.message) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate form submission (replace with actual API request)
    setTimeout(() => {
      setFormSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    }, 2000);
  };

  return (
    <div className="contact-container">
    {/* Contact Header Section with images */}
    <section className="contact-header">
      <div className="header-content">
        <div className="image-section">
          <div className="header-image">
            <Image
              src="/flower1.jpg"
              alt="Flower Left"
              height={200}
              width={200}
              layout="intrinsic"
            />
          </div>
          <div className="text-center">
            <h1>
              <span className="highlight">&#9733;</span> Get In Touch
            </h1>
            <p>We would love to hear from you! For any inquiries, collaborations, or feedback, feel free to reach out.</p>
          </div>
          <div className="header-image">
            <Image
              src="/flower1.jpg"
              alt="Flower Right"
              height={210}
              width={210}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="contact-info-container">
  <div className="contact-info-content">
    <div className="contact-info-image">
      <Image
        src="/f1R.jpg"
        alt="Flower Left"
        height={220}
        width={220}
      />
    </div>

    <div className="contact-info-text">
      <h3 className="contact-info-title">
        <MdPhone className="inline-block mr-2 text-pink-700" /> Contact Information
      </h3>
      <p className="contact-info-paragraph">Reach out to us through any of these channels:</p>
      <div className="contact-info-details">
        <div className="contact-info-item">
          <MdEmail size={26} className="text-yellow-600" />
          <a href="mailto:contact@floralelegance.com" className="contact-info-link">contact@floralelegance.com</a>
        </div>
        <div className="contact-info-item">
          <MdPhone size={26} className="text-gray-600" />
          <a href="tel:+123456789" className="contact-info-link">+1 234 567 89</a>
        </div>
        <div className="contact-info-item">
          <HiLocationMarker size={26} className="text-green-600" />
          <span className="contact-info-link">123 Blossom St, Floral City</span>
        </div>
      </div>
    </div>

    <div className="contact-info-image">
      <Image
        src="/f1R.jpg"
        alt="Flower Right"
        height={220}
        width={220}
      />
    </div>
  </div>
</section>

{/* Follow Us - Centered with images */}
<section className="contact-info-container">
  <div className="contact-info-content">
    <div className="contact-info-image">
      <Image
        src="/c6.jpg"
        alt="Flower Left"
        height={220}
        width={220}
      />
    </div>

    <div className="contact-info-text">
      <h3 className="contact-info-title">
        <FaShareAlt className="inline-block mr-2 text-pink-700" /> Connect With Us
      </h3>
      <p className="contact-info-paragraph">
        Join us on our social media channels to stay updated with the latest news, offers, and inspirations from Floral Elegance. We’re excited to connect and share with you!
      </p>
      <div className="contact-info-social">
        <a href="https://www.facebook.com/floralelegance" target="_blank" className="contact-info-link">
          <FaFacebook size={36} className="text-blue-600" />
        </a>
        <a href="https://www.instagram.com/floralelegance" target="_blank" className="contact-info-link">
          <FaInstagram size={36} className="text-pink-500" />
        </a>
        <a href="https://www.twitter.com/floralelegance" target="_blank" className="contact-info-link">
          <FaTwitter size={36} className="text-blue-200" />
        </a>
        <a href="https://www.pinterest.com/floralelegance" target="_blank" className="contact-info-link">
          <FaPinterest size={36} className="text-red-500" />
        </a>
      </div>
    </div>

    <div className="contact-info-image">
      <Image
        src="/c6.jpg"
        alt="Flower Right"
        height={220}
        width={220}
      />
    </div>
  </div>
</section>

{/* Contact Form */}
<section className="contact-form-container">
  {/* Heading with Icon */}
  <h3 className="contact-form-title">
    <FaEnvelope className="contact-form-icon" /> Contact Us
  </h3>

  {/* Small Paragraph */}
  <p className="contact-form-description">
    We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, please feel free to reach out. Fill in the form below to send us a message, and we’ll respond as soon as possible.
  </p>

  {/* Contact Form */}
  <form onSubmit={handleSubmit} className="contact-form">
    {/* Name Field */}
    <div className="contact-form-field">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your Name"
        className="contact-form-input"
      />
      {formErrors.name && <p className="contact-form-error">{formErrors.name}</p>}
    </div>

    {/* Email Field */}
    <div className="contact-form-field">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Your Email"
        className="contact-form-input"
      />
      {formErrors.email && <p className="contact-form-error">{formErrors.email}</p>}
    </div>

    {/* Subject Field */}
    <div className="contact-form-field">
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleInputChange}
        placeholder="Subject"
        className="contact-form-input"
      />
    </div>

    {/* Message Field */}
    <div className="contact-form-field">
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Your Message"
        className="contact-form-textarea"
      ></textarea>
      {formErrors.message && <p className="contact-form-error">{formErrors.message}</p>}
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className={`contact-form-submit ${isLoading ? 'disabled' : ''}`}
      disabled={isLoading}
    >
      {isLoading ? (
        <FaSpinner className="animate-spin mx-auto" size={24} />
      ) : (
        'Send Message'
      )}
    </button>
  </form>

  {/* Success/Failure Message */}
  {formSubmitted && !isLoading && (
    <p className="contact-form-success">Thank you for your message! We will get back to you shortly.</p>
  )}
</section>


  </div>
  
  );
};

export default ContactPage;
