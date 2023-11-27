import React from "react";
import "./Skills.css";

import js from "../Images/js.png"
import react from "../Images/react.svg"
import node from "../Images/node.png"
import express from "../Images/expressjs.png"
import html from "../Images/html.webp"
import css from "../Images/css.webp"
import tailwind from "../Images/tailwind.png"
import redux from "../Images/redux.png"
import postgresql from "../Images/Postgresql_elephant.png"
import git from "../Images/git.png"
import github from "../Images/github-black.png"


const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="contenido-seccion">
        <div className="container-h2">
          <h2>Skills</h2>
        </div>

        <div className="fila">
          <div className="col">
            <h3>Technical Skills</h3>
            <section id="contenedor--planetas" className="contenedor--planetas">
              <ul className="lista--planetas">
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={js}
                      alt="js"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={html}
                      alt="HTML5"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={css}
                      alt="CSS3"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={tailwind}
                      alt="Tailwind"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={react}
                      alt="REACT"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={redux}
                      alt="Redux"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={node}
                      alt="Node.JS"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={express}
                      alt="Express.JS"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={postgresql}
                      alt="PostgreSQL"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={git}
                      alt="GIT"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={github}
                      alt="Github"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={js}
                      alt="js"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={html}
                      alt="HTML5"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={css}
                      alt="CSS3"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={tailwind}
                      alt="Tailwind"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={react}
                      alt="REACT"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={redux}
                      alt="Redux"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={node}
                      alt="Node.JS"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={express}
                      alt="Express.JS"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={postgresql}
                      alt="PostgreSQL"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={git}
                      alt="GIT"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={github}
                      alt="Github"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={js}
                      alt="js"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={html}
                      alt="HTML5"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      width="100"
                      height="100"
                      src={css}
                      alt="CSS3"
                    />
                  </picture>
                </li>
              </ul>
            </section>
          </div>

          <div className="col">
            <h3>Professional Skills</h3>
            <div className="container-skills">
              <div className="container-skills-izq">
                <div className="skill">
                  <span className="container-i">
                    <i className="fa-solid fa-comments"></i>
                  </span>
                  <span className="container-text">Comunicación asertiva</span>
                </div>
                <div className="skill">
                  <span className="container-i">
                    <i className="fa-solid fa-people-group"></i>
                  </span>
                  <span className="container-text">Trabajo en Equipo</span>
                </div>
              </div>

              <div className="container-skills-der">
                <div className="skill">
                  <span className="container-i">
                    <i className="fa-brands fa-creative-commons-remix"></i>
                  </span>
                  <span className="container-text">Creatividad</span>
                </div>
                <div className="skill">
                  <span className="container-i">
                    <i className="fa-solid fa-award"></i>
                  </span>
                  <span className="container-text">Dedicación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
