import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">DEV@Deakin</div>
      <input type="text" placeholder="Search..." className="search-input" />
      <div className="navbar-buttons">
        <button>Post</button>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default NavBar;
