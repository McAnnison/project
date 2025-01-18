import React from 'react';
import '../../Styles/privacy.css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';


const PrivacyPolicy: React.FC = () => {
  return (
    <><Navbar/>
    <div className="privacy-poilicy-container">
      <h1>Privacy Policy</h1>
      <div className="content">
        <div className="privacy-image"></div>
        <div className="privacy-text">
          <p>Welcome to our Privacy Policy page. Here, you can learn about how we handle your personal information and ensure your privacy is protected.</p>
        </div>
      </div>
    
  
      <h2>Introduction</h2>
      <p>
        At Fresh Feilds, we value your privacy and are committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, and safeguard your data.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect personal information from you when you visit our website, register for an account, place an order,
        or contact us. This information may include your name, email address, phone number, and payment information.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use your information to:
        <ul>
          <li>Process and manage your orders</li>
          <li>Communicate with you about your account or orders</li>
          <li>Improve our services and website</li>
          <li>Send you promotional materials (with your consent)</li>
        </ul>
      </p>

      <h2>3. Data Protection</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information from unauthorized
        access, use, or disclosure.
      </p>

      <h2>4. Sharing Your Information</h2>
      <p>
        We do not sell or rent your personal information to third parties. Your information may be shared with trusted
        service providers who assist us in operating our website or conducting our business, as long as those parties
        agree to keep this information confidential.
      </p>

      <h2>5. Cookies</h2>
      <p>
        Our website uses cookies to enhance user experience. You can choose to accept or decline cookies. Most web
        browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you
        prefer.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You have the right to:
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request corrections to any inaccuracies in your data</li>
          <li>Request the deletion of your personal information</li>
        </ul>
      </p>

      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage
        you to review this policy periodically.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our data practices, please contact us at:
        <br />
        Email: [Your Email Address]
        <br />
        Phone: [Your Phone Number]
      </p>
    </div><Footer/></>
  );
};

export default PrivacyPolicy;