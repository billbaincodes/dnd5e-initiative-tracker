import React, { Component } from "react";
import CharacterCard from "./CharacterCard.js";
import CharacterForm from "./CharacterForm.js";

class Tracker extends Component {
  state = {
    characterList: [
      {
        "id": 1,
        "name": "Elxipha",
        "size": "Medium",
        "type": "humanoid",
        "subtype": "human",
        "alignment": "Neutral",
        "armor_class": 12,
        "hit_points": 6,
        "hit_dice": "2d8",
        "speed": "30 ft.",
        "strength": 10,
        "dexterity": 15,
        "constitution": 16,
        "intelligence": 17,
        "wisdom": 13,
        "charisma": 11,
        "damage_vulnerabilities": "",
        "damage_resistances": "",
        "damage_immunities": "",
        "condition_immunities": "",
        "senses": "passive Perception 12",
        "languages": ["Common", "elvish"],
        "challenge_rating": 0.25,
        "special_abilities": [],
        "url": ""
      },
      {
        id: 2,
        name: "Neera",
        hit_points: 19,
        armor_class: 13,
        spell_save_dc: 0,
        init: 0,
        strength: 9,
        dexterity: 14,
        constitution: 13,
        intelligence: 13,
        wisdom: 11,
        charisma: 16
      },
      {
        id: 3,
        name: "Lyia",
        hit_points: 12,
        armor_class: 14,
        spell_save_dc: 0,
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
    loaded: false,
    idCounter: 4
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

  //Sorts character array by initiative from highest to lowest
  initSorter = () => {
    let sortedList = this.state.characterList.sort(function(a, b) {
      return b.init - a.init;
    });
    console.log(sortedList);
    this.setState({ characterList: sortedList });
  };

  //Lets initiative be set from the characterCard after initial render
  initSetter = event => {
    let newList = this.state.characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        character.init = event.target.value;
      }
      return character;
    });
    this.setState({ characterList: newList });
  };

  //Lets name be set from characterCard after initial render
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

  //Add a new character to the character array
  addCharacter = (event, newCharacter) => {
    event.preventDefault();
    console.log(newCharacter);

    this.state.characterList.push({
      id: this.state.idCounter,
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

    this.setState({ idCounter : this.state.idCounter + 1})
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

  //Selects monster by filtering from list and fetches individual monster data
  selectMonster = event => {
    let monsterInfo = this.state.monsterList.filter(
      monster => monster.name === event.target.value
    )[0];
    this.monsterFetcher(false, monsterInfo.url);
  };

  //Add monster to character array
  addMonster = () => {
    let monster = this.state.monsterData

    this.state.characterList.push({
      id: this.state.idCounter,
      name: monster.name,
      hit_points: monster.hit_points,
      armor_class: monster.armor_class,
      init: 0,
      strength: monster.strength,
      dexterity: monster.dexterity,
      constitution: monster.constitution,
      intelligence: monster.intelligence,
      wisdom: monster.wisdom,
      charisma: monster.charisma
    })

    this.initSorter()
    this.setState({ idCounter : this.state.idCounter + 1})
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
        <select onChange={event => this.selectMonster(event)} defaultValue="Choose a monster..." >
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
