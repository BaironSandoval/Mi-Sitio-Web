import React, { useEffect } from "react";
import Swiper from "swiper";
import "./Proyectos.css";

import appGalaxy from "../Images/know_galaxy.gif";
import appPokedex from "../Images/pokedex.jpeg";
import appRickAndMorty from "../Images/rick_and_morty.jpeg";
import appWeather from "../Images/weather_app.jpeg";
import appCrud from "../Images/crud.jpeg";
import appShopping from "../Images/Shopping_cartone.jpeg";

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
                  <div className="product-img">
                    <img src={appGalaxy} alt="pokedex" />
                  </div>
                </div>
              </a>
            </div>

            <div className="swiper-slide">
              <a
                href="https://knowpokemonworld.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <div className="product-content">
                  <div className="product-img">
                    <img src={appPokedex} alt="pokedex" />
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
                  <div className="product-img">
                    <img src={appRickAndMorty} alt="pokedex" />
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
                  <div className="product-img">
                    <img src={appWeather} alt="pokedex" />
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
                  <div className="product-img">
                    <img src={appCrud} alt="pokedex" />
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
                  <div className="product-img">
                    <img src={appShopping} alt="pokedex" />
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
