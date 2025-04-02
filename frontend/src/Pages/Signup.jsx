import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    selectedClass: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const contactPattern = /^\d{10}$/;
    if (!contactPattern.test(formData.contactNumber)) {
      alert("Please enter a valid contact number.");
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      } else {
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          selectedClass: '',
          password: '',
          confirmPassword: ''
        });
        navigate('/login');
      }

      const data = await response.json();
      console.log(data);
      alert("User created successfully!");
    } catch (error) {
      console.error('There was an error creating the user!', error);
      alert('There was an error creating the user. Please try again later.');
    }
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '140px auto 50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#f9f9f9',
    animation: 'fadeIn 1s ease-in-out',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const headingStyle = {
    textAlign: 'center',
    fontWeight: '900',
    fontStyle: 'italic',
    margin: '20px',
    animation: 'slideDown 1s ease-in-out'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
  };

  const inputFocusStyle = {
    borderColor: '#007bff',
    boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)'
  };

  const buttonStyle = {
    width: '200px',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '10px',
    transition: 'transform 0.3s ease, background-color 0.3s ease'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)'
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
      }}
    >
      <h1 style={headingStyle}>Sign-up</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ width: '48%', marginBottom: '15px' }}>
            <b><label>Name:</label></b>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
          </div>
          <div style={{ width: '48%', marginBottom: '15px' }}>
            <b><label>Email:</label></b>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ width: '48%', marginBottom: '15px' }}>
            <b><label>Contact Number:</label></b>
            <input
              type="text"
              name="contactNumber"
              placeholder="Enter your contact number"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
          </div>
          <div style={{ width: '48%', marginBottom: '15px' }}>
            <b><label>Class:</label></b>
            <select
              name="selectedClass"
              value={formData.selectedClass}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">Select Class</option>
              <option value="Class 11th">Class 11th</option>
              <option value="Class 12th">Class 12th</option>
              <option value="Dropper">Dropper</option>
              <option value="Foundation">Foundation</option>
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ width: '48%', marginBottom: '15px' }}>
            <b><label>Password:</label></b>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ width: '48%', marginBottom: '15px' }}>
            <b><label>Confirm Password:</label></b>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
