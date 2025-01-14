import React from "react";
import "./cereals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const cereals: React.FC = () => {
  return (
    <><Navbar /><main>
          {/* Hero Section */}
          <section className="hero">
              <div className="overlay"></div>
              <div className="content">
                  <p>ALL KINDS OF GRAINS AND CEREALS ARE AVAILABLE</p>
              </div>
          </section>

          {/* Products Section */}
          <section id="products">
              <div className="products-grid">
                  {/* Product Card 1 */}
                  <div className="product-card">
                      <img src="../assets/grains/maize.png" alt="Fresh Dried Maize" />
                      <h3>Fresh Dried Maize</h3>
                      <p>10 GH₵</p>
                      <button>
                          <a href="buy.html" style={{ color: "inherit", textDecoration: "none" }}>
                              Buy now
                          </a>
                      </button>
                  </div>

                  {/* Product Card 2 */}
                  <div className="product-card">
                      <img src="/grains/wheat.png" alt="Fresh Dried Wheat" />
                      <h3>Fresh Dried Wheat</h3>
                      <p>10 GH₵</p>
                      <button>
                          <a href="buy.html" style={{ color: "inherit", textDecoration: "none" }}>
                              Buy now
                          </a>
                      </button>
                  </div>

                  {/* Product Card 3 */}
                  <div className="product-card">
                      <img src="/grains/oats.png" alt="Fresh Dried Oats" />
                      <h3>Fresh Dried Oats</h3>
                      <p>10 GH₵</p>
                      <button>
                          <a href="buy.html" style={{ color: "inherit", textDecoration: "none" }}>
                              Buy now
                          </a>
                      </button>
                  </div>

                  {/* Product Card 4 */}
                  <div className="product-card">
                      <img src="/grains/smallgrains.png" alt="Fresh Dried Grains" />
                      <h3>Fresh Dried Grains</h3>
                      <p>10 GH₵</p>
                      <button>
                          <a href="buy.html" style={{ color: "inherit", textDecoration: "none" }}>
                              Buy now
                          </a>
                      </button>
                  </div>

                  {/* Product Card 5 */}
                  <div className="product-card">
                      <img src="/grains/seed.png" alt="Fresh Dried Coffee" />
                      <h3>Fresh Dried Coffee</h3>
                      <p>10 GH₵</p>
                      <button>
                          <a href="buy.html" style={{ color: "inherit", textDecoration: "none" }}>
                              Buy now
                          </a>
                      </button>
                  </div>
              </div>
          </section>
          <Footer   />
      </main></>
  );
};

export default cereals;
