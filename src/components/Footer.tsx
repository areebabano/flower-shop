"use client";
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPinterest } from 'react-icons/fa';
import { PiFlowerLotusLight } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand and Social Media Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            <PiFlowerLotusLight className="footer-icon" />
            𝕱𝖑𝖔𝖗𝖆𝖑 𝕰𝖑𝖊𝖌𝖆𝖓𝖈𝖊
          </h2>
          <p className="footer-description">
            Where elegance meets nature. Bringing stunning floral arrangements to your doorstep with love and care.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterest />
            </a>
            <a href="mailto:info@floralelegance.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-section">
          <h4>Customer Support</h4>
          <ul>
            <li><a href="#delivery">Delivery & Payment</a></li>
            <li><a href="#help">Help & Support</a></li>
            <li><a href="#services">24/7 Services</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>+123 456 789</p>
          <p>info@floralelegance.com</p>
          <p>789 Spring Lane, Roseville, CA 98765</p>
          <p>United States</p>
          <p>Open: 10:00 - 19:00</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <b>Floral Elegance</b>. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
