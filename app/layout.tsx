import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/NavBar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Phoenix Accueil - Lieu de Vie et d'Accueil Gard | Rodilhan & Nîmes",
    template: "%s | Phoenix Accueil"
  },
  description: "Lieu de Vie et d'Accueil pour enfants, adolescents et jeunes majeurs en protection de l'enfance à Rodilhan et Nîmes (Gard). Accompagnement éducatif personnalisé, accueil permanent et séquentiel. 20 ans d'expérience dans l'accompagnement global des jeunes en difficulté.",
  keywords: ["lieu de vie et d'accueil", "LVA", "protection de l'enfance", "Gard", "Rodilhan", "Nîmes", "accompagnement éducatif", "jeunes majeurs", "mineurs non accompagnés", "MNA", "ASE", "accueil permanent", "accueil séquentiel", "ITEP", "jeunes en difficulté", "Occitanie"],
  authors: [{ name: "Phoenix Accueil" }],
  creator: "Phoenix Accueil",
  publisher: "Phoenix Accueil",
  metadataBase: new URL('https://www.phoenixaccueil.fr'),
  alternates: {
    canonical: '/',
  },
  applicationName: 'Phoenix Accueil',
  category: 'social services',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.phoenixaccueil.fr',
    siteName: 'Phoenix Accueil',
    title: 'Phoenix Accueil - Lieu de Vie et d\'Accueil Gard | Rodilhan & Nîmes',
    description: 'Lieu de Vie et d\'Accueil pour enfants, adolescents et jeunes majeurs en protection de l\'enfance à Rodilhan et Nîmes (Gard). Accompagnement éducatif personnalisé, accueil permanent et séquentiel. 20 ans d\'expérience.',
    images: [
      {
        url: '/phoenix_fav.JPG',
        width: 1200,
        height: 630,
        alt: 'Phoenix Accueil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phoenix Accueil - Lieu de Vie et d\'Accueil Gard | Rodilhan & Nîmes',
    description: 'Lieu de Vie et d\'Accueil pour enfants, adolescents et jeunes majeurs en protection de l\'enfance. Accompagnement éducatif personnalisé depuis 20 ans.',
    images: ['/phoenix_fav.JPG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/phoenix_fav.JPG',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "HealthAndBeautyBusiness"],
    "name": "Phoenix Accueil",
    "alternateName": "Association Phoenix Accueil",
    "legalName": "Association Phoenix Accueil",
    "url": "https://www.phoenixaccueil.fr",
    "logo": "https://www.phoenixaccueil.fr/phoenix_fav.JPG",
    "image": "https://www.phoenixaccueil.fr/phoenix_fav.JPG",
    "description": "Lieu de Vie et d'Accueil pour enfants, adolescents et jeunes majeurs en protection de l'enfance à Rodilhan et Nîmes (Gard). Accompagnement global et personnalisé depuis 20 ans.",
    "telephone": "+33680422230",
    "email": "association@phoenixaccueil.org",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9 rue de la marine",
      "addressLocality": "Rodilhan",
      "addressRegion": "Occitanie",
      "postalCode": "30230",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.8281",
      "longitude": "4.4266"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33680422230",
      "contactType": "customer service",
      "email": "association@phoenixaccueil.org",
      "areaServed": "FR",
      "availableLanguage": ["French"]
    },
    "sameAs": [],
    "foundingDate": "2004",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "Place",
      "name": "Gard, Occitanie, France"
    },
    "slogan": "Comme le Phoenix qui renaît de ses cendres",
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accueil permanent et séquentiel",
          "description": "Accueil à temps complet pour les enfants et adolescents nécessitant un cadre de vie stable et sécurisant"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accompagnement jeunes majeurs",
          "description": "Accueil dans notre annexe à Nîmes pour 3 jeunes majeurs, avec un accompagnement vers l'autonomie complète"
        }
      }
    ]
  };

  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="RCXbaBntQ_8NnTbuy8S4KirkBMR7M9cPNxvCs2gRb1o" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-light">
        <Navbar locale="fr" />
        <main>{children}</main>

        {/* Bootstrap Bundle with Popper */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Footer locale="fr" />
      </body>
    </html>
  );
}
