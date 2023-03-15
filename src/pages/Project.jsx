import React, { Suspense, useEffect, useState } from "react";
import "./Project.scss";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

import data from "../data/data.json";

const Item = React.lazy(() => import("../components/Item"));
const Line = React.lazy(() => import("../components/Line"));

const Project = () => {
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data);
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="projects"
      className={
        inView ? "wrapper project wrapper project--show" : "wrapper project"
      }
    >
      <Suspense>
        <Line icon={<FontAwesomeIcon icon={faFlask} />} />
      </Suspense>
      <h2 aria-label="mes projets">Projets</h2>
      <div className="deep-mask"></div>
      <div className="container-project">
        <div className="project-list">
          <Suspense>
            {items.map((item) => (
              <Item key={item.title} item={item} />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Project;
