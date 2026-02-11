import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>

      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className="navbar-button">
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
