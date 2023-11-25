import React from 'react';
import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import SobreMi from './components/SobreMi/SobreMi';
import Skills from './components/Skills/Skills';
import Proyectos from './components/Proyectos/Proyectos';
import Curriculum from './components/Curriculum/Curriculum';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Inicio />
      <SobreMi />
      <Skills />
      <Proyectos />
      <Curriculum />
      <Contacto />
      <Footer />
    </div>
  );
};

export default App;
