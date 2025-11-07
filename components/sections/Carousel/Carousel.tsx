"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";
import PlusdePhotos from "../Photos/Photos";

export default function Carousel() {
  const images = [
    {
      src: "/Carousel/accueil-phoenix.jpeg",
      alt: "Accueil Phoenix",
      caption: "Accueil Phoenix",
    },
    {
      src: "/Carousel/fresque.png",
      alt: "Fresque murale",
      caption: "Fresque murale",
    },
    {
      src: "/Carousel/neige.png",
      alt: "Paysage enneigé",
      caption: "Paysage enneigé",
    },
    {
      src: "/Carousel/salon.png",
      alt: "Salon convivial",
      caption: "Salon convivial",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlay = true;
  const interval = 5000;

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        Aucune image à afficher
      </div>
    );
  }

  return (
    <>
      <div className={styles.carouselContainer}>
        <button
          onClick={goToPrevious}
          className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
          aria-label="Image précédente"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselImageWrapper}>
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className={styles.carouselImage}
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
          {images[currentIndex].caption && (
            <div className={styles.carouselCaption}>
              <h5>{images[currentIndex].caption}</h5>
            </div>
          )}
        </div>

        <button
          onClick={goToNext}
          className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
          aria-label="Image suivante"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className={styles.carouselIndicators}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.indicatorActive : ""
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <PlusdePhotos />
    </>
  );
}
