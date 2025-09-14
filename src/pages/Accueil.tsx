import React from "react";
import "../styles/accueil.css";
import Carousel from "../components/Carousel";
import piscine from "../assets/photos/piscine.jpg";
import chambre from "../assets/photos/chambre.jpg";
import jardin from "../assets/photos/jardin.jpg";
import salon from "../assets/photos/salon.jpg";

export default function Accueil() {
  const images = [piscine, chambre, jardin, salon];

  return (
    <section>
      <Carousel images={images} interval={4000} />
    </section>
  );
}
