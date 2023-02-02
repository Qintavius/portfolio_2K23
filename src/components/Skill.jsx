import React from "react";
import "./Skill.scss";
import IcebergDown from "../img/iceberg-down.svg";

const Skill = () => {
  return (
    <div className="wrapper skill">
      <div className="deep-mask">
        <img
          className="iceberg-down"
          src={IcebergDown}
          alt="iceberg deep part"
        />
      </div>
      <div className="content-list">
        <ul>
          <li>Html</li>
          <li>Css</li>
          <li>Sass</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>Node JS</li>
          <li>Npm</li>
          <li>InkScape</li>
          <li>Figma</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;
