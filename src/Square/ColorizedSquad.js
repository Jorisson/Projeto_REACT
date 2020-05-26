import React from "react";

function ColorizedSquad({ title, clicked }) {
  return (
    <div>
      <button onClick={clicked}>{title}</button>
    </div>
  );
}

export default ColorizedSquad;
