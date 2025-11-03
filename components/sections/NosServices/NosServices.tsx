"use client";

import styles from "./NosServices.module.css";

export default function NosServices() {
  return (
    <section
      id="nos-services"
      className={`py-5 my-5 ${styles.servicesSection}`}
    >
      <div className="container">
        <h2 className="text-center mb-5">Nos Services et Accompagnement</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="d-flex">
              <div className="fs-3 me-3">📚</div>
              <div>
                <h5>Accompagnement Scolaire</h5>
                <p>
                  Suivi de la scolarité, aide aux devoirs et orientation vers
                  des parcours adaptés.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <div className="fs-3 me-3">🎓</div>
              <div>
                <h5>Accompagnement Éducatif</h5>
                <p>
                  Développement des compétences sociales et accompagnement vers
                  l&apos;autonomie.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <div className="fs-3 me-3">🏥</div>
              <div>
                <h5>Suivi Santé</h5>
                <p>
                  Accès aux soins médicaux et accompagnement dans le suivi de
                  santé globale.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <div className="fs-3 me-3">🤝</div>
              <div>
                <h5>Accompagnement Social</h5>
                <p>
                  Aide aux démarches administratives et insertion sociale et
                  professionnelle.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <div className="fs-3 me-3">🌱</div>
              <div>
                <h5>Éco-lieu &quot;La Vigière&quot;</h5>
                <p>
                  Jardin partagé à Remoulins en partenariat avec le D&apos;ITEP
                  Le Grézan. Ateliers de jardinage, travail manuel du bois,
                  sculpture sur pierre et balades à vélo vers le Pont du Gard.
                  Un espace pédagogique et apaisant.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <div className="fs-3 me-3">🏖️</div>
              <div>
                <h5>Séjours et Loisirs</h5>
                <p>
                  Séjours au camping de l&apos;Espiguette pour détente et
                  activités éducatives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Insertion Professionnelle */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-phoenix-blue text-white">
              <div className="card-body">
                <h4 className="card-title mb-3">
                  💼 Insertion Professionnelle
                </h4>
                <p className="card-text">
                  L&apos;accompagnement vers l&apos;insertion professionnelle
                  est au cœur de notre projet. Nous aidons chaque jeune à
                  construire son avenir et à définir son projet professionnel à
                  travers la rencontre et le tissage d&apos;une relation de
                  confiance.
                </p>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <h6>🎯 Nos actions :</h6>
                    <ul>
                      <li>Lien avec la Mission Locale et la Garantie Jeunes</li>
                      <li>
                        Conventions internes pour accès aux stages
                        professionnels
                      </li>
                      <li>
                        Insertion dans des clubs sportifs pour la socialisation
                      </li>
                      <li>
                        Découverte de métiers variés (bâtiment, informatique,
                        commerce, restauration, espaces verts, automobile...)
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6>🤝 Notre réseau d&apos;entrepreneurs :</h6>
                    <p className="mb-0">
                      Un solide réseau d&apos;entrepreneurs dans le bassin
                      Occitanie accepte de faire découvrir leur activité aux
                      jeunes par le biais de stages en entreprise, favorisant
                      ainsi leur orientation et leur insertion professionnelle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
