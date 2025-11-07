export default function Accueil() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-lg-10 mx-auto text-center">
          <h1 className="display-4 mb-4">Bienvenue à Phoenix Accueil</h1>
          <p className="lead">
            Bienvenue à notre lieu de vie Phoenix Accueil situé à Rodilhan, une
            villa accueillante avec un grand jardin et une piscine, offrant un
            cadre sûr et stimulant.
          </p>
          <p className="lead">
            Nous accompagnons 6 enfants et adolescents en protection de
            l&apos;enfance - accueil judiciaires, provisoires et mineurs non
            accompagnés - ainsi que 3 jeunes majeurs dans notre annexe à Nîmes,
            favorisant leur autonomie et leur insertion.
          </p>
          <p className="lead">
            Notre structure propose un accompagnement global : scolaire,
            éducatif, social et sanitaire. Nous disposons également d&apos;un jardin
            partagé à Remoulins, collaborant avec des partenaires tels que
            l&apos;ITEP, et organisons des séjours au camping de
            l&apos;Espiguette, locataire de longue durée, pour des moments de
            détente et d&apos;apprentissage en dehors de la villa.
          </p>
        </div>
      </div>
      {/* 20 ans du LVA */}
      <section aria-label="Anniversaire des 20 ans" className="container my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <article className="card bg-primary text-white text-center p-4">
              <div className="card-body">
                <h2 className="mb-3">🎉 20 ans d&apos;engagement</h2>
                <p className="lead mb-0">
                  En 2024, Phoenix Accueil a célébré ses 20 ans
                  d&apos;accompagnement auprès des jeunes en protection de
                  l&apos;enfance. Deux décennies riches d&apos;expériences, de
                  parcours de vie et d&apos;engagement quotidien.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
}
