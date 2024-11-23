"use client";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaRegHeart, FaStore } from "react-icons/fa";
import { LuShoppingBasket } from "react-icons/lu";
import { PiFlowerLotusLight } from "react-icons/pi";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <PiFlowerLotusLight className="logo-icon" size={40} />
          <Link href="/">𝕱𝖑𝖔𝖗𝖆𝖑 𝕰𝖑𝖊𝖌𝖆𝖓𝖈𝖊</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="hamburger-menu" onClick={toggleNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hamburger-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <Link href="/" className="nav-link">
                <FaHome className="nav-icon" size={20} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/shop" className="nav-link">
                <FaStore className="nav-icon" size={20} />
                <span>Shop</span>
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="nav-link">
                <FaInfoCircle className="nav-icon" size={20} />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                <FaPhoneAlt className="nav-icon" size={20} />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Sidebar */}
        <div className={`mobile-sidebar ${isNavOpen ? "open" : ""}`}>
          <button className="close-button" onClick={toggleNav}>
            X
          </button>
          <ul className="mobile-links">
            <li>
              <Link href="/" onClick={closeNav} className="nav-link">
                <FaHome className="nav-icon" size={24} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/shop" onClick={closeNav} className="nav-link">
                <FaStore className="nav-icon" size={24} />
                <span>Shop</span>
              </Link>
            </li>
            <li>
              <Link href="/about-us" onClick={closeNav} className="nav-link">
                <FaInfoCircle className="nav-icon" size={24} />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeNav} className="nav-link">
                <FaPhoneAlt className="nav-icon" size={24} />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons (Desktop Only) */}
        <div className="social-icons">
          <AiOutlineUser className="icon" size={30} />
          <FaRegHeart className="icon" size={30} />
          <LuShoppingBasket className="icon" size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
