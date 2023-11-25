import React from "react";
import "./Inicio.css";
const Inicio = () => {
  return (
    <section id="inicio" className="inicio">
      <div className="contenido-banner">
        <div className="contenido-banner">
          <div className="contenedor-img">
            <img src="./public/foto-portafolio.png" alt="mi-foto" />
          </div>
          <div className="container-titles">
            <h1>BAIRON SANDOVAL</h1>
            <h2>Software Developer</h2>
          </div>
          <div className="redes">
            <a
              href="https://www.linkedin.com/in/baironsandoval/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="mailto:baironalfonsosandovalnino@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>

            <a
              href="https://wa.me/573126127202"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://github.com/BaironSandoval"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <a
            href="https://drive.google.com/uc?export=download&id=1rFwmaZ5EKWTFTd9kjxaj1i5HgDtsP7pw"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn-inicio">
              Descargar CV
              <i className="fa-solid fa-download"></i>
              <span className="overlay"></span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
