import React from "react";
import { useInView } from "react-intersection-observer";
import "./TextAnimation.scss";

const TextAnimation = () => {
  const wordArray = "développeur web".split("");

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className="word-wrapper">
      {wordArray.map((item, index) => (
        <h1
          className={inView ? "word-letter word-letter--show" : "word-letter"}
          key={index}
        >
          <p>{item}</p>
        </h1>
      ))}
    </div>
  );
};

export default TextAnimation;
