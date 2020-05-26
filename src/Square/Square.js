import React from "react";
import styles from "./Square.module.css";

function Square (){  
  return <div className={[styles.shape, styles.color].join(" ")} />;
}

export default Square;