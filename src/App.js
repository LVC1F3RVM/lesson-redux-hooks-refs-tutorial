import React from "react";

import "./App.css";
import Card from "./components/Calculator";
import Output from "./components/Output";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Card />
      <Output />
    </div>
  );
}

export default App;
