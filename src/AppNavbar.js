import React from 'react';
import './Navbar.css';

function Navbar() {
    return(
        <nav className="navbar">
        <div className="navbar-container">
          {/* <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo" className="navbar-logo-img" />
          </Link> */}
          <div className="navbar-menu">
            <ul className="navbar-list">
             
            </ul>
            <button className="navbar-button">Get started</button>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;