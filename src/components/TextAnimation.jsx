import React from "react";
import { useInView } from "react-intersection-observer";
import "./TextAnimation.scss";

const TextAnimation = () => {
  const wordArrayOne = "Hello,".split("");
  const wordArrayTwo = "je suis Quentin,".split("");
  const wordArrayThree = "développeur web".split("");

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className="word-wrapper">
      <div className="word-container">
        <div className={inView ? "word-one word-one--show" : "word-one"}>
          {wordArrayOne.map((letter, index) => (
            <span className="word-letter" key={index}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>
      <div className="word-container">
        <div className={inView ? "word-two word-two--show" : "word-two"}>
          {wordArrayTwo.map((letter, index) => (
            <span className="word-letter" key={index}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>

      <div className="word-container">
        <div className={inView ? "word-three word-three--show" : "word-three"}>
          {wordArrayThree.map((letter, index) => (
            <span className="word-letter" key={index}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextAnimation;
