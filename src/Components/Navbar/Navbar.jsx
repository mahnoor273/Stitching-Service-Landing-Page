import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/fabrico.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Logo */}
        <Link className="navbar-brand ms-3 d-flex align-items-center" to="/">
          <img src={Logo} alt="Logo" style={{ height: '40px', width: 'auto' }} />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links + Button */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-6 custom-hover" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-6 custom-hover" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-6 custom-hover" to="/trending">Trending</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-6 custom-hover" to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Get Started Button */}
          <div className="d-flex justify-content-center justify-content-lg-end me-3 mt-3 mt-lg-0">
            <Link to="/chooseyourfabric" className="btn btn-orange px-4 py-2 fw-bold">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


