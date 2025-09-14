import React, { useState, useEffect } from "react";
import "../styles/carousel.css";

interface CarouselProps {
  images: string[];
  interval?: number;
}

export default function Carousel({ images, interval = 3000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Boutons manuels
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-btn prev" onClick={goToPrevious}>
        &#10094;
      </button>

      <div className="carousel-inner">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>

      <button className="carousel-btn next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
}
