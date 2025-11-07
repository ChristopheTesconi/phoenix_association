"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale = "fr" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const content = {
    fr: {
      brand: "Phoenix Accueil",
      tagline: "Lieu de Vie et d'Accueil - Accompagnement bienveillant",
      address: "9 rue de la marine, 30230 Rodilhan (Gard)",
      phone: "06 80 42 22 30",
      email: "association@phoenixaccueil.org",
      quickLinks: "Liens Rapides",
      approach: "Notre Approche",
      home: "Accueil",
      values: "Nos Valeurs",
      services: "Nos Services",
      mission: "Projet Éducatif",
      publicSpecificites: "Public & Spécificités",
      principes: "Nos Principes d'Action",
      typesAccueil: "Nos Types d'Accueil",
      lieux: "Nos Lieux de Vie",
      partenaires: "Nos Partenaires",
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
      approach: "Our Approach",
      home: "Home",
      values: "Our Values",
      services: "Our Services",
      mission: "Educational Project",
      publicSpecificites: "Public & Specificities",
      principes: "Our Action Principles",
      typesAccueil: "Our Reception Types",
      lieux: "Our Places",
      partenaires: "Our Partners",
      contact: "Contact",
      legal: "Legal Notice",
      copyright: "All rights reserved",
      designCredit:
        "This website was designed and created by christophetesconidev.com",
    },
  };

  const text = locale === "en" ? content.en : content.fr;

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
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
    } else {
      // Si on n'est pas sur la page d'accueil, naviguer vers la page d'accueil avec l'ancre
      window.location.href = `/#${sectionId}`;
    }
  };

  const scrollToTop = () => {
    if (isHomePage) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.location.href = "/";
    }
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
                <span className={styles.footerTagline}>{text.tagline}</span>
                <br />
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

        {/* Section Liens Rapides */}
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
                  onClick={() => scrollToSection("nos-valeurs")}
                  style={{ cursor: "pointer" }}
                  aria-label="Découvrir nos valeurs"
                  className={styles.footerLink}
                >
                  {text.values}
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
                  onClick={() => scrollToSection("notre-mission")}
                  style={{ cursor: "pointer" }}
                  aria-label="En savoir plus sur notre projet éducatif"
                  className={styles.footerLink}
                >
                  {text.mission}
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

        {/* Section Notre Approche */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>{text.approach}</h3>
          <nav aria-label="Footer approach navigation">
            <ul className={styles.footerLinks}>
              <li>
                <a
                  onClick={() => scrollToSection("notre-public")}
                  style={{ cursor: "pointer" }}
                  aria-label="Découvrir notre public et nos spécificités"
                  className={styles.footerLink}
                >
                  {text.publicSpecificites}
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("nos-principes-action")}
                  style={{ cursor: "pointer" }}
                  aria-label="Découvrir nos principes d'action"
                  className={styles.footerLink}
                >
                  {text.principes}
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("nos-types-accueil")}
                  style={{ cursor: "pointer" }}
                  aria-label="Découvrir nos types d'accueil"
                  className={styles.footerLink}
                >
                  {text.typesAccueil}
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("nos-lieux")}
                  style={{ cursor: "pointer" }}
                  aria-label="Découvrir nos lieux de vie"
                  className={styles.footerLink}
                >
                  {text.lieux}
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("nos-partenaires")}
                  style={{ cursor: "pointer" }}
                  aria-label="Découvrir nos partenaires"
                  className={styles.footerLink}
                >
                  {text.partenaires}
                </a>
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
