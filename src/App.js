import React from "react";
import "./styles/App.css";
import data from "../src/data.json";
import Collapsable from "./components/collapsable";

function App() {
  return (
    <section>
      <h1>Collapsable List</h1>
      <ul className="App">
        {data.map((item, i) => {
          return <Collapsable data={item} key={item.id} />;
        })}
      </ul>
    </section>
  );
}

export default App;
