import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrContact: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactPattern = /^\d{10}$/;
    if (!emailPattern.test(formData.emailOrContact) && !contactPattern.test(formData.emailOrContact)) {
      alert("Please enter a valid email address or contact number.");
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/loginuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailOrContact: formData.emailOrContact,
          password: formData.password
        })
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem("userEmail", formData.emailOrContact);
        localStorage.setItem("authToken", json.authToken);
        navigate('/student-profile');
      } else {
        alert(json.error || "Invalid Credentials!");
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('There was an error logging in. Please try again later.');
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '170px auto',
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
    heading: {
      fontWeight: '900',
      fontStyle: 'italic',
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '20px',
      color: '#333',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formGroup: {
      marginBottom: '20px',
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
      style={styles.container} // Use styles.container instead of containerStyle
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      }}
    >
      <h1 style={styles.heading}>Log-in</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email or Contact Number:</label>
          <input
            type="text"
            name="emailOrContact"
            placeholder="Registered Email or Contact"
            value={formData.emailOrContact}
            onChange={handleChange}
            required
            style={styles.input}
            onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
            onBlur={(e) => Object.assign(e.target.style, styles.input)}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
            onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
            onBlur={(e) => Object.assign(e.target.style, styles.input)}
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;