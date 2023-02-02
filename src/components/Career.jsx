import React from "react";
import "./Career.scss";
import IcebergTop from "../img/iceberg-top.svg";

const Career = () => {
  return (
    <div className="wrapper career">
      <div className="content block-1">
        <div className="sub-container">
          <h2>Développeur web</h2>
          <p className="date">2022</p>
          <p className="text">
            Formation développeur intégrateur web chez OpenClassrooms
            <br />
            Diplôme obtenu en Novembre 2022
          </p>
        </div>
        <span className="line rt"></span>
      </div>

      <div className="content block-2">
        <div className="sub-container">
          <h2>Technicien informatique</h2>
          <p className="date">2021 - 2022</p>
          <p className="text">
            Formation technicien d'assistance informatique chez Simplon.co
            Clermont-Ferrand
            <br />
            Diplôme obtenu en mars 2022
          </p>
        </div>
        <span className="line lf"></span>
      </div>

      <div className="content block-3">
        <div className="sub-container">
          <h2>Autodidacte</h2>
          <p className="date">1989 - ?</p>
          <p className="text">
            HTML / CSS / Figma / Firebase / Wordpress / ...
          </p>
        </div>
        <span className="line rt"></span>
      </div>

      <div className="water-top">
        <img className="iceberg-top" src={IcebergTop} alt="" />
      </div>
    </div>
  );
};

export default Career;
