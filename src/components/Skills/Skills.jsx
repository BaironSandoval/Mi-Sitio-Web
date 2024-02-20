import React from "react";
import "./Skills.css";

import js from "../Images/js.png";
import react from "../Images/react.svg";
import node from "../Images/node.png";
import express from "../Images/expressjs.png";
import html from "../Images/html.webp";
import css from "../Images/css.webp";
import tailwind from "../Images/tailwind.png";
import redux from "../Images/redux.png";
import postgresql from "../Images/Postgresql_elephant.png";
import git from "../Images/git.png";
import github from "../Images/github-black.png";
import php from "../Images/php.png";
import apache from "../Images/apache.png";
import xampp from "../Images/xampp.jpg";

const images = [
  { src: js, alt: "JavaScript" },
  { src: react, alt: "React Logo" },
  { src: node, alt: "NodeJS Logo" },
  { src: express, alt: "ExpressJS Logo" },
  { src: html, alt: "HTML5 Logo" },
  { src: css, alt: "CSS3 Logo" },
  { src: tailwind, alt: "Tailwind CSSv2 Logo" },
  { src: postgresql, alt: "PostgreSQL Database" },
  { src: redux, alt: "Redux Logo" },
  { src: git, alt: "skill-icon icon-git" },
  { src: github, alt: "skill-icon icon-github" },
  { src: php, alt: "skill-icon icon-php" },
  { src: apache, alt: "Apache Server Icon" },
  { src: xampp, alt: "XAMPP Server Icon" }
];

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
                {images.map((image, index) => (
                  <li key={index}>
                    <picture>
                      <img
                        width="100"
                        height="100"
                        src={image.src}
                        alt={image.alt}
                      />
                    </picture>
                  </li>
                ))}
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
