"use client";

import React from "react";
import "../../Styles/about.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const aboutUs = () => {
  return (
    <><div><Navbar/></div>
    <div className="about-page">
      <section className="intro-section">
        <h1 className="title">FRESH FIELDS</h1>
        <p className="subtitle">
          "Access to fresh fruits, vegetables & groceries in today’s digital
          world must be easily feasible. <br />
          That is the language we speak at GhFruit Cart"
        </p>
      </section>

      <section className="content-section">
        <h2>About The Store</h2>
        <p>
          We are Fresh Fields. Use our platform to order your fresh fruits,
          vegetables, and groceries and get them delivered to you at the
          comfort of your home or office.
        </p>
      </section>

      <section className="content-section">
        <h2>Why Should You Choose Us?</h2>
        <p>
          With a database of multiple suppliers, farmers, and markets, we assure
          supply of fresh, quality, and healthy foodstuffs to our customers.
          Also, our e-payment system and cash-on-delivery options attempt to
          achieve a convenient way for customers to settle their bills.
        </p>
      </section>

      <section className="content-section">
        <h2>Our Values</h2>
        <p>
          Guided by our values, we seek to achieve maximum customer comfort. Use
          our platform for your grocery shopping and receive your products
          sorted, cleaned, and packaged under strict hygienic conditions.
        </p>
      </section>

      <section className="content-section">
        <h2>Our Mission</h2>
        <p>
          Our core mission is to provide customers with fresh fruits, vegetables,
          and groceries. We reduce the stress of going to the markets by
          providing this platform to customers to easily & conveniently shop
          from the comfort of their homes and offices and get their products
          delivered at their doorsteps.
        </p>
      </section>
    </div><Footer/></>
  );
};

export default aboutUs;
