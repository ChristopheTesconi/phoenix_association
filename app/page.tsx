import Carousel from "@/components/sections/Carousel/Carousel";
import NosValeurs from "@/components/sections/NosValeurs/NosValeurs";
import NosServices from "@/components/sections/NosServices/NosServices";
import NotreMission from "@/components/sections/NotreMission/NotreMission";
import Contact from "@/components/sections/Contact/Contact";

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
    <div id="accueil">
      {/* Section Bienvenue */}
      <section className="container my-5">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <h1 className="display-4 mb-4">Bienvenue à Phoenix Accueil</h1>
            <p className="lead">
              Bienvenue à notre lieu de vie Phoenix Accueil situé à Rodilhan,
              une villa accueillante avec un grand jardin et une piscine,
              offrant un cadre sûr et stimulant.
            </p>
            <p className="lead">
              Nous accompagnons 6 enfants et adolescents en protection de
              l&apos;enfance - accueil judiciaires, provisoires et mineurs non
              accompagnés - ainsi que 3 jeunes majeurs dans notre annexe à
              Nîmes, favorisant leur autonomie et leur insertion.
            </p>
            <p className="lead">
              Notre structure propose un accompagnement global : scolaire,
              éducatif, social et santé. Nous disposons également d&apos;un
              jardin partagé à Remoulins, collaborant avec des partenaires tels
              que l&apos;ITEP, et organisons des séjours au camping de
              l&apos;Espiguette, locataire de longue durée, pour des moments de
              détente et d&apos;apprentissage en dehors de la villa.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section avec Carousel */}
      <section className="mb-5">
        <Carousel images={carouselImages} autoPlay={true} interval={5000} />
      </section>

      {/* Section Nos Valeurs */}
      <NosValeurs />

      {/* Section Nos Services */}
      <NosServices />

      {/* 20 ans du LVA */}
      <section className="container my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card bg-primary text-white text-center p-4">
              <div className="card-body">
                <h3 className="mb-3">🎉 20 ans d&apos;engagement</h3>
                <p className="lead mb-0">
                  En 2024, Phoenix Accueil a célébré ses 20 ans d&apos;accompagnement
                  auprès des jeunes en protection de l&apos;enfance. Deux décennies
                  riches d&apos;expériences, de parcours de vie et d&apos;engagement quotidien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container my-5 text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="mb-4">En savoir plus</h2>
            <p className="lead mb-4">
              Découvrez notre lieu de vie et notre approche de
              l&apos;accompagnement. Pour toute demande d&apos;information ou
              d&apos;orientation, n&apos;hésitez pas à nous contacter.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="#notre-mission" className="btn btn-primary btn-lg">
                Notre projet éducatif
              </a>
              <a href="#contact" className="btn btn-outline-primary btn-lg">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Mission */}
      <NotreMission />

      {/* Section Contact */}
      <Contact />
    </div>
  );
}
