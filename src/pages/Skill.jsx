import React from "react";
import "./Skill.scss";
import ScrollLine from "../components/ScrollLine";
import IcebergDown from "../img/iceberg-down.svg";
import { useInView } from "react-intersection-observer";

const Skill = () => {
  const elements = [
    "Html",
    "Css",
    "Sass",
    "JavaScript",
    "React",
    "Vue.JS",
    "Node.JS",
    "Firebase",
    "MongoDb",
    "Npm",
    "InkScape",
    "Figma",
    "Git Bash",
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
      <h2 aria-label="mes compétences">Compétences</h2>
      <div className="deep-mask"></div>
      <img
        className="iceberg-down"
        src={IcebergDown}
        alt=""
        aria-hidden="true"
      />
      <div className="content-list">
        <ul>
          {elements.map((element, index) => (
            <li
              key={index}
              className={inView ? "element element--show" : "element"}
              aria-label={element}
            >
              {element}
            </li>
          ))}
        </ul>
      </div>
      <ScrollLine />
    </section>
  );
};

export default Skill;
