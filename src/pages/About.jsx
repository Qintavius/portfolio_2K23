import React from "react";
import { useInView } from "react-intersection-observer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";

import ScrollLine from "../components/ScrollLine";
import TextAnimation from "../components/TextAnimation";
import Bear from "../img/lowPolyBear.png";
import Line from "../components/Line";

import "../styles/style.scss";
import "./About.scss";

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
      <h1 ref={ref} className="text-container">
        <TextAnimation />
      </h1>
      <div className="alt-text">
        <p>Développeur front end</p>
        <p>Web design</p>
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
      <ScrollLine />
    </section>
  );
};

export default About;
