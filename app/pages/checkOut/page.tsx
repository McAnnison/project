"use client";

import React, { useState } from "react";
import "../../Styles/checkout.css";

const checkOut: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "credit-card",
  });

  const [orderSummary] = useState([
    { id: 1, name: "Fresh Apples", quantity: 2, price: 10 },
    { id: 2, name: "Organic Carrots", quantity: 3, price: 8 },
  ]);

  const total = orderSummary.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully!");
    console.log(formData);
  };

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Billing Information</h2>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-section">
          <h2>Shipping Address</h2>
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-section">
          <h2>Payment Method</h2>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            required
          >
            <option value="credit-card">Credit Card</option>
            <option value="mobile-money">Mobile Money</option>
            <option value="cash-on-delivery">Cash on Delivery</option>
          </select>
        </div>

        <div className="form-section order-summary">
          <h2>Order Summary</h2>
          {orderSummary.map((item) => (
            <div key={item.id} className="order-item">
              <p>{item.name} (x{item.quantity})</p>
              <p>GHC {item.price.toFixed(2)}</p>
            </div>
          ))}
          <div className="order-total">
            <p>Total:</p>
            <p>GHC {total.toFixed(2)}</p>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default checkOut;
