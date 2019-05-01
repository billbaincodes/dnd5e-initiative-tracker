import React, { Component } from "react";
import CharacterCard from "./CharacterCard.js";
import CharacterForm from "./CharacterForm.js";

class Tracker extends Component {
  state = {
    characterList: [
      {
        id: 1,
        name: "Elxiphar",
        hit_points: 18,
        armor_class: 14,
        init: 20,
        strength: 18,
        dexterity: 14,
        constitution: 14,
        intelligence: 13,
        wisdom: 12,
        charisma: 3
      },
      {
        id: 2,
        name: "Neera",
        hit_points: 19,
        armor_class: 12,
        init: 10,
        strength: 9,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 12,
        charisma: 11
      },
      {
        id: 3,
        name: "Lyia",
        hit_points: 12,
        armor_class: 14,
        init: 10,
        strength: 18,
        dexterity: 17,
        constitution: 18,
        intelligence: 19,
        wisdom: 18,
        charisma: 17
      }
    ],
    monsterList: [],
    monsterData: {},
    formToggle: false,
    loaded: false
  };

  componentDidMount() {
    this.initSorter();
    this.monsterFetcher(true, null);
  }

  //Fetches monster information from API
  //Boolean to fetch one or all monsters, url for individual monster fetch
  monsterFetcher = (all, url) => {
    if (all === true) {
      fetch("http://www.dnd5eapi.co/api/monsters")
        .then(response => {
          return response.json();
        })
        .then(json => {
          this.setState({ monsterList: json.results });
          console.log(this.state.monsterList);
        });
    } else {
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(json => {
          this.setState({ monsterData: json });
          console.log(json);
        });
    }
  };

  initSorter = () => {
    let sortedList = this.state.characterList.sort(function(a, b) {
      return b.init - a.init;
    });
    console.log(sortedList);
    this.setState({ characterList: sortedList });
  };

  initSetter = event => {
    let newList = this.state.characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        character.init = event.target.value;
      }
      return character;
    });

    this.setState({ characterList: newList });
  };

  nameSetter = event => {
    let newList = this.state.characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        console.log("found a bitch");
        character.name = event.target.value;
      }
      return character;
    });

    this.setState({ characterList: newList });
  };

  addCharacter = (event, newCharacter) => {
    event.preventDefault();
    console.log(newCharacter);

    //Generate Id by incrementing highest current ID. Init at 0 if no characters present
    let lastId = 0;
    if (this.state.characterList.length) {
      lastId = this.state.characterList
        .map(character => {
          return character.id;
        })
        .sort(function(a, b) {
          return a - b;
        })
        .pop();
    }

    this.state.characterList.push({
      id: lastId + 1,
      name: newCharacter.name,
      hit_points: newCharacter.hit_points,
      armor_class: newCharacter.armor_class,
      init: newCharacter.init,
      strength: newCharacter.strength,
      dexterity: newCharacter.dexterity,
      constitution: newCharacter.constitution,
      intelligence: newCharacter.intelligence,
      wisdom: newCharacter.wisdom,
      charisma: newCharacter.charisma
    });

    this.toggleForm();
    this.initSorter();
  };

  //Removes character by filtering through characterList arr
  removeCharacter = event => {
    let characterId = parseInt(event.target.id);
    let newList = this.state.characterList.filter(
      character => character.id !== characterId
    );
    this.setState({ characterList: newList });
  };

  selectMonster = event => {
    let monsterInfo = this.state.monsterList.filter(
      monster => monster.name === event.target.value
    )[0];

    this.monsterFetcher(false, monsterInfo.url);
  };

  addMonster = () => {
    console.log(this.state.monsterData);
  };

  toggleForm = () => {
    this.setState({ formToggle: !this.state.formToggle });
  };

  render() {
    return (
      <div>
        <span>Add Character!</span>
        <button onClick={this.toggleForm}>v</button>
        {this.state.formToggle && (
          <CharacterForm addCharacter={this.addCharacter} />
        )}
        <br />
        <span>Add Monster!</span>
        <select defaultValue="Choose a monster..." onChange={event => this.selectMonster(event)}>
          <option disabled>Choose a monster...</option>
          {this.state.monsterList.map(monster => {
            return <option key={monster.name}> {monster.name}</option>;
          })}
        </select>
        <button onClick={this.addMonster}>+</button>
        <div className="character-list">
          {this.state.characterList.map(character => (
            <CharacterCard
              key={character.id}
              nameSetter={this.nameSetter}
              initSetter={this.initSetter}
              initSorter={this.initSorter}
              removeCharacter={this.removeCharacter}
              data={character}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Tracker;
