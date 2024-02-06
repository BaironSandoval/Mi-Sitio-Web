import React, { useState, useEffect } from "react";
import "./SobreMi.css";

const SobreMi = () => {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  useEffect(() => {
    // Simular un retraso antes de mostrar el contenido
    const timer = setTimeout(() => {
      setMostrarContenido(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="sobremi" className="sobremi">
      <div className="contenido-seccion">
        <div className="container-h2">
          <h2>Sobre Mí</h2>
        </div>

        <p
          style={{
            fontSize: "24px",
            opacity: mostrarContenido ? 1 : 0,
            transform: `translateY(${mostrarContenido ? "0" : "-100%"})`,
            transition: "opacity 0.8s ease-in-out, transform 0.5s ease-in-out",
          }}
        >
          Soy <span>Software Developer</span>, apasionado por la tecnología y su
          evolución. Tengo la habilidad de comprender las necesidades del
          usuario y ofrecer soluciones efectivas. Utilizando tecnologías como:{" "}
          <span>
            {" "}
            JavaScript, React, Node.js, Express.js, PostgreSQL, HTML5, CSS3,
            Tailwind, NPM, Git, Github, entre otras.
          </span>
          Valorizo el trabajo en equipo, el constante autoaprendizaje, la
          disciplina y la comunicación asertiva. Me entrego por completo a cada
          nuevo desafío que se cruza en mi camino.
        </p>
      </div>
    </section>
  );
};

export default SobreMi;
