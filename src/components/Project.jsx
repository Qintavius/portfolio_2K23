import React from "react";
import "./Project.scss";

const Project = () => {
  return (
    <div className="wrapper project">
      <div className="project-list">
        <ul>
          <li>BOOKI</li>
          <li>OHMYFOOD</li>
          <li>LA PANTHERE</li>
          <li>KANAP</li>
          <li>KASA</li>
          <li>
            BLEATALK
            <br />
            <span className="phonetic">[ blēt'tôk ]</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
