import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-link">Inicio</a>
      </div>
      <div className="navbar-center">
        <h1 className="navbar-title">Biblolights</h1>
      </div>
      <div className="navbar-right">
        <a href="/login" className="navbar-link">Inicio de sesión / Registro</a>
        <div className="navbar-cart">
          <button className="cart-button">
            <img
              src="/icons/cart-icon.png"
              alt="Carrito"
              className="cart-icon"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
