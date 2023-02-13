import React from "react";
import "./Skill.scss";
import IcebergDown from "../img/iceberg-down.svg";
import { useInView } from "react-intersection-observer";

const Skill = () => {
  const elements = [
    "Html",
    "Css",
    "Sass",
    "JavaScript",
    "React JS",
    "Node JS",
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
      ref={ref}
      className={inView ? "wrapper skill wrapper skill--show" : "wrapper skill"}
    >
      <div className="deep-mask">
        <img
          className="iceberg-down"
          src={IcebergDown}
          alt="iceberg deep part"
        />
      </div>
      <div className="content-list">
        <ul>
          {elements.map((element, index) => (
            <li
              key={index}
              className={inView ? "element element--show" : "element"}
            >
              {element}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skill;
