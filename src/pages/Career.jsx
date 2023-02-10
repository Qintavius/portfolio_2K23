import React from "react";
import "./Career.scss";
import IcebergTop from "../img/iceberg-top.svg";
import { useInView } from "react-intersection-observer";

const Career = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className={
        inView ? "wrapper career wrapper career--show" : "wrapper career"
      }
    >
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
          <h2>Développeur web</h2>
          <p className="date">2022</p>
          <p className="text">
            Formation développeur intégrateur web chez OpenClassrooms
            <br />
            Diplôme obtenu en Novembre 2022
          </p>
        </div>
        <span className={inView ? "line rt line rt--show" : "line rt"}></span>
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
          <h2>Technicien informatique</h2>
          <p className="date">2021 - 2022</p>
          <p className="text">
            Formation technicien d'assistance informatique chez Simplon.co
            Clermont-Ferrand
            <br />
            Diplôme obtenu en mars 2022
          </p>
        </div>
        <span className={inView ? "line lt line lt--show" : "line lt"}></span>
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
          <h2>Autodidacte</h2>
          <p className="date">1989 - ?</p>
          <p className="text">
            HTML / CSS / Figma / Firebase / Wordpress / ...
          </p>
        </div>
        <span className={inView ? "line rt line rt--show" : "line rt"}></span>
      </div>

      <div className="water-top">
        <img className="iceberg-top" src={IcebergTop} alt="" />
      </div>
    </section>
  );
};

export default Career;
