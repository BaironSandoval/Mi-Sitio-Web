import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="contenedor-header">
      <header>
        <div className="logo">
          <a href="#">Bairon <i className="fa-solid fa-laptop-code"></i></a>
        </div>
        <nav id="nav" className={menuVisible ? 'responsive' : ''}>
          <ul>
            <li>
              <a href="#inicio" className="inicio1" onClick={hideMenu}>
                INICIO
              </a>
            </li>
            <li>
              <a href="#sobremi" className="sobremi2" onClick={hideMenu}>
                SOBRE MI
              </a>
            </li>
            <li>
              <a href="#skills" className="skills3" onClick={hideMenu}>
                SKILLS
              </a>
            </li>
            <li>
              <a href="#portfolio" className="portfolio5" onClick={hideMenu}>
                PROYECTOS
              </a>
            </li>
            <li>
              <a href="#curriculum" className="curriculum4" onClick={hideMenu}>
                CURRICULUM
              </a>
            </li>
            <li>
              <a href="#contacto" className="contacto6" onClick={hideMenu}>
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
        <div className="nav-responsive" id="botonHamburguesa" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>
  );
};

export default Header;
