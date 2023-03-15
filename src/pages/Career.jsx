import React, { Suspense, useState } from "react";
import "./Career.scss";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import IcebergTop from "../img/iceberg-top.svg";

const Line = React.lazy(() => import("../components/Line"));

const Career = () => {
  // Tabs selection
  const [tabOpen, setTabOpen] = useState(1);

  const toggle = (index) => {
    setTabOpen(index);
  };

  // Tabs indicator
  const indicator = document.querySelector("#tab-indicator");
  const tabs = document.querySelectorAll(".btn-tab");

  function slideIndicator(p) {
    indicator.style.left = p.offsetLeft + "px";
    indicator.style.width = p.offsetWidth + "px";
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      slideIndicator(e.target);
    });
  });

  // Show on scroll
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section
      id="career"
      ref={ref}
      className={
        inView ? "wrapper career wrapper career--show" : "wrapper career"
      }
    >
      <Suspense>
        <Line icon={<FontAwesomeIcon icon={faBriefcase} />} />
      </Suspense>
      <h2 aria-label="mes formations">Formations</h2>

      <div className={inView ? "inner inner--show" : "inner"}>
        <div className="tab-list">
          <button
            onClick={() => {
              toggle(1);
            }}
            className={tabOpen === 1 ? "btn-tab btn-tab--active" : "btn-tab"}
          >
            dev
          </button>
          <button
            onClick={() => {
              toggle(2);
            }}
            className={tabOpen === 2 ? "btn-tab btn-tab--active" : "btn-tab"}
          >
            tech
          </button>
          <button
            onClick={() => {
              toggle(3);
            }}
            className={tabOpen === 3 ? "btn-tab btn-tab--active" : "btn-tab"}
          >
            autre
          </button>
          <span id="tab-indicator"></span>
        </div>

        <div className="content-wrapper">
          <div
            className={
              tabOpen === 1
                ? "content-block content-block--active"
                : "content-block"
            }
          >
            <h3>Développeur / intégrateur web</h3>
            <p className="career-type">
              <span>Formation</span> <span>@</span> <span>OpenClassrooms</span>
            </p>
            <p className="date">Mai - Novembre 2022</p>
            <p className="grad">
              <span aria-hidden="true">Diplôme niv. Bac +2</span>
              Diplôme niv. Bac +2
              <span aria-hidden="true">Diplôme niv. Bac +2</span>
            </p>
            <ul className="content-list">
              <li>Intégration maquettes projets.</li>
              <li>Utilisation API.</li>
              <li>Création de site web statique et dynamique.</li>
              <li>Gestion code avec GitHub.</li>
              <li>Optimisation SEO.</li>
              <li>
                Création de contenus accessible (technologies d'assistance).
              </li>
              <li>Création serveur web Express.</li>
              <li>
                Gestion fichiers utilisateurs sur une application Express.
              </li>
              <li>
                Mise en place système d'authentification sur application
                Express.
              </li>
              <li>Développement de webapp avec React.</li>
            </ul>
          </div>

          <div
            className={
              tabOpen === 2
                ? "content-block content-block--active"
                : "content-block"
            }
          >
            <h3>Technicien informatique</h3>
            <p className="career-type">
              <span>Formation</span> <span>@</span>{" "}
              <span>Simplon.co Clermont-Ferrand</span>
            </p>
            <p className="date">Décembre 2021 - Mars 2022</p>
            <p className="grad">
              <span aria-hidden="true">Diplôme niv. Bac</span>
              Diplôme niv. Bac
              <span aria-hidden="true">Diplôme niv. Bac</span>
            </p>

            <ul className="content-list">
              <li>Support utilisateurs.</li>
              <li>Diagnostique hardware / software.</li>
              <li>Gestion droits utilisateurs.</li>
              <li>Virtualisation machines clients / serveurs.</li>
              <li>Mise en réseau de matérielles.</li>
              <li>Création architecture réseaux.</li>
              <li>
                Configuration machine clients / serveurs en fonction des
                besoins.
              </li>
              <li>
                Ticketing (gestion incidents, création solutions à destination
                des utilisateurs.)
              </li>
              <li>ITIL (escalade fonctionnelle / hiérarchique)</li>
            </ul>
          </div>

          <div
            className={
              tabOpen === 3
                ? "content-block content-block--active"
                : "content-block"
            }
          >
            <h3>Veille technologique</h3>
            <p className="career-type">Au fil de l'eau</p>
            <ul className="content-list">
              <li>Développement avec Vue.js.</li>
              <li>Création de maquette avec Figma.</li>
              <li>
                Utilisation de Firebase pour création de base de données noSQL.
              </li>
              <li>
                Utilisation de Wordpress sous solutions d'hébergement virtuel
                personnalisées (tests développements sous différents OS
                virtualisés.).
              </li>
              <li>Apprentissage méthodes UX / UI design.</li>
              <li>
                Veille technologique des langages et méthodes de développement
                orienté web.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <img className="iceberg-top" src={IcebergTop} alt="" aria-hidden="true" />
      <div className="water-top" aria-hidden="true"></div>
    </section>
  );
};

export default Career;
