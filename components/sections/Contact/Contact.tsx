"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implémenter l'envoi du formulaire
    console.log("Form submitted:", formData);
    alert(
      "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais."
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className={`container my-5 ${styles.contactSection}`}>
      <div className="row mb-5">
        <div className="col-lg-10 mx-auto text-center">
          <h1 className="display-3 mb-4">Contactez-nous</h1>
          <p className="lead">
            Pour toute demande d&apos;information, d&apos;orientation ou de
            partenariat, n&apos;hésitez pas à nous contacter.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow bg-phoenix-blue">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Nos lieux */}
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="card h-100 bg-phoenix-blue card-hover">
                <div className="card-body text-center">
                  <div className="fs-1 mb-3">🏡</div>
                  <h5 className="card-title">Lieu de Vie Principal</h5>
                  <p className="card-text">
                    <strong>9 rue de la marine</strong>
                    <br />
                    <strong>30230 Rodilhan (Gard)</strong>
                    <br />
                    Villa avec jardin et piscine
                    <br />
                    <small className="text-muted">
                      7 chambres individuelles
                    </small>
                    <br />
                    Capacité : 6 enfants et adolescents
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 bg-phoenix-blue card-hover">
                <div className="card-body text-center">
                  <div className="fs-1 mb-3">🏠</div>
                  <h5 className="card-title">Annexe Jeunes Majeurs</h5>
                  <p className="card-text">
                    <strong>49 rue Salomon Reinach</strong>
                    <br />
                    <strong>30000 Nîmes (Gard)</strong>
                    <br />
                    Accompagnement vers l&apos;autonomie
                    <br />
                    Capacité : 3 jeunes majeurs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Autres lieux d'activités */}
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card h-100 bg-phoenix-blue card-hover">
                <div className="card-body text-center">
                  <div className="fs-1 mb-3">🌱</div>
                  <h5 className="card-title">
                    Éco-lieu &quot;La Vigière&quot;
                  </h5>
                  <p className="card-text">
                    <strong>Remoulins, lieu-dit la Vigière (Gard)</strong>
                    <br />
                    Jardin partagé en partenariat avec le D&apos;ITEP Le Grézan
                    <br />
                    <small className="text-muted">
                      Ateliers de jardinage, travail du bois, sculpture sur
                      pierre, balades à vélo vers le Pont du Gard
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 bg-phoenix-blue card-hover">
                <div className="card-body text-center">
                  <div className="fs-1 mb-3">🏖️</div>
                  <h5 className="card-title">Séjours</h5>
                  <p className="card-text">
                    <strong>Camping de l&apos;Espiguette - Grau-du-Roi</strong>
                    <br />
                    Séjours de 3 à 4 jours (octobre à avril)
                    <br />
                    <small className="text-muted">
                      Week-ends et vacances scolaires pour détente et activités
                      éducatives
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section Partenaires */}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="text-center mb-4">Nos Partenaires</h3>
              <div className="card bg-phoenix-blue">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <h6 className="text-primary">🏫 Réseau Scolaire</h6>
                      <ul className="small">
                        <li>ITEP Les Garrigues (Sanilhac)</li>
                        <li>ITEP Le Grézan (Nîmes)</li>
                        <li>IFME Nîmes</li>
                        <li>CFA Marguerittes</li>
                        <li>IMF Avignon</li>
                        <li>CCI Nîmes</li>
                      </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                      <h6 className="text-primary">🏥 Réseau Santé</h6>
                      <ul className="small">
                        <li>Dr Henner (généraliste, Rodilhan)</li>
                        <li>Cécile Lizée (psychologue, Manduel)</li>
                        <li>Dr Trigalez (psychologue, Bouillargues)</li>
                        <li>Dr Touboul (orthodontiste)</li>
                        <li>CMP Pissevin</li>
                      </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                      <h6 className="text-primary">🤝 Autres Partenaires</h6>
                      <ul className="small">
                        <li>ASE Gard/Hérault/Val-de-Marne</li>
                        <li>Gendarmerie de Bouillargues</li>
                        <li>Objectif Gard</li>
                        <li>Association Logos (addictologie)</li>
                        <li>Association Quartier Libre</li>
                        <li>Intermarché Manduel</li>
                      </ul>
                    </div>
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
