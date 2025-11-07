"use client";

import styles from "./NotreMission.module.css";

export default function NotreMission() {
  return (
    <section
      id="notre-mission"
      className={`container my-5 ${styles.missionSection}`}
    >
      {/* Hero Section */}
      <div className="row mb-5">
        <div className="col-lg-10 mx-auto text-center">
          <h1 className="display-3 mb-4">Notre Projet Éducatif</h1>
          <p className="lead">
            Phoenix Accueil est un Lieu de Vie et d&apos;Accueil qui accompagne
            des enfants, adolescents et jeunes majeurs en difficulté vers
            l&apos;autonomie et l&apos;insertion sociale et professionnelle.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="card bg-phoenix-blue card-hover">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">
                Notre Raison d&apos;Être
              </h2>
              <p className="card-text fs-5">
                Phoenix Accueil est né de la conviction que chaque jeune, quel
                que soit son parcours, mérite un accompagnement bienveillant et
                personnalisé. Comme le Phoenix qui renaît de ses cendres, nous
                croyons en la capacité de chaque jeune à se construire un avenir
                meilleur dans un cadre sécurisant et stimulant.
              </p>
              <p className="card-text fs-5">
                Notre structure à échelle humaine permet un accompagnement
                global et individualisé, favorisant le développement personnel
                et l&apos;insertion de chaque jeune accueilli.
              </p>
              <div
                className={`mt-4 p-3 bg-light rounded ${styles.missionText}`}
              >
                <p className="card-text fs-5 mb-0 text-center">
                  <strong>Notre leitmotiv :</strong>{" "}
                  <em>&quot;FAIRE / FAIRE AVEC / FAIRE-FAIRE&quot;</em>
                </p>
                <p className="card-text text-center mb-0 mt-2">
                  Le support éducatif est le quotidien. Ouvert 365 jours par an,
                  le lieu de vie reste une &quot;maison&quot; familiale où les
                  enfants et adolescents vaquent à leurs occupations : jouer,
                  étudier, dormir, apprendre. Ils sont chez eux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision et Objectifs */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card h-100 bg-primary text-white card-hover">
            <div className="card-body">
              <h3 className="card-title">🔭 Notre Vision</h3>
              <p className="card-text">
                Offrir à chaque jeune accueilli un cadre de vie sécurisant et
                bienveillant, où il peut se reconstruire, développer ses
                compétences et construire un projet de vie réaliste et
                épanouissant.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 bg-secondary text-white card-hover">
            <div className="card-body">
              <h3 className="card-title">🎯 Nos Objectifs</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  ✓ Accompagner vers l&apos;autonomie et l&apos;insertion
                </li>
                <li className="mb-2">
                  ✓ Assurer un suivi scolaire et éducatif adapté
                </li>
                <li className="mb-2">✓ Favoriser le développement personnel</li>
                <li className="mb-2">
                  ✓ Créer une dynamique de groupe positive
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Public cible et spécificités */}
      <div id="notre-public" className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <h2 className="text-center mb-4">Notre Public et Nos Spécificités</h2>
          <div className="card bg-phoenix-blue card-hover mb-4">
            <div className="card-body">
              <h5 className="card-title">
                À qui s&apos;adresse le lieu de vie ?
              </h5>
              <p className="card-text">
                Le public cible du lieu de vie est constitué de mineur·e·s qui
                ne trouvent pas leur place dans une structure traditionnelle ou
                dont le fonctionnement de celle-ci n&apos;est pas adapté à leur
                problématique. Le lieu de vie participe ainsi de la
                diversification des modes de prise en charge, dans une logique
                de complémentarité.
              </p>
              <p className="card-text mb-0">
                <strong>Nous accueillons notamment :</strong>
              </p>
              <ul className="mt-2">
                <li>Jeunes en délitement du lien social</li>
                <li>Jeunes en difficultés scolaires ou déscolarisés</li>
                <li>Jeunes ayant un rythme de vie déstructuré</li>
                <li>
                  Jeunes ayant besoin d&apos;un éloignement d&apos;un
                  environnement familial ou urbain
                </li>
                <li>Jeunes ayant connu un parcours institutionnel long</li>
                <li>
                  Jeunes ayant besoin d&apos;un cadre moins prononcé et plus
                  souple qu&apos;une structure classique
                </li>
              </ul>
            </div>
          </div>

          <div
            id="nos-specificites"
            className="card bg-secondary text-white card-hover"
          >
            <div className="card-body">
              <h5 className="card-title">Ce qui nous caractérise</h5>
              <ul className="mb-0">
                <li>Une implantation en zone urbaine</li>
                <li>
                  Un lieu ouvert sur l&apos;environnement et intégré dans un
                  réseau partenarial
                </li>
                <li>
                  Un principe de co-éducation avec les familles dans
                  l&apos;intérêt de l&apos;enfant
                </li>
                <li>
                  Un accueil sur une large tranche d&apos;âge (10 à 21 ans)
                </li>
                <li>
                  Une prise de risque éducative : fonctionnement familial et
                  éducation co-portée
                </li>
                <li>Le portage de valeurs éco-citoyennes</li>
                <li>Le travail autour de l&apos;animal avec les enfants</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Nos Principes d&apos;Action */}
      <div id="nos-principes-action" className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <h2 className="text-center mb-4">Nos Principes d&apos;Action</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 bg-phoenix-blue card-hover">
                <div className="card-body">
                  <div className="text-center mb-3 fs-1">🤝</div>
                  <h5 className="card-title text-center">Partenariat</h5>
                  <p className="card-text">
                    Nous collaborons étroitement avec les services de
                    l&apos;ASE, les établissements scolaires, l&apos;ITEP et
                    d&apos;autres partenaires pour un accompagnement coordonné.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 bg-phoenix-blue card-hover">
                <div className="card-body">
                  <div className="text-center mb-3 fs-1">👤</div>
                  <h5 className="card-title text-center">Personnalisation</h5>
                  <p className="card-text">
                    Chaque jeune bénéficie d&apos;un projet individuel adapté à
                    ses besoins, ses capacités et ses aspirations, avec un
                    contrat de séjour personnalisé.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 bg-phoenix-blue card-hover">
                <div className="card-body">
                  <div className="text-center mb-3 fs-1">🏡</div>
                  <h5 className="card-title text-center">Cadre Familial</h5>
                  <p className="card-text">
                    Notre structure offre un cadre de vie familial et
                    sécurisant, favorisant l&apos;épanouissement personnel dans
                    un environnement bienveillant.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Nos activités régulières */}
          <div className="row g-4 mt-3">
            <div className="col-md-6">
              <div className="card h-100 bg-phoenix-blue card-hover">
                <div className="card-body">
                  <div className="text-center mb-3 fs-1">📚</div>
                  <h5 className="card-title text-center">Atelier Scolaire</h5>
                  <p className="card-text">
                    Soutien aux devoirs au rythme de deux soirs par semaine dans
                    la salle de réunion ou la cuisine. Un accompagnement
                    personnalisé pour favoriser la réussite scolaire.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 bg-phoenix-blue card-hover">
                <div className="card-body">
                  <div className="text-center mb-3 fs-1">🗣️</div>
                  <h5 className="card-title text-center">
                    Conseil de Vie Sociale
                  </h5>
                  <p className="card-text">
                    Temps de parole mensuel où les jeunes se réunissent pour
                    s&apos;exprimer, faire des propositions sur le
                    fonctionnement du LVA et aborder différents thèmes.
                    L&apos;usager est au centre du dispositif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nos Types d&apos;Accueil */}
      <div id="nos-types-accueil" className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <h2 className="text-center mb-4">Nos Types d&apos;Accueil</h2>

          <div className="accordion" id="interventionAccordion">
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#accueilPermanent"
                  aria-expanded="true"
                  aria-controls="accueilPermanent"
                >
                  <div style={{ color: "#b58900" }}>
                    🏠 Accueil Permanent et Séquentiel
                  </div>
                </button>
              </h3>
              <div
                id="accueilPermanent"
                className="accordion-collapse collapse show"
                data-bs-parent="#interventionAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Accueil à temps complet pour les enfants et adolescents
                    nécessitant un cadre de vie stable et sécurisant.
                    L&apos;accueil séquentiel permet une alternance entre le
                    lieu de vie et le domicile familial selon les besoins.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#accueilUrgence"
                  aria-expanded="false"
                  aria-controls="accueilUrgence"
                  style={{ color: "#b58900" }}
                >
                  🆘 Accueil Relais et d&apos;Urgence
                </button>
              </h3>
              <div
                id="accueilUrgence"
                className="accordion-collapse collapse"
                data-bs-parent="#interventionAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Accueil temporaire en situation d&apos;urgence ou de
                    transition, permettant d&apos;offrir rapidement un cadre
                    sécurisant le temps d&apos;évaluer la situation et de
                    construire un projet adapté.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#adeo"
                  aria-expanded="false"
                  aria-controls="adeo"
                  style={{ color: "#b58900" }}
                >
                  🧭 ADEO - Accueil de Découverte, Exploration et Orientation
                </button>
              </h3>
              <div
                id="adeo"
                className="accordion-collapse collapse"
                data-bs-parent="#interventionAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Période d&apos;observation et d&apos;évaluation permettant
                    de découvrir le jeune, d&apos;explorer ses capacités et
                    besoins, et de définir ensemble l&apos;orientation la plus
                    adaptée à son projet de vie.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#jeunesMajeurs"
                  aria-expanded="false"
                  aria-controls="jeunesMajeurs"
                  style={{ color: "#b58900" }}
                >
                  🎓 Accompagnement Jeunes Majeurs
                </button>
              </h3>
              <div
                id="jeunesMajeurs"
                className="accordion-collapse collapse"
                data-bs-parent="#interventionAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Accueil dans notre annexe à Nîmes pour 3 jeunes majeurs,
                    avec un accompagnement vers l&apos;autonomie complète :
                    logement, formation professionnelle, insertion sociale et
                    gestion du quotidien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
