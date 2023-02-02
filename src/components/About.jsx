import React from "react";
import "./About.scss";
import "../style.scss";
import IceFloe from "../img/ice-floe.svg";

const About = () => {
  return (
    <div className="wrapper about">
      <p className="text--var-1">
        Je suis <span id="colorized">Quentin</span>
      </p>
      <h1>développeur front-end</h1>
      <p className="text--var-2">
        Passioné par le monde numérique et le graphisme, je me suis tourné vers
        le développement front-end après une formation de technicien
        informatique et de développeur web.
        <br />
        <br />
        Je pratique également la photographie de rue à mes heures perdues.
      </p>
      <img src={IceFloe} alt="floating floe piece" className="floe" />
    </div>
  );
};

export default About;
