import React from 'react';
import './tuber.css'; 
import Navbar from '../components/Navbar';

const Tuber: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Fresh Cassava',
      price: '10 GH₵',
      imgSrc: '/tuber/cassava.png',
      altText: 'Cassava',
    },
    {
      id: 2,
      name: 'Fresh Cocoyam',
      price: '10 GH₵',
      imgSrc: '/tuber/cocoyam.png',
      altText: 'Cocoyam',
    },
    {
      id: 3,
      name: 'Fresh Potato',
      price: '10 GH₵',
      imgSrc: '/tuber/potato.png',
      altText: 'Potato',
    },
    {
      id: 4,
      name: 'Fresh Plantain',
      price: '10 GH₵',
      imgSrc: '/tuber/plantain.png',
      altText: 'Plantain',
    },
    {
      id: 5,
      name: 'Fresh Yam',
      price: '10 GH₵',
      imgSrc: '/tuber/yam.png',
      altText: 'Yam',
    },
    {
      id: 6,
      name: 'Fresh K)k))',
      price: '10 GH₵',
      imgSrc: './tuber/k)k)).png', // This image path seems incorrect; please verify.
      altText: 'K)k))',
    },
  ];

  return (
    <><Navbar/><main>
      <section className="hero">
        <div className="overlay"></div>
        <div className="content">
          <p>ALL KINDS OF FRESH TUBERS ARE AVAILABLE</p>
        </div>
      </section>

      <section id="products">
        <h2>Our Tubers</h2>
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

export default Tuber;