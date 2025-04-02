import React, { useState } from 'react';

const styles = {
    heading: {
        textAlign: 'center',
        fontWeight: '900',
        fontStyle: 'italic',
        marginBottom: '20px',
        fontSize: '2rem',
        color: '#333',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    },
    container: {
        maxWidth: '90%',
        margin: '150px auto 50px',
        padding: '20px',
        borderRadius: '15px',
        background: 'linear-gradient(135deg, #f9f9f9, #e3e3e3)',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    containerLaptop: {
        maxWidth: '50%',
    },
    containerPhone: {
        maxWidth: '95%',
        padding: '15px',
    },
    containerHover: {
        transform: 'scale(1.02)',
        boxShadow: '0 15px 25px rgba(0, 0, 0, 0.3)',
    },
    formGroup: {
        marginBottom: '15px',
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
    textarea: {
        width: '100%',
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontSize: '1rem',
        minHeight: '100px',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    },
    buttonContainer: {
        textAlign: 'center',
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
    // Responsive styles
    '@media (max-width: 768px)': {
        container: {
            maxWidth: '80%',
            padding: '15px',
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
            padding: '10px',
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

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({ target: { name, value } }) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div
            style={{
                ...styles.container,
                ...(window.innerWidth >= 1024 ? styles.containerLaptop : {}),
                ...(window.innerWidth <= 480 ? styles.containerPhone : {}),
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.containerHover.transform;
                e.currentTarget.style.boxShadow = styles.containerHover.boxShadow;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = styles.container.boxShadow;
            }}
        >
            <h1 style={styles.heading}>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                {['name', 'email', 'message'].map((field) => (
                    <div key={field} style={styles.formGroup}>
                        <label htmlFor={field} style={styles.label}>
                            {field.charAt(0).toUpperCase() + field.slice(1)}:
                        </label>
                        {field === 'message' ? (
                            <textarea
                                id={field}
                                name={field}
                                placeholder={`Enter your ${field}`}
                                value={formData[field]}
                                onChange={handleChange}
                                required
                                style={styles.textarea}
                                onFocus={(e) => {
                                    e.target.style.borderColor = styles.inputFocus.borderColor;
                                    e.target.style.boxShadow = styles.inputFocus.boxShadow;
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#ccc';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                        ) : (
                            <input
                                type={field === 'email' ? 'email' : 'text'}
                                id={field}
                                name={field}
                                placeholder={`Enter your ${field}`}
                                value={formData[field]}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                onFocus={(e) => {
                                    e.target.style.borderColor = styles.inputFocus.borderColor;
                                    e.target.style.boxShadow = styles.inputFocus.boxShadow;
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#ccc';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                        )}
                    </div>
                ))}
                <div style={styles.buttonContainer}>
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
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;