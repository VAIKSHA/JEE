import React from 'react';
import { Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  const footerStyle = {
    backgroundColor: '#1a1a1a',
    color: '#ccc',
    padding: '50px 10px',
    textAlign: 'center',
    borderTop: '2px solid #444',
  };

  const linkStyle = {
    color: '#ccc',
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#f39c12',
  };

  const socialIconStyle = {
    color: 'white',
    margin: '20px 20px',
    fontSize: '2rem',
    transition: 'transform 0.3s ease, color 0.3s ease',
  };

  const socialIconHoverStyle = {
    transform: 'scale(1.2)',
    color: '#f39c12',
  };

  const navbarLinksStyle = {
    marginBottom: '20px',
  };

  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 JEE Path Finder. All rights reserved.</p>
      <div style={navbarLinksStyle}>
        <a
          href="/"
          className="nav-link"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
        >
          Home
        </a>
        <a
          href="/about"
          className="nav-link"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
        >
          About
        </a>
        <a
          href="/book-slot"
          className="nav-link"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
        >
          Services
        </a>
        <a
          href="/contact"
          className="nav-link"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
        >
          Contact
        </a>
      </div>
      <div style={socialIconsStyle}>
        <a
          href="https://www.youtube.com/@vishal.sharma40/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={(e) => {
            e.target.style.transform = socialIconHoverStyle.transform;
            e.target.style.color = socialIconHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.color = socialIconStyle.color;
          }}
        >
          <YouTubeIcon style={socialIconStyle} />
        </a>
        <a
          href="https://www.twitter.com/@Vishal6143214"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={(e) => {
            e.target.style.transform = socialIconHoverStyle.transform;
            e.target.style.color = socialIconHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.color = socialIconStyle.color;
          }}
        >
          <Twitter style={socialIconStyle} />
        </a>
        <a
          href="https://www.instagram.com/vishal.sharma40/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={(e) => {
            e.target.style.transform = socialIconHoverStyle.transform;
            e.target.style.color = socialIconHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.color = socialIconStyle.color;
          }}
        >
          <Instagram style={socialIconStyle} />
        </a>
        <a
          href="https://www.linkedin.com/in/vishalsharma40/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={(e) => {
            e.target.style.transform = socialIconHoverStyle.transform;
            e.target.style.color = socialIconHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.color = socialIconStyle.color;
          }}
        >
          <LinkedIn style={socialIconStyle} />
        </a>
      </div>
    </footer>
  );
}