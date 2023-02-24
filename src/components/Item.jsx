import React, { useEffect, useRef, useState } from "react";
import Mockup from "./Mockup";
import "./Item.scss";

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

  return (
    <div className="item" ref={itemRef}>
      <div
        className="item-title"
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
        tabIndex={0}
        aria-label={props.item.title}
      >
        {props.item.title}
      </div>
      <Mockup
        key={props.item.title}
        item={props.item}
        modal={modalOpen}
        closeModal={toggle}
      />
    </div>
  );
};

export default Item;
