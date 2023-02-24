import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/style.scss";
import "./About.scss";
import ScrollLine from "../components/ScrollLine";
import TextAnimation from "../components/TextAnimation";
import Bear from "../img/lowPolyBear.png";
import Langage from "../components/Langage";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section
      id="about"
      ref={ref}
      className={inView ? "wrapper about wrapper about--show" : "wrapper about"}
    >
      <Langage />
      <h2 aria-label="à propos">à propos</h2>
      <div className="text-container">
        <p className={inView ? "text--var-1 text--var-1--show" : "text--var-1"}>
          Hello,
        </p>
        <div className="mySelf">
          <p
            className={inView ? "text--var-2 text--var-2--show" : "text--var-2"}
          >
            Je suis
          </p>
          <p className={inView ? "colorized colorized--show" : "colorized"}>
            <span aria-hidden="true">Quentin</span>
            Quentin,
            <span aria-hidden="true">Quentin</span>
          </p>
        </div>
        <TextAnimation />
        <div
          className={inView ? "text--var-3 text--var-3--show" : "text--var-3"}
        >
          <p className={inView ? "subtext subtext--show" : "subtext"}>
            <span>Développeur front-end</span>
            <br />
            <span>UI / UX design</span>
          </p>
        </div>
      </div>
      <div className="floe-container">
        <img
          src={Bear}
          alt="Ours flotte sur la banquise"
          className={inView ? "floe floe--show" : "floe"}
        />
      </div>
      <ScrollLine />
    </section>
  );
};

export default About;
