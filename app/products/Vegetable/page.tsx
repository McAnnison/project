import React from 'react';
import '../../Styles/vege.css'; 
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Vegetables: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Fresh Carrots',
      price: '10 GH₵',
      imgSrc: '/vegetables/carrots.png',
      altText: 'Carrots',
    },
    {
      id: 2,
      name: 'Fresh Onions',
      price: '10 GH₵',
      imgSrc: '/vegetables/onions.png',
      altText: 'Onions',
    },
    {
      id: 3,
      name: 'Fresh Tomatoes',
      price: '10 GH₵',
      imgSrc: '/vegetables/tomato.png',
      altText: 'Tomatoes',
    },
  ];

  return (
    <><Navbar/><main>
      <section className="hero">
        <div className="overlay"></div>
        <div className="content">
          <p>ALL KINDS OF FRESH VEGETABLES ARE AVAILABLE</p>
        </div>
      </section>

      <section id="products">
        <h2>Our Vegetables</h2>
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

export default Vegetables;