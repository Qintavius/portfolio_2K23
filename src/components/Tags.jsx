import React from "react";
import "../styles/style.scss";
import "./Tags.scss";

const Tags = (stack) => {
  const tags = stack;

  return (
    <div className="tag">
      {tags.stack.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  );
};

export default Tags;
