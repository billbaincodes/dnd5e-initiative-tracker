import React from "react";
import "./App.scss";
import Header from "./components/Header.js"
import Tracker from "./components/Tracker.js"
import CharGen from "./components/CharGen.js"

function App() {

  return (
    <div className="app">
      <Header />
      <CharGen />
      <Tracker />
    </div>
  );
}

export default App;
