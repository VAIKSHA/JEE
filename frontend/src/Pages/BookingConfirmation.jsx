import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, contact, date, hours, timeSlot } = location.state || {};

  // Format timeSlot to display hour, minute, and AM/PM
  const formatTimeSlot = (slot) => {
    if (!slot) return 'N/A';
    const [hour, minute] = slot.split(':').map(Number);
    const isPM = hour >= 12;
    const formattedHour = hour % 12 || 12; // Convert to 12-hour format
    const formattedMinute = minute.toString().padStart(2, '0');
    const period = isPM ? 'PM' : 'AM';
    return `${formattedHour}:${formattedMinute} ${period}`;
  };

  return (
    <div style={{
      maxWidth: '700px',
      margin: '100px auto',
      padding: '30px',
      border: '1px solid #ddd',
      borderRadius: '15px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
      background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
      fontFamily: "'Roboto', sans-serif",
      color: '#333',
    }}>
      <h2 style={{
        fontWeight: 900,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#2c3e50',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        marginBottom: '20px',
      }}>
        Booking Confirmation
      </h2>
      <p style={{
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#444',
        textAlign: 'center',
        marginBottom: '10px',
      }}>
        Thank you for your booking!
      </p>
      <p style={{
        fontSize: '16px',
        color: '#555',
        textAlign: 'center',
        marginBottom: '20px',
      }}>
        Your booking details are as follows:
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '15px',
        marginBottom: '20px',
      }}>
        <div style={{
          padding: '15px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          background: '#f9f9f9',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}>
          <strong>Name:</strong> {name}
        </div>
        <div style={{
          padding: '15px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          background: '#f9f9f9',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}>
          <strong>Email:</strong> {email}
        </div>
        <div style={{
          padding: '15px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          background: '#f9f9f9',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}>
          <strong>Contact:</strong> {contact}
        </div>
        <div style={{
          padding: '15px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          background: '#f9f9f9',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}>
          <strong>Date:</strong> {date}
        </div>
        <div style={{
          padding: '15px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          background: '#f9f9f9',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}>
          <strong>Duration:</strong> {hours} hour(s)
        </div>
        <div style={{
          padding: '15px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          background: '#f9f9f9',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}>
          <strong>Time Slot:</strong> {formatTimeSlot(timeSlot)}
        </div>
      </div>
      <p style={{
        marginTop: '20px',
        fontSize: '16px',
        color: '#555',
        textAlign: 'center',
      }}>
        We look forward to seeing you!
      </p>
      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '15px 30px',
            background: 'linear-gradient(90deg, #007BFF, #0056b3)',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'linear-gradient(90deg, #0056b3, #003f7f)';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'linear-gradient(90deg, #007BFF, #0056b3)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Go to Home
        </button>
        <p style={{
          marginTop: '15px',
          fontSize: '14px',
          color: '#777',
          fontStyle: 'italic',
        }}>
          Click the button to return to the homepage.
        </p>
      </div>
    </div>
  );
}