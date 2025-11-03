'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  locale?: string;
}

export default function Navbar({ locale = 'fr' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navLinks = {
    fr: {
      home: 'Accueil',
      values: 'Nos Valeurs',
      services: 'Nos Services',
      mission: 'Projet Éducatif',
      contact: 'Contact'
    },
    en: {
      home: 'Home',
      values: 'Our Values',
      services: 'Our Services',
      mission: 'Educational Project',
      contact: 'Contact'
    }
  };

  const links = locale === 'en' ? navLinks.en : navLinks.fr;

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark sticky-top ${styles.navbar}`}>
      <div className="container-fluid">
        <Link href="/" className={`navbar-brand ${styles.navbarBrand}`}>
          <Image
            src="/logo.png"
            alt="Phoenix Association"
            width={120}
            height={40}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <button
          className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ cursor: 'pointer' }}
              >
                {links.home}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection('nos-valeurs')}
                style={{ cursor: 'pointer' }}
              >
                {links.values}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection('nos-services')}
                style={{ cursor: 'pointer' }}
              >
                {links.services}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection('notre-mission')}
                style={{ cursor: 'pointer' }}
              >
                {links.mission}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection('contact')}
                style={{ cursor: 'pointer' }}
              >
                {links.contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
