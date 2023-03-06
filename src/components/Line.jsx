import React from "react";
import { useInView } from "react-intersection-observer";
import "./Line.scss";

const Line = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="line">
      <i>{props.icon}</i>
      <span className={inView ? "gradient-line gradient-line--show" : "gradient-line"}></span>
    </div>
  );
};

export default Line;
