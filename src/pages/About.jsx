import React from "react";
import "../styles/style.scss";
import "./About.scss";
import IceFloe from "../img/ice-floe.svg";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className={inView ? "wrapper about wrapper--show about" : "wrapper about"}
    >
      <div className="text-container">
        <p className={inView ? "text--var-1 text--var-1--show" : "text--var-1"}>
          Je suis{" "}
          <span className={inView ? "colorized colorized--show" : "colorized"}>
            Quentin
          </span>
        </p>
        <h1 className={inView ? "title title--show" : "title"}>
          développeur front-end
        </h1>
        <p className={inView ? "text--var-2 text--var-2--show" : "text--var-2"}>
          Passioné par le monde numérique et le graphisme, je me suis tourné
          vers le développement front-end après une formation de technicien
          informatique et de développeur web.
          <br />
          <br />
          Je pratique également la photographie de rue à mes heures perdues.
        </p>
      </div>
      <div className="floe-container">
        <img
          src={IceFloe}
          alt="floating floe piece"
          className={inView ? "floe floe--show" : "floe"}
        />
      </div>
    </section>
  );
};

export default About;
