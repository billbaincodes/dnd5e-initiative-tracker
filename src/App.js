import React from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard.js";

function App() {

  let characterData = [
    { name: "lyia", HP: 1, AC: 2, Dex: 3, Str: 4, Int: 5 },
    { name: "neera", HP: 10, AC: 12, Dex: 12, Str: 16, Int: 19 },
    { name: "cloud", HP: 22, AC: 22, Dex: 22, Str: 22, Int: 22 }
  ];

  return (
    <div className="app">
      <header>
        <h1>Hail Satan</h1>
      </header>
      <div className="character-list">

        {characterData.map(character => <CharacterCard data={character} />
        )}

      </div>
    </div>
  );
}

export default App;
