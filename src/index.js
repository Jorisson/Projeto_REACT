import React, {useState} from "react";
import ReactDOM from "react-dom";
import Square from "./Square/Square";
import ColorizedSquad from "./Square/ColorizedSquad";

function App () {
  const [color, setColor] = useState("black");
  return (
    <div>
      <Square color={color} />
      <ColorizedSquad
        title="Vermelho"
        clicked={() => {
          setColor("red");
        }}
      />      
      <ColorizedSquad
        title="Verde"
        clicked={() => {
          setColor("green");
        }}
      />      
      <ColorizedSquad
        title="Azul"
        clicked={() => {
          setColor("blue");
        }}
      />
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
