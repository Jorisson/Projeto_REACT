import React from "react";
import ReactDOM from "react-dom";
import Square from "./Square/Square";

function App () {
  return <Square color="red" />;
}

ReactDOM.render(<App />, document.getElementById('root'));
