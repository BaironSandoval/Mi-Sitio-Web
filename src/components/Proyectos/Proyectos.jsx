import React, { useEffect } from "react";
import Swiper from "swiper";
//import "swiper/swiper-bundle.min.css";
import "./Proyectos.css";

const Proyectos = () => {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      coverflowEffect: {
        depth: 500,
        modifier: 1,
        slideShadows: false,
        rotate: 0,
        stretch: 0,
      },
    });
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="contenido-seccion">
        <div className="container-h2">
          <h2>PROYECTOS</h2>
        </div>
        <section className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a
                href="https://know-your-galaxy.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="product-content">
                  <div className="product-txt">
                    <h3>Your Galaxy</h3>
                    <p>React</p>
                  </div>
                  <div className="product-img">
                    <img src="./public/know_galaxy.jpeg" alt="pokedex" />
                  </div>
                </div>
              </a>
            </div>

            <div className="swiper-slide">
              <a
                href="https://pokedex-jcb.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="product-content">
                  <div className="product-txt">
                    <h3>Pokedex</h3>
                    <p>React</p>
                  </div>
                  <div className="product-img">
                    <img src="./public/pokedex.jpeg" alt="pokedex" />
                  </div>
                </div>
              </a>
            </div>

            <div className="swiper-slide">
              <a
                href="https://rickandmorty-jcb.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <div className="product-content">
                  <div className="product-txt">
                    <h3>Rick and Morty</h3>
                    <p>React</p>
                  </div>
                  <div className="product-img">
                    <img src="./public/rick_and_morty.jpeg" alt="pokedex" />
                  </div>
                </div>
              </a>
            </div>

            <div className="swiper-slide">
              <a
                href="https://knowyourwearherapp.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <div className="product-content">
                  <div className="product-txt">
                    <h3>Weather App</h3>
                    <p>React</p>
                  </div>
                  <div className="product-img">
                    <img src="./public/weather_app.jpeg" alt="pokedex" />
                  </div>
                </div>
              </a>
            </div>

            <div className="swiper-slide">
              <a
                href="https://users-crud-mu.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="product-content">
                  <div className="product-txt">
                    <h3>CRUD</h3>
                    <p>React</p>
                  </div>
                  <div className="product-img">
                    <img src="./public/crud.jpeg" alt="pokedex" />
                  </div>
                </div>
              </a>
            </div>

            <div className="swiper-slide">
              <a
                href="https://your-store01.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="product-content">
                  <div className="product-txt">
                    <h3>Your Store</h3>
                    <p>Javascript</p>
                  </div>
                  <div className="product-img">
                    <img src="./public/Shopping_cartone.jpeg" alt="pokedex" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Proyectos;
