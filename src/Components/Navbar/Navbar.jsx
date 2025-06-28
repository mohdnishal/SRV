import React from 'react';
import logo from '../../assets/sm-logo.svg'
import circle from '../../assets/circle.svg'
import './Navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <img src={logo} alt="Suchitwa Mission Logo" className="brand-logo" />
    </div>
    <ul className="navbar-links">
      <li>About GLR</li>
      <li>Institutes</li>
      <li>How it Works?</li>
      <li className="navbar-btn" style={{ display: "flex", alignItems: "center", color: '#fff' }}>
        <img src={circle} alt="User Icon" style={{ width: "18px", height: "18px", marginRight: "8px" }} />
        Register / Login
      </li>
      <div className="language-selector">
        <span>മ</span>
      </div>
    </ul>
  </nav>
);

export default Navbar;