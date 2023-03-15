import React from "react";
import "../styles/style.scss";
import "./About.scss";
import { useInView } from "react-intersection-observer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";

import TextAnimation from "../components/TextAnimation";
import Bear from "../img/lowPolyBear.webp";
import Line from "../components/Line";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section
      id="about"
      className={inView ? "wrapper about wrapper about--show" : "wrapper about"}
    >
      <Line icon={<FontAwesomeIcon icon={faUserNinja} />} />
      <h2 aria-label="à propos">à propos</h2>
      <div ref={ref} className="text-container">
        <TextAnimation />

        <div className="presentation">
          <p>Développeur front-end & Intégrateur web</p>
        </div>
      </div>

      <div
        className={
          inView ? "floe-container floe-container--show" : "floe-container"
        }
      >
        <img
          src={Bear}
          alt="Ours flotte sur la banquise"
          className={inView ? "floe floe--show" : "floe"}
        />
      </div>
    </section>
  );
};

export default About;
