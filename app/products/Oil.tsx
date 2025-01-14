import React from 'react';
import './oil.css'; 
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Oil: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Regular Cooking Oil',
      price: '10 GH₵',
      imgSrc: '/oil/regular.png',
      altText: 'Regular Cooking Oil',
    },
    {
      id: 2,
      name: 'Sunflower Oil',
      price: '10 GH₵',
      imgSrc: '/oil/sunflower.png',
      altText: 'Sunflower Oil',
    },
    {
      id: 3,
      name: 'Coconut Oil',
      price: '10 GH₵',
      imgSrc: '/oil/coconut.png',
      altText: 'Coconut Oil',
    },
    {
      id: 4,
      name: 'Olive Oil',
      price: '10 GH₵',
      imgSrc: '/oil/olive.png',
      altText: 'Olive Oil',
    },
  ];

  return (
    <><Navbar /><main>
       <section className="hero">
            <div className="overlay"></div>
            <div className="content">
                <p>ALL OIL ARE AVAILABLE</p>
            </div>
        </section>
    <section id="products">
      <h2>Our Oils</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.altText} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>
              <a href="buy.html" style={{ color: 'inherit', textDecoration: 'none' }}>Buy now</a>
            </button>
          </div>
        ))}
      </div>
    </section>
    
    </main><Footer/></>
  );
};

export default Oil;