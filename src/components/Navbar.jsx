// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">MyStore</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart ({cartItemCount})</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
