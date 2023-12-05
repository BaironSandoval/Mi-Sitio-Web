import React, { useState } from 'react';
import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import SobreMi from './components/SobreMi/SobreMi';
import Skills from './components/Skills/Skills';
import Proyectos from './components/Proyectos/Proyectos';
import Curriculum from './components/Curriculum/Curriculum';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header />
      <Inicio />
      <SobreMi />
      <Skills />
      <Proyectos />
      <Curriculum />
      <Contacto />
      <Footer />

      <button
        className="floating-button"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <i className="fa-solid fa-lightbulb"></i> : <i className="fa-regular fa-lightbulb"></i>}
      </button>
    </div>
  );
};

export default App;
