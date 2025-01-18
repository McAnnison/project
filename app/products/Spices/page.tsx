import React from 'react';
import '../../Styles/spices.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Spices: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Maggie',
      price: '10 GH₵',
      imgSrc: '/spices/maggie.png',
      altText: 'MAGGIE',
    },
    {
      id: 2,
      name: 'Spice1',
      price: '10 GH₵',
      imgSrc: '/spices/spice1.png',
      altText: 'Spice1',
    },
    {
      id: 3,
      name: 'Fresh Spice2',
      price: '10 GH₵',
      imgSrc: '/spices/spice2.png',
      altText: 'Fresh Spice2',
    },
    {
      id: 4,
      name: 'Fresh Spice3',
      price: '10 GH₵',
      imgSrc: '/spices/spice3.png',
      altText: 'Fresh Spice3',
    },
    {
      id: 5,
      name: 'Fresh Spice4',
      price: '10 GH₵',
      imgSrc: '/spices/spice4.png',
      altText: 'Fresh Spice4',
    },
    {
      id: 6,
      name: 'Fresh Spice5',
      price: '10 GH₵',
      imgSrc: '/spices/spice5.png',
      altText: 'Fresh Spice5',
    },
  ];

  return (
    <main><><Navbar/>
      <section className="hero">
        <div className="overlay"></div>
        <div className="content">
          <p>ALL KINDS OF FRESH SPICES ARE AVAILABLE</p>
        </div>
      </section>

      <section id="products">
        <h2>Our Spices</h2>
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
      <Footer/></>
    </main>
  );
};

export default Spices;