import React from 'react';
import Navbar from './Navbar'; 
import '../Home.css';
 

const Hero: React.FC = () => {
  return (
    <div>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Fresh Fields</h1>
          <p>Fresh & Healthy Farm Products</p>
          <a href="#shop" className="btn">Shop now</a>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <img src="/assets/fast-delivery.png" alt="Fast Delivery" />
          <h3>Very Fast Delivery</h3>
          <p>Low delivery costs</p>
        </div>
        <div className="feature">
          <img src="/assets/support.png" alt="Support" />
          <h3>Great Support 24/7</h3>
          <p>Instant access to contact</p>
        </div>
        <div className="feature">
          <img src="/assets/payment.png" alt="Secure Payment" />
          <h3>100% Secure Payment</h3>
          <p>We ensure your money is safe</p>
        </div>
        <div className="feature">
          <img src="/assets/guarantee.png" alt="Money-Back Guarantee" />
          <h3>Money-Back Guarantee</h3>
          <p>30 days money-back</p>
        </div>
      </section>

      <section className="product-category">
        <h2>Product Category</h2>
        <div className="category-grid">
          <div className="category">
            <img src="../public/assets/home/meat-back.png" alt="Fresh Meat" />
            <h3>Fresh Meat</h3>
            <p>We provide you with the best of meat</p>
          </div>
          <div className="category">
            <img src="/fish/back.png" alt="Fresh Fish" />
            <h3>Fresh Fish</h3>
          </div>
          <div className="category">
            <img src="/oil/oil-back.png" alt="Oil" />
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