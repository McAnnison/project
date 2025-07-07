"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../../Styles/shopping.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Fresh Apples",
      image: "/assets/products/apples.jpg",
      price: 10,
      quantity: 2,
    },
    {
      id: 2,
      name: "Organic Carrots",
      image: "/assets/products/carrots.jpg",
      price: 8,
      quantity: 3,
    },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="shopping-cart">
        <h1 className="cart-title">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div className="cart-container">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h2 className="cart-item-name">{item.name}</h2>
                  <p className="cart-item-price">GHC {item.price.toFixed(2)}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                  </div>
                  <button
                    className="remove-item-btn"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-summary">
              <h2>Total: GHC {total.toFixed(2)}</h2>
              <Link href="/pages/checkOut">
                <button className="checkout-btn">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        ) : (
          <p className="empty-cart-message">Your cart is empty.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
