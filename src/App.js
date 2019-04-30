import React from "react";
import "./App.css";
import Tracker from "./components/Tracker.js"

function App() {

  return (
    <div className="app">
      <header>
        <h1>Initiative Tracker</h1>
      </header>
      <Tracker />
    </div>
  );
}

export default App;
