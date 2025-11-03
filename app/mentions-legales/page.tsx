import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales - Phoenix Accueil",
  description: "Mentions légales et informations juridiques de Phoenix Accueil",
};

export default function MentionsLegales() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h1 className="display-4 mb-5">Mentions Légales</h1>

          <section className="mb-5">
            <h2>Éditeur du site</h2>
            <p>
              <strong>Association Phoenix Accueil</strong><br />
              Lieu de Vie et d&apos;Accueil<br />
              9 rue de la marine<br />
              30230 Rodilhan (Gard)<br />
              France
            </p>
            <p>
              <strong>SIRET :</strong> 479 854 694 000 22<br />
              <strong>NAF :</strong> 8790A<br />
              <strong>Email :</strong> <a href="mailto:association@phoenixaccueil.org">association@phoenixaccueil.org</a><br />
              <strong>Téléphone :</strong> <a href="tel:+33680422230">06 80 42 22 30</a>
            </p>
            <p>
              <strong>Conseil d&apos;Administration :</strong><br />
              Président : Thierry Duclos<br />
              Trésorier : Laurent Thibault<br />
              Secrétaire : Pierre-Charles Mercier
            </p>
          </section>

          <section className="mb-5">
            <h2>Directeur de la publication</h2>
            <p>
              <strong>Yvette Duclos</strong><br />
              Directrice de Phoenix Accueil
            </p>
          </section>

          <section className="mb-5">
            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              [Nom de l'hébergeur]<br />
              [Adresse de l'hébergeur]<br />
              Téléphone : [Numéro de téléphone]
            </p>
          </section>

          <section className="mb-5">
            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur
              et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour
              les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est
              formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section className="mb-5">
            <h2>Protection des données personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un
              droit d'accès, de rectification et de suppression des données vous concernant.
            </p>
            <p>
              Pour exercer ces droits, vous pouvez nous contacter par email (coordonnées disponibles
              dans la section Contact).
            </p>
            <p>
              Les données collectées via le formulaire de contact sont uniquement destinées à Phoenix
              Accueil et ne seront en aucun cas cédées à des tiers. Elles sont utilisées exclusivement
              pour répondre à vos demandes d'information ou d'orientation.
            </p>
          </section>

          <section className="mb-5">
            <h2>Cookies</h2>
            <p>
              Ce site n&apos;utilise aucun cookie. Aucune donnée n&apos;est collectée via des cookies,
              aucun cookie de tracking, analytique ou publicitaire n&apos;est déposé sur votre appareil.
            </p>
          </section>

          <section className="mb-5">
            <h2>Crédits</h2>
            <p>
              Conception et développement : Site web réalisé pour Phoenix Accueil<br />
              Photos : Phoenix Accueil - Tous droits réservés
            </p>
          </section>

          <section className="mb-5">
            <h2>Liens hypertextes</h2>
            <p>
              Les liens hypertextes mis en place dans le cadre du présent site internet en direction
              d'autres sites et/ou de pages personnelles et d'une manière générale vers toutes ressources
              existantes sur internet, ne sauraient engager la responsabilité de Phoenix Accueil.
            </p>
          </section>

          <section className="mb-5">
            <h2>Litiges</h2>
            <p>
              Les présentes mentions légales sont régies par les lois françaises et toute contestation ou
              litiges qui pourraient naître de l'interprétation ou de l'exécution de celles-ci seront de
              la compétence exclusive des tribunaux français.
            </p>
          </section>

          <div className="alert alert-info mt-5">
            <p className="mb-0">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
