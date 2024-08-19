import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ Children }) => {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.modalBody}>{Children}</div>
    </div>
  );
};

export default Modal;
