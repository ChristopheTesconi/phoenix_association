import Carousel from "@/components/sections/Carousel/Carousel";
import NosValeurs from "@/components/sections/NosValeurs/NosValeurs";
import NosServices from "@/components/sections/NosServices/NosServices";
import NotreMission from "@/components/sections/NotreMission/NotreMission";
import Contact from "@/components/sections/Contact/Contact";
import Accueil from "@/components/sections/Accueil/Accueil";

export default function Home() {
  return (
    <>
      {/* Section Accueil */}
      <Accueil />

      {/* Hero Section avec Carousel */}
      <section aria-label="Galerie d'images" className="mb-5">
        <Carousel />
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
