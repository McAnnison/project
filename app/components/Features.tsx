import React from 'react';
import '../Styles/features.css'; 

const Features: React.FC = () => {
  return (
    <> <h1>Enjoy our feateures</h1><section className="features">
     
      <div className="feature">
        <div className='delivery'><img /></div>
        <h3>Very Fast Delivery</h3>
        <p>Low delivery costs</p>
      </div>
      <div className="feature">
        <div className='support'><img/></div>
        <h3>Great Support 24/7</h3>
        <p>Instant access to contact</p>
      </div>
      <div className="feature">
        <div className='secure'><img   /></div>
        <h3>100% Secure Payment</h3>
        <p>We ensure your money is safe</p>
      </div>
      <div className="feature">
        <div className='guarant'><img /></div>
        <h3>Money-Back Guarantee</h3>
        <p>30 days money-back</p>
      </div>
    </section></>
  );
};

export default Features;