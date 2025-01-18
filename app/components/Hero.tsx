import React from 'react';

import '../Styles/Home.css';
import Features from './Features';
 

const Hero: React.FC = () => {
  return (
    <div>
      

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Fresh Fields</h1>
          <p>Fresh and Healthy Farm Products</p>
          <a href="#shop" className="btn">Shop now</a>
        </div>
      </section>
      <Features/>

      <section className="product-category">
        <h2>Product Category</h2>
        <div className="category-grid">
          <div className="category">
            <img id="image1" alt="Fresh Meat" />
            <h3>Fresh Meat</h3>
            <p>We provide you with the best of meat</p>
          </div>
          <div className="category">
            <img id="image2" alt="Fresh Fish" />
            <h3>Fresh Fish</h3>
          </div>
          <div className="category">
            <img id='image3' alt="Oil" />
            <h3>Oil</h3>
          </div>
          <div className="category">
            <img src="/fruits/back.png" alt="Fruits" />
            <h3>Fruits</h3>
          </div>
          <div className="category">
            <img src="/vegetables/vege-back.png" alt="Vegetables" />
            <h3>Vegetables</h3>
          </div>
          <div className="category">
            <img src="/grains/grains-back.png" alt="Legumes and Grains" />
            <h3>Legumes, Grains, and Cereals</h3>
          </div>
          <div className="category">
            <img src="/tuber/tuber-back.png" alt="Tubers" />
            <h3>Tubers</h3>
          </div>
          <div className="category">
            <img src="/public/assets/spices/spices-back.png" alt="Herbs and Spices" />
            <h3>Herbs and Spices</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;