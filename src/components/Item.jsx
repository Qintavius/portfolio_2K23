import React, { Suspense, useEffect, useRef, useState } from "react";
import "./Item.scss";
import { useInView } from "react-intersection-observer";

const Mockup = React.lazy(() => import("./Mockup"));

const Item = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  let itemRef = useRef();

  useEffect(() => {
    let toggle = (e) => {
      if (!itemRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", toggle);

    return () => {
      document.removeEventListener("mousedown", toggle);
    };
  });

  const toggle = () => {
    setModalOpen(!modalOpen);
  };

  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <div className="item" ref={itemRef}>
      <div
        ref={ref}
        className={inView ? "item-title item-title--show" : "item-title"}
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
        tabIndex={0}
        aria-label={props.item.title}
      >
        {props.item.title}
      </div>
      <img className="preview" src={props.item.picture} loading="lazy" alt="" />

      <div
        className={
          modalOpen
            ? "container-drawer container-drawer--open"
            : "container-drawer"
        }
      ></div>
      <Suspense>
        <Mockup
          key={props.item.title}
          item={props.item}
          modal={modalOpen}
          closeModal={toggle}
        />
      </Suspense>
    </div>
  );
};

export default Item;
