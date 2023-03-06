import React from "react";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Line from "../components/Line";

import "./Career.scss";

import IcebergTop from "../img/iceberg-top.svg";

const Career = () => {
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
      <Line icon={<FontAwesomeIcon icon={faBriefcase} />} />
      <h2 aria-label="mes formations">Formations</h2>
      <div
        className={
          inView ? "content block-1 content--show block-1" : "content block-1"
        }
      >
        <div
          className={
            inView ? "sub-container sub-container--show" : "sub-container"
          }
        >
          <h3>Développeur web</h3>
          <p className="date">2022</p>
          <p className="text">
            Formation développeur web
            <br /> chez OpenClassrooms
          </p>
          <p className="grad grad--right">
            <span aria-hidden="true">Bac +2</span>
            Bac +2
            <span aria-hidden="true">Bac +2</span>
          </p>
          <p className="text">Diplôme obtenu en Novembre 2022</p>
        </div>
        <span className={inView ? "text-line rt text-line rt--show" : "text-line rt"}></span>
      </div>

      <div
        className={
          inView ? "content block-2 content--show block-2" : "content block-2"
        }
      >
        <div
          className={
            inView ? "sub-container sub-container--show" : "sub-container"
          }
        >
          <h3>Technicien informatique</h3>
          <p className="date">2021 - 2022</p>
          <p className="text">
            Formation technicien informatique
            <br /> chez Simplon.co Clermont-Ferrand
          </p>
          <p className="grad grad--left">
            <span aria-hidden="true">Bac</span>
            Bac
            <span aria-hidden="true">Bac</span>
          </p>
          <p className="text">Diplôme obtenu en mars 2022</p>
        </div>
        <span className={inView ? "text-line lt text-line lt--show" : "text-line lt"}></span>
      </div>

      <div
        className={
          inView ? "content block-3 content--show block-3" : "content block-3"
        }
      >
        <div
          className={
            inView ? "sub-container sub-container--show" : "sub-container"
          }
        >
          <h3>Autodidacte</h3>
          <p className="date">1989 - ?</p>
          <p className="text">Vue.js / Figma / Firebase / Wordpress</p>
        </div>
        <span className={inView ? "text-line rt text-line rt--show" : "text-line rt"}></span>
      </div>

      <img className="iceberg-top" src={IcebergTop} alt="" aria-hidden="true" />
      <div className="water-top" aria-hidden="true"></div>
    </section>
  );
};

export default Career;
