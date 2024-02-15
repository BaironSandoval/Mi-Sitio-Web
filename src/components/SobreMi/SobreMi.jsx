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
          Soy <span>Software Developer</span>, apasionado por lacreación y mantenimiento de aplicaciones, colaborador destacado en equipos diversos. Siempre listo para explorar las últimas tecnologías, disfruto enfrentar desafíos de manera innovadora y estoy comprometido con entregar soluciones de primera calidad.
        </p>
      </div>
    </section>
  );
};

export default SobreMi;
