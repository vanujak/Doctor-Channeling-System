import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MediCare Center</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/appointments" className="nav-link">Manage Appointments</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar; 