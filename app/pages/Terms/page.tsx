import React from 'react';
import '../Styles/terms.css'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms: React.FC = () => {
  return (
    <><Navbar/>
    <div className="terms-container">
      <h1>Terms and Conditions</h1>

      <h2>Introduction</h2>
      <p>
        Welcome to [Your Agricultural Firm Name]. By using our services, you agree to the following terms and conditions.
        Please read them carefully.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using our website and services, you confirm that you have read, understood, and agree to be bound
        by these terms and conditions.
      </p>

      <h2>2. Services Offered</h2>
      <p>
        We provide a range of agricultural products, including but not limited to fresh fruits, vegetables, grains,
        and related services.
      </p>

      <h2>3. Pricing and Payment</h2>
      <p>
        All prices are listed in [Currency]. We reserve the right to change prices at any time. Payments can be made
        through various methods, including credit card, bank transfer, and cash on delivery.
      </p>

      <h2>4. Delivery Policy</h2>
      <p>
        We aim to deliver all orders within [Delivery Time] after confirmation. Delivery times may vary based on
        location and availability.
      </p>

      <h2>5. Returns and Refunds</h2>
      <p>
        If you are not satisfied with your purchase, please contact us within [Return Period] days to arrange for a
        return or refund. Products must be in their original condition.
      </p>

      <h2>6. Customer Responsibilities</h2>
      <p>
        Customers are responsible for providing accurate information when placing an order. Any inaccuracies may lead to
        delays or issues with your order.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        [Your Agricultural Firm Name] shall not be liable for any indirect, incidental, or consequential damages arising
        from the use of our services.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately
        upon posting on our website.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These terms and conditions shall be governed by and construed in accordance with the laws of [Your Country/State].
      </p>

      <h2>10. Contact Information</h2>
      <p>
        If you have any questions about these terms and conditions, please contact us at:
        <br />
        Email: [Your Email Address]
        <br />
        Phone: [Your Phone Number]
      </p>
    </div><Footer/></>
  );
};

export default Terms;