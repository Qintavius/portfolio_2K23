import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "./Nav.scss";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  let btnRef = useRef();

  useEffect(() => {
    const open = (b) => {
      if (!btnRef.current.contains(b.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", open);

    return () => {
      document.removeEventListener("click", open);
    };
  });

  return (
    <nav className="nav-bar" ref={btnRef}>
      <div
        className={
          isOpen
            ? "hamburger-container hamburger-container--hidden"
            : "hamburger-container"
        }
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <button
          className={isOpen ? "hamburger hamburger--active" : "hamburger"}
          aria-label="Bouton ouvrir menu"
        >
          <span
            className={isOpen ? "ham-line ham-line--active" : "ham-line"}
          ></span>
        </button>
      </div>
      <div
        className={
          isOpen ? "menu-container menu-container--open" : "menu-container"
        }
      >
        <button
          className="menu-close"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          tabIndex={0}
          aria-label="Bouton fermer menu"
        ></button>

        <div className="circle-container">
          <div className="circle">
            <div className="logo"></div>
          </div>
        </div>

        <ul className="nav-tab">
          <li>
            <Link
              onTouchEnd={() => setIsOpen(false)}
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              aria-label="Aller sur à propos"
              tabIndex={0}
            >
              à propos,
            </Link>
          </li>

          <li>
            <Link
              onTouchEnd={() => setIsOpen(false)}
              to="career"
              spy={true}
              smooth={true}
              duration={1000}
              aria-label="Aller sur parcours"
              tabIndex={0}
            >
              Parcours,
            </Link>
          </li>

          <li>
            <Link
              onTouchEnd={() => setIsOpen(false)}
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
              aria-label="Aller sur compétences"
              tabIndex={0}
            >
              Compétences,
            </Link>
          </li>

          <li>
            <Link
              onTouchEnd={() => setIsOpen(false)}
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
              aria-label="Aller sur projets"
              tabIndex={0}
            >
              Projets.
            </Link>
          </li>
        </ul>

        <div id="repository">
          <button>
            <a href="https://github.com/Qintavius" target={"_blank"}>
              <FontAwesomeIcon icon={faGithub} />
              <span>Mon dépot GitHub.</span>
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
