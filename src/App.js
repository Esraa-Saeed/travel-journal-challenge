import "./App.css";
import React from "react";
import data from "./data";
import Nav from "./Components/Nav";
import Travel from "./Components/Travel";

function App() {
  const travel = data.map((item) => {
    return <Travel key={item.id} {...item} />;
  });

  return (
    <div>
      <Nav />
      <section className="container">{travel}</section>
    </div>
  );
}

export default App;
