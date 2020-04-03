import React from "react";
import "./styles/App.css";
import data from "../src/data.json";
import Collapsable from "./components/collapsable";

function App() {
  return (
    <div className="App">
      <Collapsable data={data} />
    </div>
  );
}

export default App;
