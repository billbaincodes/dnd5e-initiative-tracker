import React, { Component } from "react";
import CharacterCard from "./CharacterCard.js";

class Tracker extends Component {

  state = {
    characterData: [
      { id: 1, name: "lyia", HP: 1, init: 0 },
      { id: 2, name: "neera", HP: 10, init: 10 },
      { id: 3, name: "cloud", HP: 22, init: 0 }
    ],
    counter: 0
  }

  componentDidMount(){

  }

  initSorter = () => {

  }

  initSetter = (event) => {

    let newList = this.state.characterData.map(character => {
      console.log(character.id)
      if (character.id === parseInt(event.target.id)) {
        console.log("found a bitch")
        character.init = event.target.value
      }

      return character
    })

    console.log(newList)

    this.setState({characterData : newList})


  }



  render() {
    return (
      <div className="character-list">
        {this.state.characterData.map(character => (
          <CharacterCard key={character.id} initSetter={this.initSetter} data={character} />
        ))}
      </div>
    );
  }
}

export default Tracker;
