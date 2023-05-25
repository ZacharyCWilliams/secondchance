import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
    <nav className="navbar">
      <Link className="brand" to="/home">
        Second Chance
      </Link>
      <ul className="nav">
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </ul>
    </nav>
  );

export default NavBar;
