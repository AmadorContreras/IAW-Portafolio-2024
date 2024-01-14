import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = () => {
  const [isImage2Active, setIsImage2Active] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsImage2Active((prev) => !prev); 
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-container">
        <img
          src={`/img/imagen1.jpg`}
          alt="Imagen 1"
          className={`carousel-image image1 ${isImage2Active ? 'fadeOut' : ''}`}
        />
        <img
          src={`/img/imagen2.jpg`}
          alt="Imagen 2"
          className={`carousel-image image2 ${isImage2Active ? '' : 'fadeOut'}`}
        />
      </div>
    </div>
  );
}

export default Carousel;