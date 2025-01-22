"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../Styles/header.css";

const Navbar: React.FC = () => {
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [signUpDropdownOpen, setSignUpDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/logo.png"  className="logo-img" />
        <p>FRESH FIELDS</p>
      </div>

      <button
        className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
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
            className={`dropdown ${shopDropdownOpen ? "open" : ""}`}
            onMouseEnter={() => setShopDropdownOpen(true)}
            onMouseLeave={() => setShopDropdownOpen(false)}
            onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
          >
            <Link href="/">Shop</Link>
            {shopDropdownOpen && (
              <ul className="dropdown-menu">
                {[
                  "Oil",
                  "Meat",
                  "Fish",
                  "Cereals",
                  "Fruits",
                  "Vegetables",
                  "Spices",
                  "Tuber",
                ].map((item) => (
                  <li key={item}>
                    <Link href={`/products/${item}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li
            className={`dropdown ${pagesDropdownOpen ? "open" : ""}`}
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
                  <Link href="/pages/shoppingCart">Shopping Cart</Link>
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
            <Link href="/pages/aboutUs">About Us</Link>
          </li>
        </ul>
      </nav>

      
        <div
          className={`dropdown ${signUpDropdownOpen ? "open" : ""}`}
          onMouseEnter={() => setSignUpDropdownOpen(true)}
          onMouseLeave={() => setSignUpDropdownOpen(false)}
          onClick={() => setSignUpDropdownOpen(!signUpDropdownOpen)}
        >
          <Link href="/">Sign Up</Link>
          {signUpDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link href="/pages/signIn">Farmer</Link>
              </li>
              <li>
                <Link href="/pages/signIn">Buyer</Link>
              </li>
            </ul>
          )}
        </div>

        <div className="header-icons">
        <div className="search">
          <label htmlFor="search" className="sr-only">
            <img />
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
        <img  className="cart-icon" />

        <div className="contact">
          <a href="tel:9430144469">9430144469</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
