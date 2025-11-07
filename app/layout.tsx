import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/NavBar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Phoenix Accueil - Lieu de Vie et d'Accueil dans le Gard",
    template: "%s | Phoenix Accueil"
  },
  description: "Phoenix Accueil - Lieu de Vie et d'Accueil pour enfants, adolescents et jeunes majeurs en difficulté à Rodilhan et Nîmes (Gard). Accompagnement global et personnalisé en protection de l'enfance depuis 20 ans.",
  keywords: ["lieu de vie", "accueil", "jeunes", "adolescents", "protection enfance", "Gard", "Rodilhan", "Nîmes", "accompagnement éducatif", "jeunes majeurs", "mineurs non accompagnés", "MNA", "ASE"],
  authors: [{ name: "Phoenix Accueil" }],
  creator: "Phoenix Accueil",
  publisher: "Phoenix Accueil",
  metadataBase: new URL('https://www.phoenix-accueil.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.phoenix-accueil.fr',
    siteName: 'Phoenix Accueil',
    title: 'Phoenix Accueil - Lieu de Vie et d\'Accueil dans le Gard',
    description: 'Lieu de Vie et d\'Accueil pour enfants, adolescents et jeunes majeurs en protection de l\'enfance à Rodilhan et Nîmes (Gard). Accompagnement global depuis 20 ans.',
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
    title: 'Phoenix Accueil - Lieu de Vie et d\'Accueil dans le Gard',
    description: 'Lieu de Vie et d\'Accueil pour enfants, adolescents et jeunes majeurs en protection de l\'enfance à Rodilhan et Nîmes (Gard).',
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
    "@type": "Organization",
    "name": "Phoenix Accueil",
    "alternateName": "Phoenix Accueil - Lieu de Vie et d'Accueil",
    "url": "https://www.phoenix-accueil.fr",
    "logo": "https://www.phoenix-accueil.fr/phoenix_fav.JPG",
    "description": "Lieu de Vie et d'Accueil pour enfants, adolescents et jeunes majeurs en protection de l'enfance à Rodilhan et Nîmes (Gard). Accompagnement global et personnalisé depuis 20 ans.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rodilhan",
      "addressRegion": "Gard",
      "postalCode": "30230",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "FR",
      "availableLanguage": "French"
    },
    "sameAs": [],
    "foundingDate": "2004",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10"
    },
    "serviceType": ["Protection de l'enfance", "Accompagnement éducatif", "Lieu de vie et d'accueil"]
  };

  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
