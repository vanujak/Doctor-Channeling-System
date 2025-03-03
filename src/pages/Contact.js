import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to help and answer any questions you might have</p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <div>
            <h3>Address</h3>
            <p>123 Medical Center Drive</p>
            <p>Healthcare City, HC 12345</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>Emergency: (555) 123-4567</p>
            <p>Reception: (555) 123-4568</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>info@medicareCenter.com</p>
            <p>support@medicareCenter.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 