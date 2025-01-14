import React from 'react';
import '../footer.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/assets/logo.png" alt="Fresh Fields Logo" />
        <p>FRESH FIELDS</p>
        <p>Harvesting Freshness, Delivering Quality</p>
      </div>
      <div className="footer-links">
        <div className="column">
          <h4>My Account</h4>
          <ul>
            <li><a href="account.html">My Account</a></li>
            <li><a href="orderhistory.html">Order History</a></li>
            <li><a href="shopping.html">Shopping Cart</a></li>
            <li><a href="wishlist.html">Wishlist</a></li>
          </ul>
        </div>
        <div className="column">
          <h4>Contact</h4>
          <p>
            Phone/WhatsApp: <a href="tel:024444444444">024444444444</a>
          </p>
          <p>
            Email: <a href="mailto:freshfields120@gmail.com">freshfields120@gmail.com</a>
          </p>
          <div className="column">
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;