"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Photos.module.css";

export default function Photos() {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
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
          <div
            className={styles.photoWrapper}
            onClick={() => openLightbox("/PlusdePhotos/ecolieu.png")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openLightbox("/PlusdePhotos/ecolieu.png");
              }
            }}
          >
            <Image
              src="/PlusdePhotos/ecolieu.png"
              alt="Écolieu"
              className={styles.photo}
              width={250}
              height={250}
            />
          </div>
          <div
            className={styles.photoWrapper}
            onClick={() => openLightbox("/PlusdePhotos/piscine.png")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openLightbox("/PlusdePhotos/piscine.png");
              }
            }}
          >
            <Image
              src="/PlusdePhotos/piscine.png"
              alt="Piscine"
              className={styles.photo}
              width={250}
              height={250}
            />
          </div>
          <div
            className={styles.photoWrapper}
            onClick={() => openLightbox("/PlusdePhotos/sapinnoel.png")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openLightbox("/PlusdePhotos/sapinnoel.png");
              }
            }}
          >
            <Image
              src="/PlusdePhotos/sapinnoel.png"
              alt="Sapin de Noël"
              className={styles.photo}
              width={250}
              height={250}
            />
          </div>
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
            <Image
              src={lightboxImage}
              alt="Image agrandie"
              className={styles.lightboxImage}
              onClick={(e) => e.stopPropagation()}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
