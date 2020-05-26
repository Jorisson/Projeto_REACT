import React from "react";

function Square ({color}){  
  const styles = {
    width: "100px",
    height: "30px",
    backgroundColor: color
  };
    const styles1 = {
    width: "65px",
    height: "30px",
    backgroundColor: "#CD863F"
  };
    const styles2 = {
    width: "70px",
    height: "40px",
    backgroundColor: color
  };
      const styles3 = {
    width: "70px",
    height: "40px",
    backgroundColor: "silver"
  };
        const styles4 = {
    width: "50px",
    height: "20px",
    backgroundColor: "brown"
  };
  return (
    <div>
      <div style={styles} />
      <div style={styles1} />
      <div style={styles2} />
      <div style={styles3} />
      <div style={styles4} />
    </div>
    );
}

export default Square;