import React from 'react';
import '../styles/Appointments.css';

const Appointments = () => {
  return (
    <div className="appointments-container">
      <div className="appointments-header">
        <h1>Manage Appointments</h1>
        <p>Schedule and manage your medical appointments with ease</p>
      </div>

      <div className="appointment-cards">
        <div className="appointment-card">
          <h3>Book New Appointment</h3>
          <p>Schedule a new consultation with our medical experts</p>
          <button className="submit-button">Book Now</button>
        </div>

        <div className="appointment-card">
          <h3>View Appointments</h3>
          <p>Check your upcoming and past appointments</p>
          <button className="submit-button">View History</button>
        </div>

        <div className="appointment-card">
          <h3>Emergency Booking</h3>
          <p>Need urgent medical attention? Book an emergency slot</p>
          <button className="submit-button">Emergency Book</button>
        </div>
      </div>
    </div>
  );
};

export default Appointments; 