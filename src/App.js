import React from "react";

import "./App.css";
import Card from "./components/Calculator";
import Output from "./components/Output";
import Show from "./components/Show";


function App() {
  return (
    <div className="App">
      <Card />
      <Output />
      <Show />
    </div>
  );
}

export default App;
