"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Photos.module.css";

interface PhotoData {
  src: string;
  alt: string;
  caption: string;
}

export default function Photos() {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<PhotoData | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const photos: PhotoData[] = [
    {
      src: "/PlusdePhotos/ecolieu.png",
      alt: "Écolieu",
      caption: "Éco-lieu La Vigière - Jardin partagé à Remoulins",
    },
    {
      src: "/PlusdePhotos/piscine.png",
      alt: "Piscine",
      caption: "Piscine du lieu de vie - Moments de détente et de convivialité",
    },
    {
      src: "/PlusdePhotos/sapinnoel.png",
      alt: "Sapin de Noël",
      caption: "Sapin de Noël - Moments festifs partagés ensemble",
    },
    {
      src: "/PlusdePhotos/bureau.jpeg",
      alt: "Bureau",
      caption: "Bureau - Espace de travail calme pour les devoirs et l'étude",
    },
    {
      src: "/PlusdePhotos/chambre.jpeg",
      alt: "Chambre",
      caption: "Chambre individuelle - Un espace personnel pour chaque jeune",
    },
    {
      src: "/PlusdePhotos/cusine.jpeg",
      alt: "Cuisine",
      caption: "Cuisine - Lieu de partage et d'apprentissage du quotidien",
    },
    {
      src: "/PlusdePhotos/sallemanger.jpeg",
      alt: "Salle à manger",
      caption: "Salle à manger - Moments de repas conviviaux en famille",
    },
    {
      src: "/PlusdePhotos/salon.jpeg",
      alt: "Salon",
      caption: "Salon - Espace de détente et de vie commune",
    },
  ];

  const toggle = () => setIsOpen((prev) => !prev);

  const openLightbox = (photo: PhotoData) => {
    setLightboxImage(photo);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : "0px";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    if (lightboxImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [lightboxImage]);

  return (
    <div className={`card bg-phoenix-blue text-white ${styles.accordionCard}`}>
      <div
        className={`card-body ${styles.accordionHeader}`}
        onClick={toggle}
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex align-items-center">
          <button
            className={styles.toggleBtn}
            aria-expanded={isOpen}
            aria-controls="photos-content"
            aria-label="Toggle plus de photos"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          >
            <span className={styles.toggleIcon}>{isOpen ? "−" : "+"}</span>
          </button>
          <h4 className="card-title mb-0 ms-3">📸 Plus de photos</h4>
        </div>
      </div>

      <div
        id="photos-content"
        ref={contentRef}
        className={styles.accordionContent}
      >
        <div className={`card-body pt-0 ${styles.photoGallery}`}>
          {photos.map((photo, index) => (
            <div
              key={index}
              className={styles.photoWrapper}
              onClick={() => openLightbox(photo)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openLightbox(photo);
                }
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                className={styles.photo}
                width={250}
                height={250}
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent}>
            <button
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="Fermer"
            >
              ×
            </button>
            <div className={styles.lightboxImageWrapper}>
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className={styles.lightboxImage}
                onClick={(e) => e.stopPropagation()}
                fill
                style={{ objectFit: "contain" }}
              />
              {lightboxImage.caption && (
                <div className={styles.photoCaption}>
                  <h5>{lightboxImage.caption}</h5>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
