import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-surface">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo" style={{ paddingLeft: 0, textDecoration: 'none' }}>
              <span className="logo-bold">TED</span>
              <span className="text-primary logo-bold">x</span>
              <span className="logo-light">CUSAT</span>
            </Link>
            <p className="body-sm footer-tagline">
              <span className="text-primary">x</span> = independently organized TED event
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Social</h4>
              <a href="https://www.instagram.com/tedxcusat?igsh=MWQ4MmlmbGRwM25h" target="_blank" rel="noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noreferrer">Twitter</a>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <Link to="/about">Privacy Policy</Link>
              <Link to="/about">Terms of Service</Link>
              <Link to="/about">Code of Conduct</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TEDxCUSAT. This independent TEDx event is operated under license from TED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
