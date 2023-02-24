import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import data from "../data/data.json";
import Item from "../components/Item";
import "./Project.scss";

const Project = () => {
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data);
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className={
        inView ? "wrapper project wrapper project--show" : "wrapper project"
      }
    >
      <h2 aria-label="mes projets">Projets</h2>
      <div className="deep-mask"></div>
      <div className="container-project">
        <div
          className={
            inView ? "project-list project-list--show" : "project-list"
          }
        >
          {items.map((item) => (
            <Item key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
