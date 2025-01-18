import React from "react";
import  "../../Styles/meat.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const products = [
    {
        id: 1,
        name: "Pre cut beef",
        price: "10 GH₵",
        imageSrc: "/meat/beef-cut 1.png",
        altText: "Fresh Beef",
        buyLink: "buy.html",
    },
    {
        id: 2,
        name: "Whole Chicken",
        price: "10 GH₵",
        imageSrc: "/meat/FROZEN_CHICKEN 1.png",
        altText: "Chicken",
        buyLink: "buy.html",
    },
    {
        id: 3,
        name: "Gizzard",
        price: "10 GH₵",
        imageSrc: "/meat/gizzard.png",
        altText: "Gizz",
        buyLink: "buy.html",
    },
    {
        id: 4,
        name: "Eggs",
        price: "10 GH₵",
        imageSrc: "/meat/eggs.png",
        altText: "Egg",
        buyLink: "buy.html",
    },
    {
        id: 5,
        name: "Cow Meat",
        price: "10 GH₵",
        imageSrc: "/meat/cow meat.png",
        altText: "Cow",
        buyLink: "buy.html",
    },
    {
        id: 6,
        name: "Pork",
        price: "10 GH₵",
        imageSrc: "/meat/pork.png",
        altText: "Pork",
        buyLink: "buy.html",
    },
    {
        id: 7,
        name: "Fresh Goat Meat",
        price: "10 GH₵",
        imageSrc: "/meat/goat.png",
        altText: "Goat",
        buyLink: "buy.html",
    },
    {
        id: 8,
        name: "Pre cut chicken",
        price: "10 GH₵",
        imageSrc: "/meat/precut chick.png",
        altText: "Chick",
        buyLink: "buy.html",
    },
];

const Meat: React.FC = () => {
    return (
        <><Navbar /><main>
        <section className="hero">
            <div className="overlay"></div>
            <div className="content">
                <p>ALL KINDS OF FRESH MEAT ARE AVAILABLE</p>
            </div>
        </section><section id="products">
                <div className="products-grid">
                    {products.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.imageSrc} alt={product.altText} />
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                            <button>
                                <a
                                    href={product.buyLink}
                                    style={{
                                        color: "inherit",
                                        textDecoration: "none",
                                    }}
                                >
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

export default Meat;