'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

interface NavbarProps {
  locale?: string;
}

export default function Navbar({ locale = 'fr' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavigation = (sectionId?: string) => {
    if (isHomePage) {
      if (sectionId) {
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
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Si on n'est pas sur la page d'accueil, naviguer vers la page d'accueil avec l'ancre
      window.location.href = sectionId ? `/#${sectionId}` : '/';
    }
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const navLinks = {
    fr: {
      home: 'Accueil',
      values: 'Nos Valeurs',
      services: 'Nos Services',
      mission: 'Projet Éducatif',
      approach: 'Notre Approche',
      publicSpecificites: 'Public & Spécificités',
      principes: 'Nos Principes d\'Action',
      typesAccueil: 'Nos Types d\'Accueil',
      lieux: 'Nos Lieux de Vie',
      partenaires: 'Nos Partenaires',
      contact: 'Contact'
    },
    en: {
      home: 'Home',
      values: 'Our Values',
      services: 'Our Services',
      mission: 'Educational Project',
      approach: 'Our Approach',
      publicSpecificites: 'Public & Specificities',
      principes: 'Our Action Principles',
      typesAccueil: 'Our Reception Types',
      lieux: 'Our Places',
      partenaires: 'Our Partners',
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
                onClick={() => handleNavigation()}
                style={{ cursor: 'pointer' }}
              >
                {links.home}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => handleNavigation('nos-valeurs')}
                style={{ cursor: 'pointer' }}
              >
                {links.values}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => handleNavigation('nos-services')}
                style={{ cursor: 'pointer' }}
              >
                {links.services}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => handleNavigation('notre-mission')}
                style={{ cursor: 'pointer' }}
              >
                {links.mission}
              </a>
            </li>
            <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
              <a
                className="nav-link dropdown-toggle"
                onClick={toggleDropdown}
                style={{ cursor: 'pointer' }}
                role="button"
                aria-expanded={dropdownOpen}
              >
                {links.approach}
              </a>
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleNavigation('notre-public')}
                    style={{ cursor: 'pointer' }}
                  >
                    {links.publicSpecificites}
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleNavigation('nos-principes-action')}
                    style={{ cursor: 'pointer' }}
                  >
                    {links.principes}
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleNavigation('nos-types-accueil')}
                    style={{ cursor: 'pointer' }}
                  >
                    {links.typesAccueil}
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleNavigation('nos-lieux')}
                    style={{ cursor: 'pointer' }}
                  >
                    {links.lieux}
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleNavigation('nos-partenaires')}
                    style={{ cursor: 'pointer' }}
                  >
                    {links.partenaires}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => handleNavigation('contact')}
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
