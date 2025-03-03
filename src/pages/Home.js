import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to MediCare Center</h1>
        <p>Your trusted healthcare partner for a healthier tomorrow</p>
      </div>
      
      <div className="services-grid">
        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Emergency Care" />
          <h3>Emergency Care</h3>
          <p>24/7 emergency medical services with state-of-the-art facilities</p>
        </div>
        
        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Specialist Consultation" />
          <h3>Specialist Consultation</h3>
          <p>Expert medical specialists available for consultation</p>
        </div>
        
        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Laboratory Services" />
          <h3>Laboratory Services</h3>
          <p>Advanced diagnostic and laboratory testing facilities</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 