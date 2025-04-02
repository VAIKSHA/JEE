import React, { useState } from 'react';

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1200px',
        margin: '140px auto',
        background: 'linear-gradient(to bottom, #ffffff, #f0f8ff)',
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        animation: 'fadeIn 1s ease-in-out',
    },
    box: {
        border: '1px solid #ddd',
        borderRadius: '15px',
        padding: '25px',
        margin: '20px 0',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    boxHover: {
        transform: 'translateY(-10px)', // Moves the box up by 10px
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Adds a stronger shadow
    },
    heading: {
        color: '#2c3e50',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '2.5rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    },
    subheading: {
        color: '#2980b9',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: '15px',
        fontSize: '1.8rem',
    },
    link: {
        color: '#2980b9',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease, text-shadow 0.3s ease',
    },
    linkHover: {
        color: '#1a5a7a',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
    },
    button: {
        display: 'inline-block',
        padding: '15px 30px',
        marginTop: '20px',
        fontSize: '18px',
        color: '#fff',
        background: 'linear-gradient(to right, #2980b9, #1a5a7a)',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'background 0.3s ease, transform 0.3s ease',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    buttonHover: {
        background: 'linear-gradient(to right, #1a5a7a, #2980b9)',
        transform: 'scale(1.1)',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    listItem: {
        marginBottom: '10px',
        fontSize: '1.1rem',
        lineHeight: '1.6',
    },
};

// Add media query styles
const mediaQueryStyles = `
    @media (max-width: 768px) {
        .box {
            margin: 10px !important;
        }
        .buttonContainer {
            justify-content: center;
        }
        h1, h2 {
            font-size: 1.8rem !important;
        }
        p {
            font-size: 1rem !important;
        }
    }
    @media (max-width: 480px) {
        .box {
            padding: 15px !important;
        }
        h1, h2 {
            font-size: 1.5rem !important;
        }
        p {
            font-size: 0.9rem !important;
        }
    }
`;

export default function Aboutus() {
    const [hoveredBox, setHoveredBox] = useState(null);

    return (
        <div style={styles.container}>
            <style>{mediaQueryStyles}</style>
            <div
                style={hoveredBox === 1 ? { ...styles.box, ...styles.boxHover } : styles.box}
                className="box"
                onMouseEnter={() => setHoveredBox(1)}
                onMouseLeave={() => setHoveredBox(null)}
            >
                <h1 style={styles.heading}>About Us</h1>
                <p>
                    Welcome to <i><b>JEE Pathfinder,</b></i> your trusted companion on the journey to conquering the{' '}
                    <i><b>JEE Exam!</b></i> We are dedicated to guiding aspirants through every step of their preparation,
                    providing expert insights, in-depth study materials, and strategic approaches to help you excel.
                </p>
                <p>
                    At <i><b>JEE Pathfinder,</b></i> we believe that every student has the potential to achieve their dream
                    engineering college. Our platform is designed to offer personalized guidance, last-year cutoffs, detailed
                    college reviews, and essential resources tailored to boost your preparation.
                </p>
            </div>
            <div
                style={hoveredBox === 2 ? { ...styles.box, ...styles.boxHover } : styles.box}
                className="box"
                onMouseEnter={() => setHoveredBox(2)}
                onMouseLeave={() => setHoveredBox(null)}
            >
                <h2 style={styles.subheading}>Our Mission</h2>
                <p>
                    At <i><b>JEE Pathfinder,</b></i> our mission is to empower <i><b>JEE aspirants</b></i> with personalized
                    guidance, comprehensive study materials, and a wide range of essential resources to help them achieve their
                    academic and career goals. We are committed to providing well-structured learning strategies, insightful exam
                    preparation techniques, and reliable college counselling to ensure every student navigates their JEE journey
                    with confidence and clarity.
                </p>
                <p>
                    Our goal is to bridge the gap between ambition and achievement by offering tailored mentorship, last-year
                    cutoffs, and detailed college insights. With <i><b>JEE Pathfinder,</b></i> you are not just preparing for an
                    exam. You are building a path to success!
                </p>
            </div>
            <div
                style={hoveredBox === 3 ? { ...styles.box, ...styles.boxHover } : styles.box}
                className="box"
                onMouseEnter={() => setHoveredBox(3)}
                onMouseLeave={() => setHoveredBox(null)}
            >
                <h2 style={styles.subheading}>Features</h2>
                <ul>
                    <li style={styles.listItem}>
                        <b>Personalized Guidance:</b> Tailored study plans and mentorship to suit your individual needs.
                    </li>
                    <li style={styles.listItem}>
                        <b>Study Materials:</b> Access to high-quality notes, practice questions, and mock tests.
                    </li>
                    <li style={styles.listItem}>
                        <b>Interactive Sessions:</b> Doubt-clearing sessions with experienced educators, IITians as well as
                        NITians.
                    </li>
                    <li style={styles.listItem}>
                        <b>Performance Tracking:</b> Tools to monitor your progress and identify areas for improvement.
                    </li>
                    <li style={styles.listItem}>
                        <b>Community Support:</b> Connect with fellow aspirants and share your journey.
                    </li>
                </ul>
                <i>And many more...</i>
            </div>
            <div
                style={hoveredBox === 4 ? { ...styles.box, ...styles.boxHover } : styles.box}
                className="box"
                onMouseEnter={() => setHoveredBox(4)}
                onMouseLeave={() => setHoveredBox(null)}
            >
                <h2 style={styles.subheading}>Contact Us</h2>
                <p>
                    At <i><b>JEE Pathfinder,</b></i> we are always here to support you on your journey to success. Whether you
                    have questions about JEE preparation strategies, need guidance on selecting the right college, or require
                    assistance with our resources, our team is ready to help.
                </p>
                <p>
                    If you need any further assistance or have specific queries, feel free to reach out to us at{' '}
                    <a
                        href="mailto:support@jeepathfinder.com"
                        style={styles.link}
                        onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                        onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
                    >
                        support@jeepathfinder.com
                    </a>
                    .
                </p>
                <p>
                    We value your feedback and inquiries, as they help us improve and serve you better. Don’t hesitate to get in
                    touch—we are just an email away! 🚀
                </p>
                <div style={styles.buttonContainer} className="buttonContainer">
                    <a
                        href="/contact"
                        style={styles.button}
                        onMouseEnter={(e) => {
                            e.target.style.background = styles.buttonHover.background;
                            e.target.style.transform = styles.buttonHover.transform;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = styles.button.background;
                            e.target.style.transform = 'none';
                        }}
                    >
                        Visit Contact Page
                    </a>
                </div>
            </div>
        </div>
    );
}