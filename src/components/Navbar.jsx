import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-container">
      <Link to="/" className="navbar-logo">
        <span className="logo-bold">TED</span>
        <span className="text-primary logo-bold">x</span>
        <span className="logo-light">CUSAT</span>
      </Link>

      <nav className={`navbar-pill ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/events" onClick={() => setIsOpen(false)}>Events</NavLink>
        <NavLink to="/journey" onClick={() => setIsOpen(false)}>Journey</NavLink>
        <NavLink to="/team" onClick={() => setIsOpen(false)}>Team</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
      </nav>

      <button
        className="navbar-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-icons">
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>
    </header>
  );
};

export default Navbar;
