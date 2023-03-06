import React from "react";
import { useInView } from "react-intersection-observer";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ScrollLine from "../components/ScrollLine";
import Line from "../components/Line";

import "./Skill.scss";

import IcebergDown from "../img/iceberg-down.svg";

const Skill = () => {
  const elements = [
    "Html",
    "Css",
    "Sass",
    "JavaScript",
    "React",
    "Npm",
    "Node.JS",
    "MongoDb",
    "Firebase",
    "GitHub",
    "Vue.JS",
    "Figma",
    "InkScape",
  ];

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className={inView ? "wrapper skill wrapper skill--show" : "wrapper skill"}
    >
      <Line icon={<FontAwesomeIcon icon={faBook} />} />
      <h2 aria-label="mes compétences">Compétences</h2>
      <div className="deep-mask"></div>
      <div className="word-mask">
        <span aria-hidden="true">css</span>
        <span aria-hidden="true">vue</span>
        <span aria-hidden="true">npm</span>
        <span aria-hidden="true">sass</span>
        <span aria-hidden="true">html</span>
        <span aria-hidden="true">figma</span>
        <span aria-hidden="true">react</span>
        <span aria-hidden="true">gitHub</span>
        <span aria-hidden="true">nodejs</span>
        <span aria-hidden="true">firebase</span>
        <span aria-hidden="true">inkScape</span>
        <span aria-hidden="true">mongoDb</span>
        <span aria-hidden="true">javaScript</span>
      </div>
      <img
        className="iceberg-down"
        src={IcebergDown}
        alt=""
        aria-hidden="true"
      />
      <div className="content-list">
        <div className="list-container">
          {elements.map((element, index) => (
            <div key={index} className="element" aria-label={element}>
              <span className="main-element">{element}</span>

              <div className="ticker-element">
                <div className="ticker-element-inner">
                  <span className="replica">{element}</span>
                  <span className="replica">{element}</span>
                  <span className="replica">{element}</span>
                  <span className="replica">{element}</span>
                  <span className="replica">{element}</span>
                  <span className="replica">{element}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollLine />
    </section>
  );
};

export default Skill;
