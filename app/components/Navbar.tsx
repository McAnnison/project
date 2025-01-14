"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../Styles/header.css";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src="../assates/home/logo.png" alt="Fresh Fields Logo" />
        <p>FRESH FIELDS</p>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link href="">Home</Link>
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link href="/">Shop</Link>
            <span className="dropdown-label"></span>
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
          >
            <Link href="/">Pages</Link>
            <span className="dropdown-label"></span>
            {pagesDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link href="./products/Wishlist">My Wishlist</Link>
                </li>
                <li>
                  <Link href="#cart">Shopping Cart</Link>
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
        <button className="search-button" aria-label="Search">
          <img src="/assets/search-icon.png" alt="Search Icon" />
        </button>
        <img src="/assets/cart-icon.png" alt="Cart" />
        <div className="contact">
          <a href="tel:9430144469">9430144469</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
