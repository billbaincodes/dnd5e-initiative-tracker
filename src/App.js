import React from "react";
import "./App.scss";
import Header from "./components/Header.js"
import Tracker from "./components/Tracker.js"

function App() {

  return (
    <div className="app">
      <Header />
      <Tracker />
    </div>
  );
}

export default App;
