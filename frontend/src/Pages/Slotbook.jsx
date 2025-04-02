import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Slotbook() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    date: '',
    hours: '',
    timeSlotHour: '',
    timeSlotMinute: '',
    timeSlotPeriod: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTimeSlotChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const timeSlot = `${formData.timeSlotHour}:${formData.timeSlotMinute} ${formData.timeSlotPeriod}`;
    const finalFormData = { ...formData, timeSlot };

    try {
      const response = await fetch('http://localhost:4000/api/book-slot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalFormData),
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/booking-confirmation', { state: finalFormData });
      } else {
        alert(data.message || 'Error booking slot.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Server error, please try again later.');
    }
  };

  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '100px auto',
      padding: '30px',
      borderRadius: '15px',
      background: 'linear-gradient(135deg, #f9f9f9, #e3e3e3)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    containerHover: {
      transform: 'scale(1.02)',
      boxShadow: '0 15px 25px rgba(0, 0, 0, 0.3)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formGroup: {
      marginBottom: '20px',
    },
    note: {
      marginBottom: '15px',
      color: 'red',
      fontStyle: 'italic',
      fontSize: '0.9rem',
    },
    heading: {
      fontWeight: '900',
      fontStyle: 'italic',
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '20px',
      color: '#333',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 'bold',
      fontSize: '1rem',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    },
    inputFocus: {
      borderColor: '#007BFF',
      boxShadow: '0 0 8px rgba(0, 123, 255, 0.5)',
    },
    calendarInput: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '1rem',
      backgroundColor: '#fff',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    },
    calendarInputFocus: {
      borderColor: '#28a745',
      boxShadow: '0 0 8px rgba(40, 167, 69, 0.5)',
      backgroundColor: '#f0fff4',
    },
    button: {
      padding: '12px 25px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
    },
    timeSlotContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '10px',
    },
    timeSlotInput: {
      width: '30%',
    },
    // Responsive styles
    '@media (max-width: 768px)': {
      container: {
        maxWidth: '80%',
        padding: '20px',
      },
      heading: {
        fontSize: '1.5rem',
      },
      button: {
        padding: '10px 20px',
        fontSize: '0.9rem',
      },
    },
    '@media (max-width: 480px)': {
      container: {
        maxWidth: '95%',
        padding: '15px',
      },
      heading: {
        fontSize: '1.2rem',
      },
      button: {
        padding: '8px 15px',
        fontSize: '0.8rem',
      },
    },
  };

  return (
    <div
      style={styles.container}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.containerHover.transform;
        e.currentTarget.style.boxShadow = styles.containerHover.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = styles.container.boxShadow;
      }}
    >
      <h2 style={styles.heading}>Book Your Slot</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Contact:</label>
          <input
            type="text"
            name="contact"
            placeholder="Enter your contact no."
            value={formData.contact}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Select Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={styles.calendarInput}
            onFocus={(e) => {
              e.target.style.borderColor = styles.calendarInputFocus.borderColor;
              e.target.style.boxShadow = styles.calendarInputFocus.boxShadow;
              e.target.style.backgroundColor = styles.calendarInputFocus.backgroundColor;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#ccc';
              e.target.style.boxShadow = 'none';
              e.target.style.backgroundColor = '#fff';
            }}
            required
            min={getTomorrowDate()}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Select Hour:</label>
          <select
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select hours</option>
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
          </select>
        </div>
        <div style={styles.note}>
          Note: You can only choose your time slot from 8:00 AM to 8:00 PM. Do not choose your time slot between 10:00 PM to 8:00 AM.
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Select Time Slot:</label>
          <div style={styles.timeSlotContainer}>
            <select
              name="timeSlotHour"
              value={formData.timeSlotHour}
              onChange={handleTimeSlotChange}
              style={{ ...styles.input, ...styles.timeSlotInput }}
              required
            >
              {[...Array(12).keys()].map((hour) => (
                <option key={hour + 1} value={String(hour + 1).padStart(2, '0')}>
                  {String(hour + 1).padStart(2, '0')}
                </option>
              ))}
            </select>
            <select
              name="timeSlotMinute"
              value={formData.timeSlotMinute}
              onChange={handleTimeSlotChange}
              style={{ ...styles.input, ...styles.timeSlotInput }}
              required
            >
              <option value="00">00</option>
              <option value="30">30</option>
            </select>
            <select
              name="timeSlotPeriod"
              value={formData.timeSlotPeriod}
              onChange={handleTimeSlotChange}
              style={{ ...styles.input, ...styles.timeSlotInput }}
              required
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.transform = styles.buttonHover.transform;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = styles.button.backgroundColor;
            e.target.style.transform = 'none';
          }}
        >
          Book Your Slot
        </button>
      </form>
    </div>
  );
}