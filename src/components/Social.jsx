import React from "react";
import "./Social.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div className="social-icon">
      <a href="https://www.linkedin.com/in/quentin-z4b4/" target={"_blank"}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="mailto:qtzaba@gmail.com" target={"_blank"}>
        <FontAwesomeIcon icon={faAt} />
      </a>
      <a href="https://discord.com/users/Quent1#4405" target={"_blank"}>
        <FontAwesomeIcon icon={faDiscord} />
      </a>
    </div>
  );
};

export default Social;
