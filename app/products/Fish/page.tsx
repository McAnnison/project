import React from "react";
import "./Fish.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Fish: React.FC = () => {
  return (
    <><Navbar/><main>
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="content">
          <p>ALL KINDS OF FRESH FISH ARE AVAILABLE</p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="products-grid">
          {/* Product Cards */}
          {[
            { img: "/fish/white salmon.png", name: "White Salmon", price: "10 GH₵" },
            { img: "/fish/kpanla.png", name: "Kpanla", price: "10 GH₵" },
            { img: "/fish/tilapia.png", name: "Tilapia", price: "10 GH₵" },
            { img: "/fish/redfish.png", name: "Redfish", price: "10 GH₵" },
            { img: "/meat/cow meat.png", name: "Cow Meat", price: "10 GH₵" },
            { img: "/fish/tuna.png", name: "Tuna", price: "10 GH₵" },
            { img: "/fish/shrimps.png", name: "Shrimps", price: "10 GH₵" },
            { img: "/fish/crabs.png", name: "Crabs", price: "10 GH₵" },
            { img: "/fish/herrings.png", name: "Herrings", price: "10 GH₵" },
          ].map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>
                <a href="/buy" style={{ color: "inherit", textDecoration: "none" }}>
                  Buy now
                </a>
              </button>
            </div>
          ))}
        </div>
      </section>
      
    </main><Footer/></>
  );
};

export default Fish;
