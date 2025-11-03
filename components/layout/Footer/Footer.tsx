"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale = "fr" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const content = {
    fr: {
      brand: "Phoenix Accueil",
      tagline: "Lieu de Vie et d'Accueil - Accompagnement bienveillant",
      address: "9 rue de la marine, 30230 Rodilhan (Gard)",
      phone: "06 80 42 22 30",
      email: "association@phoenixaccueil.org",
      quickLinks: "Liens Rapides",
      home: "Accueil",
      aboutUs: "Notre Mission",
      services: "Nos Services",
      contact: "Contact",
      legal: "Mentions légales",
      copyright: "Tous droits réservés",
      designCredit:
        "Ce site web a été conçu et créé par christophetesconidev.com",
    },
    en: {
      brand: "Phoenix Accueil",
      tagline: "Living and Welcoming Place - Caring support",
      address: "9 rue de la marine, 30230 Rodilhan (Gard)",
      phone: "06 80 42 22 30",
      email: "association@phoenixaccueil.org",
      quickLinks: "Quick Links",
      home: "Home",
      aboutUs: "Our Mission",
      services: "Our Services",
      contact: "Contact",
      legal: "Legal Notice",
      copyright: "All rights reserved",
      designCredit:
        "This website was designed and created by christophetesconidev.com",
    },
  };

  const text = locale === "en" ? content.en : content.fr;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={styles.footer}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className={styles.footerContainer}>
        {/* Section About/Tagline */}
        <div className={styles.footerSection}>
          <h2 className={styles.footerBrand}>{text.brand}</h2>
          <address className={styles.footerAddress}>
            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=9+rue+de+la+Marine+30230+Rodilhan+France"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir l'adresse dans Google Maps"
                className={styles.addressLink}
              >
                <p className={styles.footerTagline}>{text.tagline}</p>
                9 rue de la Marine
                <br />
                30230 Rodilhan (Gard)
              </a>
            </p>
            <p>
              <a
                href={`tel:+33${text.phone.replace(/\s/g, "").substring(1)}`}
                aria-label={`Appelez-nous au ${text.phone}`}
              >
                📱 {text.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${text.email}`}
                aria-label={`Envoyez un email à ${text.email}`}
              >
                📧 {text.email}
              </a>
            </p>
          </address>
        </div>

        {/* Section Quick Links */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>{text.quickLinks}</h3>
          <nav aria-label="Footer navigation">
            <ul className={styles.footerLinks}>
              <li>
                <a
                  onClick={scrollToTop}
                  style={{ cursor: "pointer" }}
                  aria-label="Retour à l'accueil"
                  className={styles.footerLink}
                >
                  {text.home}
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("notre-mission")}
                  style={{ cursor: "pointer" }}
                  aria-label="En savoir plus sur notre mission"
                  className={styles.footerLink}
                >
                  {text.aboutUs}
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("nos-services")}
                  style={{ cursor: "pointer" }}
                  aria-label="Découvrir nos services"
                  className={styles.footerLink}
                >
                  {text.services}
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("contact")}
                  style={{ cursor: "pointer" }}
                  aria-label="Nous contacter"
                  className={styles.footerLink}
                >
                  {text.contact}
                </a>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  aria-label="Consulter les mentions légales"
                  className={styles.footerLink}
                >
                  {text.legal}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {currentYear} {text.brand}. {text.copyright}
          <br />
          <a
            href="https://christophetesconidev.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.designCredit}
          >
            {text.designCredit}
          </a>
        </p>
      </div>
    </footer>
  );
}
