"use client";

import React from "react";
import "../../Styles/allProducts.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const products = [
  {
    id: 1,
    name: "Fresh Apples",
    image: "/assets/products/apples.jpg",
    price: "GHC 10 / kg",
    description: "Crisp and organic apples sourced from local farms.",
  },
  {
    id: 2,
    name: "Organic Carrots",
    image: "/assets/products/carrots.jpg",
    price: "GHC 8 / kg",
    description: "Fresh and crunchy carrots grown without chemicals.",
  },
  {
    id: 3,
    name: "Farm Fresh Milk",
    image: "/assets/products/milk.jpg",
    price: "GHC 15 / litre",
    description: "Pure and creamy milk straight from the farm.",
  },
  {
    id: 4,
    name: "Green Spinach",
    image: "/assets/products/spinach.jpg",
    price: "GHC 5 / bunch",
    description: "Healthy and vibrant spinach packed with nutrients.",
  },
];

const allProducts: React.FC = () => {
  return (
    <><Navbar /><div className="products-page">
          <h1 className="page-title">Our Products</h1>
          <p className="page-subtitle">
              Explore our fresh, organic, and high-quality agricultural products!
          </p>
          <div className="products-grid">
              {products.map((product) => (
                  <div key={product.id} className="product-card">
                      <img src={product.image} alt={product.name} className="product-image" />
                      <div className="product-info">
                          <h2 className="product-name">{product.name}</h2>
                          <p className="product-price">{product.price}</p>
                          <p className="product-description">{product.description}</p>
                          <button className="add-to-cart-btn">Add to Cart</button>
                      </div>
                  </div>
              ))}
          </div>
      </div><Footer /></>
  );
};

export default allProducts;
