import React, { useState, useEffect } from "react";
import "./Curriculum.css";
import CarouselSlide from "../CarouselSlide/CarouselSlide";
import slidesData from "../../assets/slidesData.json"

const Curriculum = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const showSlide = (index) => {
      const newIndex = (index + slidesData.length) % slidesData.length;
      const translation = -newIndex * 100 + "%";
      const carouselContainer = document.querySelector(".carousel-container");

      setCurrentIndex(newIndex);

      carouselContainer.style.transition = "transform 0.5s ease-in-out";
      carouselContainer.style.transform = "translateX(" + translation + ")";
    };

    const nextSlide = () => {
      showSlide(currentIndex + 1);
    };

    const prevSlide = () => {
      showSlide(currentIndex - 1);
    };

    const nextButton = document.querySelector(".next-button");
    const prevButton = document.querySelector(".prev-button");

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    showSlide(currentIndex);

    return () => {
      nextButton.removeEventListener("click", nextSlide);
      prevButton.removeEventListener("click", prevSlide);
    };
  }, [currentIndex, slidesData]);

  return (
    <section id="curriculum" className="curriculum">
      <div className="contenido-seccion">
        <div className="container-h2">
          <h2>Curriculum</h2>
        </div>
        <div className="contenedor-carrusel">
          <div className="carousel-container">
            {slidesData.map((slide, index) => (
              <CarouselSlide key={index} {...slide} />
            ))}
          </div>  
        </div>
        

        <div className="container-buttons">
          <button className="prev-button"><i className="fa-solid fa-angle-left"></i></button>
          <button className="next-button"><i className="fa-solid fa-angle-right"></i></button>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
