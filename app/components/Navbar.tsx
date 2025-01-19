"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../Styles/header.css";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <header className="header">
      <div className="logo"> <img />
        <p>FRESH FIELDS</p>
      </div>
      <button
        className="hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <Link href="/">Shop</Link>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link href="/products/Oil">Oil</Link>
                </li>
                <li>
                  <Link href="/products/Meat">Meat</Link>
                </li>
                <li>
                  <Link href="/products/Fish">Fish</Link>
                </li>
                <li>
                  <Link href="/products/cereals">Cereals</Link>
                </li>
                <li>
                  <Link href="/products/Fruit">Fruits</Link>
                </li>
                <li>
                  <Link href="/products/Vegetable">Vegetables</Link>
                </li>
                <li>
                  <Link href="/products/Spices">Spices</Link>
                </li>
                <li>
                  <Link href="/products/Tuber">Tuber</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setPagesDropdownOpen(true)}
            onMouseLeave={() => setPagesDropdownOpen(false)}
            onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
          >
            <Link href="/">Pages</Link>
            {pagesDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link href="/pages/Wishlist">My Wishlist</Link>
                </li>
                <li>
                  <Link href="">Shopping Cart</Link>
                </li>
                <li>
                  <Link href="#contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/pages/Terms">Terms & Conditions</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className="header-icons">
        <div><Link href="/pages/signIn" >Sign Up</Link></div>
        <label htmlFor="email">Search</label>
        <input type="" id="email" name="email" placeholder="Enter your email" />
          <img src="/assets/search-icon.png" alt="Search Icon" />
        
        <img src="/assets/cart-icon.png" alt="Cart" />
        <div className="contact">
          <a href="tel:9430144469">9430144469</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
