import Carousel from "@/components/sections/Carousel/Carousel";
import NosValeurs from "@/components/sections/NosValeurs/NosValeurs";
import NosServices from "@/components/sections/NosServices/NosServices";
import NotreMission from "@/components/sections/NotreMission/NotreMission";
import Contact from "@/components/sections/Contact/Contact";
import Accueil from "@/components/sections/Accueil/Accueil";

export default function Home() {
  // Images du carousel - à remplacer par vos vraies images
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&h=500&fit=crop",
      alt: "Solidarité et entraide",
      caption: "Ensemble pour un monde meilleur",
    },
    {
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=500&fit=crop",
      alt: "Projets humanitaires",
      caption: "Des projets qui changent des vies",
    },
    {
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=500&fit=crop",
      alt: "Développement durable",
      caption: "Un avenir durable pour tous",
    },
  ];

  return (
    <>
      {/* Section Accueil */}
      <Accueil />

      {/* Hero Section avec Carousel */}
      <section aria-label="Galerie d'images" className="mb-5">
        <Carousel images={carouselImages} autoPlay={true} interval={5000} />
      </section>

      {/* Section Nos Valeurs */}
      <NosValeurs />

      {/* Section Nos Services */}
      <NosServices />

      {/* Section Notre Mission */}
      <NotreMission />

      {/* Section Contact */}
      <Contact />
    </>
  );
}
