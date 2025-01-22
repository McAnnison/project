import React from 'react';

import '../Styles/Home.css';
import Features from './Features';
import Footer from './Footer';
import Navbar from './Navbar';
 

const Hero: React.FC = () => {
  return (
    <><Navbar /><div>

      <section className="hero">
      <img/>
        <div className="hero-content">
          <h1>Welcome to Fresh Fields</h1>
          <p>Fresh and Healthy Farm Products</p>
          <a href="/pages/allProducts" className="btn">Shop now</a>
        </div>
      </section>
      <Features />

      <section className="product-category">
        <h2>Product Category</h2>
        <div className="category-grid">
          <div className="category-meat">
            <img />
            <h3>Fresh Meat</h3>
            <p>We provide you with the best of meat</p>
          </div>
          <div className="category-fish">
            <img/>
            <h3>Fresh Fish</h3>
          </div>
          <div className="category-oil">
            <img />
            <h3>Oil</h3>
          </div>
          <div className="category-fruits">
            <img />
            <h3>Fruits</h3>
          </div>
          <div className="category-vege">
            <img />
            <h3>Vegetables</h3>
          </div>
          <div className="category-grain">
            <img />
            <h3>Legumes, Grains, and Cereals</h3>
          </div>
          <div className="category-tuber">
            <img />
            <h3>Tubers</h3>
          </div>
          <div className="category-spice">
            <img />
            <h3>Herbs and Spices</h3>
          </div>
        </div>
      </section>
    </div></>
  );
};

export default Hero;