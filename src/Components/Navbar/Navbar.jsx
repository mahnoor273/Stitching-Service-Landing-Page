import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Link import
import './Navbar.css';
import Logo from '../../assets/fabrico.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Logo */}
        <Link className="navbar-brand text-white fw-bold fs-4 ms-4" to="/">
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
          <ul className="navbar-nav mb-2 mb-lg-0 mx-auto ps-5">
            <li className="nav-item">
              <Link className="nav-link active fw-bold fs-5 mx-3 custom-hover" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fw-bold fs-5 mx-3 custom-hover" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fw-bold fs-5 mx-3 custom-hover" to="/trending">Trending</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link active fw-bold fs-5 mx-3 custom-hover" to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Download Button */}
          <div className="me-4">
            <button
              className="btn px-5 py-4 fw-bold fs-5"
              style={{ backgroundColor: '#7303a0ff', color: 'black', border: 'none' }}
            >
              <Link to="/chooseyourfabric" style={{textDecoration: 'none', color: 'white'}}> Get Started </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

