'use client';

import styles from './NosValeurs.module.css';

export default function NosValeurs() {
  return (
    <section id="nos-valeurs" className={`container my-5 ${styles.valeursSection}`}>
      <h2 className="text-center mb-5">Nos Valeurs</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 card-hover bg-phoenix-blue">
            <div className="card-body text-center">
              <div className="fs-1 mb-3">🏠</div>
              <h5 className="card-title">Échelle Humaine</h5>
              <p className="card-text">
                Structure à taille humaine accueillant un nombre limité de jeunes pour garantir un suivi véritablement personnalisé.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 card-hover bg-phoenix-blue">
            <div className="card-body text-center">
              <div className="fs-1 mb-3">🎯</div>
              <h5 className="card-title">Accompagnement Personnalisé</h5>
              <p className="card-text">
                Chaque jeune bénéficie d&apos;un accompagnement adapté à ses besoins, favorisant son autonomie et son insertion.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 card-hover bg-phoenix-blue">
            <div className="card-body text-center">
              <div className="fs-1 mb-3">🤝</div>
              <h5 className="card-title">Bienveillance</h5>
              <p className="card-text">
                Un cadre bienveillant et sécurisant qui favorise le développement personnel et la cohésion collective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
