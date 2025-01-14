import React from 'react';
import '../Styles/FAQ.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What types of crops do you grow?",
      answer: "We grow a variety of crops including vegetables, fruits, and grains. Our main products include tomatoes, carrots, and maize."
    },
    {
      question: "Do you use organic farming methods?",
      answer: "Yes, we prioritize organic farming methods to ensure the health of our customers and the environment."
    },
    {
      question: "Where can I buy your products?",
      answer: "Our products are available at local markets and grocery stores. You can also order directly from our website for home delivery."
    },
    {
      question: "Do you offer bulk purchasing options?",
      answer: "Yes, we offer discounts for bulk purchases. Please contact our sales team for more information."
    },
    {
      question: "How do you ensure the quality of your products?",
      answer: "We conduct regular quality checks at every stage of the farming and distribution process to ensure that we deliver only the best products."
    },
    {
      question: "Can I visit your farm?",
      answer: "Absolutely! We welcome visitors and offer guided tours of our farm. Please contact us to schedule a visit."
    },
    {
      question: "What are your sustainability practices?",
      answer: "We are committed to sustainable farming practices, including crop rotation, water conservation, and minimizing chemical usage."
    },
  ];

  return (
    <><Navbar/><div className="faq-container">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div><Footer/></>
  );
};

export default FAQ;