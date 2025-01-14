import React from "react";
import "./fruits.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Fruits: React.FC = () => {
  const fruitsData = [
    { img: "/fruits/orange.png", name: "Fresh Oranges", price: "10 GH₵" },
    { img: "/fruits/pawpaw.png", name: "Fresh Pawpaw", price: "10 GH₵" },
    { img: "/fruits/mangoes.png", name: "Fresh Mangoes", price: "10 GH₵" },
    { img: "/fruits/apple.png", name: "Fresh Apples", price: "10 GH₵" },
    { img: "/fruits/grapes.png", name: "Fresh Grapes", price: "10 GH₵" },
    { img: "/fruits/pineapple.png", name: "Fresh Pineapples", price: "10 GH₵" },
    { img: "/fruits/banana.png", name: "Fresh Banana", price: "10 GH₵" },
    { img: "/fruits/watermelon.png", name: "Fresh Watermelons", price: "10 GH₵" },
  ];

  return (
    <><Navbar /> <main>
        <section className="hero">
            <div className="overlay"></div>
            <div className="content">
                <p>ALL KINDS OF FRESH FRUITS ARE AVAILABLE</p>
            </div>
        </section><section id="products" className="products-section">
          <div className="products-grid">
              {fruitsData.map((fruit, index) => (
                  <div className="product-card" key={index}>
                      <img src={fruit.img} alt={fruit.name} />
                      <h3>{fruit.name}</h3>
                      <p>{fruit.price}</p>
                      <button>
                          <a href="/buy" style={{ color: "inherit", textDecoration: "none" }}>
                              Buy now
                          </a>
                      </button>
                  </div>
              ))}
          </div>
      </section>
      </main><Footer /></>
  );
};

export default Fruits;
