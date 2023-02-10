import React from "react";
import Tags from "./Tags";
import "./Mockup.scss";
import "../styles/style.scss";
import phone from "../img/phone-mockup.png";
import laptop from "../img/laptop-mockup.png";

const Mockup = ({ item, modal, closeModal }) => {
  const description = item.description;
  const picturePhone = item.pictures[0];
  const pictureLaptop = item.pictures[1];
  const website = item.website;
  const repository = item.repository;

  return (
    <div className={modal ? "container container--open" : "container"}>
      <div className="modal">
        <div className="modal-nav">
          <div className="close" onClick={closeModal}></div>
          <div className="nav-tab">
            <button className="more">
              <a href={website} target="_blank">
                En voir plus
              </a>
            </button>
            <span className="repository">
              <a href={repository} target="_blank">
                <i className="fa-brands fa-github"></i>
                Dépot GitHub
              </a>
            </span>
          </div>
        </div>
        <p className="description">{description}</p>
        <Tags stack={item.stack} />
        <div className="phone">
          <img src={phone} alt="" />
          <div className="screen">
            <img className="phone-app" src={picturePhone} alt="" />
          </div>
        </div>

        <div className="laptop">
          <img src={laptop} alt="" />
          <div className="screen-laptop">
            <img className="laptop-app" src={pictureLaptop} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mockup;
