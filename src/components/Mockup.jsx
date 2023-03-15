import React from "react";
import Tags from "./Tags";
import "./Mockup.scss";
import "../styles/style.scss";

const Mockup = ({ item, modal, closeModal }) => {
  const title = item.title;
  const type = item.type;
  const receiver = item.receiver;
  const descriptions = item.description;
  const phone = item.mobile;
  const website = item.website;
  const repository = item.repository;

  return (
    <div className={modal ? "container container--open" : "container"}>
      <div className="modal">
        <div className="modal-header">
          <h3>{title}</h3>
          <div className="close" onClick={closeModal}></div>
        </div>

        <div className="modal-content">
          <div className="button-wrapper">
            <button className="more">
              <a href={website} target="_blank">
                Aller sur le site
              </a>
            </button>
            <button className="repository">
              <a href={repository} target="_blank">
                <i className="fa-brands fa-github"></i>
                Repository
              </a>
            </button>
          </div>

          <div className="hardware">
            <div className="phone">
              <div className="screen">
                <img className="screenshot" src={phone} loading="lazy" alt="" />
              </div>
            </div>
          </div>

          <div className="textual">
            <div className="type">
              <h4>Type de projet</h4>
              <p>{type}</p>
              <p>{receiver}</p>
            </div>

            <div className="description">
              <h4>Description</h4>
              <ul>
                {descriptions.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>

            <div className="stack">
              <h4>Stack</h4>
              <Tags stack={item.stack} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mockup;
