import React, { Component } from "react";
import CharacterCard from "./CharacterCard.js";
import CharacterForm from "./CharacterForm.js";
import setters from "./Setters.js";

class Tracker extends Component {
  state = {
    characterList: [
      {
        id: 1,
        name: "Lyia",
        size: "Medium",
        type: "humanoid",
        subtype: "human",
        alignment: "Neutral",
        armor_class: 16,
        hit_points: 17,
        hit_dice: "2d8",
        speed: "30 ft.",
        strength: 10,
        dexterity: 15,
        constitution: 16,
        intelligence: 17,
        wisdom: 13,
        charisma: 11,
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 12",
        languages: ["Common", "elvish"],
        challenge_rating: 0.25,
        actions: [],
        special_abilities: [],
        url: "",
        init: 0,
        active: true
      },
      {
        id: 2,
        name: "Neera",
        size: "Medium",
        type: "humanoid",
        subtype: "human",
        alignment: "Neutral",
        armor_class: 13,
        hit_points: 19,
        hit_dice: "2d8",
        speed: "30 ft.",
        strength: 10,
        dexterity: 15,
        constitution: 16,
        intelligence: 17,
        wisdom: 13,
        charisma: 11,
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 12",
        languages: ["Common", "elvish"],
        challenge_rating: 0.25,
        actions: [],
        special_abilities: [],
        url: "",
        init: 0,
        active: false
      },
      {
        id: 3,
        name: "Elxipha",
        size: "Medium",
        type: "humanoid",
        subtype: "human",
        alignment: "Neutral",
        armor_class: 12,
        hit_points: 6,
        hit_dice: "2d8",
        speed: "30 ft.",
        strength: 10,
        dexterity: 15,
        constitution: 16,
        intelligence: 17,
        wisdom: 13,
        charisma: 11,
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 12",
        languages: ["Common", "elvish"],
        challenge_rating: 0.25,
        actions: [],
        special_abilities: [],
        url: "",
        init: 0,
        active: false
      }
    ],
    fullMonsterList: [],
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
          this.setState({
            monsterList: json.results,
            fullMonsterList: json.results
          });
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
  nameSetter = (event, list) => {
    let newList = this.state.characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        console.log("found a bitch");
        character.name = event.target.value;
      }
      return character;
    });
    this.setState({ characterList: newList });
  };

  //Lets name be set from characterCard after initial render
  hpSetter = (event, list) => {
    let newList = this.state.characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        console.log("found a bitch");
        character.hit_points = event.target.value;
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
      size: newCharacter.size,
      type: newCharacter.type,
      subtype: newCharacter.subtype,
      alignment: newCharacter.alignment,
      hit_dice: newCharacter.hit_dice,
      speed: newCharacter.speed,
      hit_points: newCharacter.hit_points,
      armor_class: newCharacter.armor_class,
      init: newCharacter.init,
      strength: newCharacter.strength,
      dexterity: newCharacter.dexterity,
      constitution: newCharacter.constitution,
      intelligence: newCharacter.intelligence,
      wisdom: newCharacter.wisdom,
      charisma: newCharacter.charisma,
      damage_vulnerabilities: newCharacter.damage_vulnerabilities,
      damage_resistances: newCharacter.damage_resistances,
      damage_immunities: newCharacter.damage_immunities,
      condition_immunities: newCharacter.condition_immunities,
      senses: newCharacter.senses,
      languages: newCharacter.languages,
      challenge_rating: newCharacter.challenge_rating,
      special_abilities: newCharacter.special_abilities,
      url: null
    });

    this.setState({ idCounter: this.state.idCounter + 1 });
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

  searchMonster = event => {
    let searchVal = event.target.value.toLowerCase();
    let filteredList = this.state.fullMonsterList.filter(monster =>
      monster.name.toLowerCase().includes(searchVal)
    );
    this.setState({ monsterList: filteredList });
  };

  //Add monster to character array
  addMonster = () => {
    let monster = this.state.monsterData;

    this.state.characterList.push({
      id: this.state.idCounter,
      name: monster.name,
      size: monster.size,
      type: monster.type,
      subtype: monster.subtype,
      alignment: monster.alignment,
      hit_dice: monster.hit_dice,
      speed: monster.speed,
      hit_points: monster.hit_points,
      armor_class: monster.armor_class,
      init: monster.init,
      strength: monster.strength,
      dexterity: monster.dexterity,
      constitution: monster.constitution,
      intelligence: monster.intelligence,
      wisdom: monster.wisdom,
      charisma: monster.charisma,
      damage_vulnerabilities: monster.damage_vulnerabilities,
      damage_resistances: monster.damage_resistances,
      damage_immunities: monster.damage_immunities,
      condition_immunities: monster.condition_immunities,
      senses: monster.senses,
      languages: monster.languages,
      challenge_rating: monster.challenge_rating,
      actions: monster.actions,
      special_abilities: monster.special_abilities,
      url: monster.url
    });
    this.initSorter();
    this.setState({ idCounter: this.state.idCounter + 1 });
  };

  toggleForm = () => {
    this.setState({ formToggle: !this.state.formToggle });
  };

  nextTurn = () => {

  let activeIndex = null
  let list = this.state.characterList.map((character, index) => {
    if (character.active === true) {
      activeIndex = index
    }
    return character
  })

  list[activeIndex].active = false

  if (list[activeIndex + 1] === undefined ) {
    list[0].active = true
  } else {
    list[activeIndex + 1].active = true
  }

  this.setState({characterList: list})
  console.log(activeIndex, list)
  };

  render() {
    return (
      <div>
        <button onClick={this.nextTurn}>Next Turn</button>
        <span>Add Character!</span>
        <button onClick={this.toggleForm}>v</button>
        {this.state.formToggle && (
          <CharacterForm addCharacter={this.addCharacter} />
        )}
        <br />
        <span>Add Monster!</span>
        <input
          name="search"
          autoComplete="off"
          placeholder="Search by name..."
          onChange={this.searchMonster}
          type="text"
        />
        <select
          onChange={event => this.selectMonster(event)}
          defaultValue="Choose a monster..."
        >
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
              hpSetter={this.hpSetter}
              initSorter={this.initSorter}
              removeCharacter={this.removeCharacter}
              data={character}
              characterList={this.state.characterList}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Tracker;
