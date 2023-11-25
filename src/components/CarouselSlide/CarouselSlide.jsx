import React from "react";
import "./CarouselSlide.css"
const CarouselSlide = ({ title, category, institution, date, description, position }) => {
  return (
    <div className={`carousel-slide ${position}`}>
      <h3>{category}</h3>
      <div className={`item ${position}`}>
        <h4>{title}</h4>
        <span className="casa">{institution}</span>
        <span className="fecha">{date}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CarouselSlide;
