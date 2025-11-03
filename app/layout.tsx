import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/NavBar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Phoenix Accueil - Lieu de Vie et d'Accueil dans le Gard",
  description: "Phoenix Accueil - Lieu de Vie et d'Accueil pour enfants, adolescents et jeunes majeurs en difficulté à Rodilhan et Nîmes (Gard). Accompagnement global et personnalisé.",
  keywords: "lieu de vie, accueil, jeunes, adolescents, protection enfance, Gard, Rodilhan, Nîmes, accompagnement éducatif",
  icons: {
    icon: '/phoenix_fav.JPG',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
