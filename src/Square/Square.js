import React from "react";
import "./Square.css";

function Square ({color}){
  const styles = {
      width: "100px", 
      height: "100px",
      backgroundColor: color
  };
  
  return (
    <div style={styles} />
    );
}

export default Square;