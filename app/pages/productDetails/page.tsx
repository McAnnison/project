"use client";

import React, { useState } from "react";
import "../../Styles/product.css";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const productDetails: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: string) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <><Navbar /><>
      <div className="product-details">
        <div className="product-details-container">
          <div className="image-section">
            <img
              src="/assets/product-sample.jpg"
              alt="Product"
              className="product-image" />
          </div>

          <div className="info-section">
            <h1 className="product-title">Organic Fresh Apples</h1>
            <p className="product-category">Category: Fruits</p>
            <p className="product-description">
              Fresh, juicy, and organic apples sourced directly from local farms.
              Perfect for a healthy snack or to add to your favorite recipes.
            </p>
            <p className="product-price">
              <span className="price">$15.99</span> per kg
            </p>

            <div className="quantity-selector">
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange("decrease")}
              >
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange("increase")}
              >
                +
              </button>
            </div>

            <button className="add-to-cart-btn">Add to Cart</button>

            <div className="product-details-extra">
              <h2>Key Benefits</h2>
              <ul>
                <li>Rich in nutrients</li>
                <li>Support local farmers</li>
                <li>100% organic and pesticide-free</li>
              </ul>
              <h2>Delivery Information</h2>
              <p>
                Deliveries are made within 24-48 hours to your doorstep. We ensure
                your products are fresh and properly handled.
              </p>
            </div>
          </div>
        </div>
      </div><Footer /></></>
  );
};

export default productDetails;
