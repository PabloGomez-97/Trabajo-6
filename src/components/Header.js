import React from 'react';
import Navbar from './nav-bar';

const Header = () => {
  return (
    <header>
      <Navbar /> {/* Incluye el componente Navbar */}
      <div className="hero-text">
        <h1>Bienvenido a la página web de Los Photoshopers</h1>
        <p>Esta página web fue creada con el objetivo de mostrar los conocimientos adquiridos en el curso de Diseño de Software.</p>
      </div>
    </header>
  );
};

export default Header;
