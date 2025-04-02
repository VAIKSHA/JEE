import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, contact, date, hours, timeSlot } = location.state || {};

  return (
    <div style={{ maxWidth: '600px', margin: '150px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
      <h2 style={{ fontWeight: 900, fontStyle: 'italic', textAlign: 'center' }}>Booking Confirmation</h2>
      <p style={{ fontWeight: 'bold' }}>Thank you for your booking!</p>
      <p>Your booking details are as follows:</p>
      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Contact:</strong> {contact}</li>
        <li><strong>Date:</strong> {date}</li>
        <li><strong>Duration:</strong> {hours} hour(s)</li>
        <li><strong>Time Slot:</strong> {timeSlot}</li>
      </ul>
      <p>We look forward to seeing you!</p>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button 
          onClick={() => navigate('/')} 
          style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}