import React, { Component } from "react";
import CharGen from './CharGen.js'

class CharacterForm extends Component {
  state = {
    name: "",
    size: "medium",
    type: "human",
    subtype: "man",
    alignment: null,
    hit_dice: null,
    speed: "30ft",
    hit_points: 0,
    armor_class: 0,
    init: 0,
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    damage_vulnerabilities: null,
    damage_resistances: null,
    damage_immunities: null,
    condition_immunities: null,
    senses: null,
    languages: null,
    challenge_rating: null,
    special_abilities: null,
    url: null,
  };

  nameSetter = (event) => {
    this.setState({ name : event.target.value })
  }

  hpSetter = (event) => {
    this.setState({ hit_points : event.target.value })
  }

  acSetter = (event) => {
    this.setState({ armor_class : event.target.value })
  }

  initSetter = (event) => {
    this.setState({ init : event.target.value })
  }

  statSetter = (event, stat) => {
    this.setState({[stat] : event.target.value})
  }

  genRandomCharacter = (char) => {
    let { str, dex, con, wis, int, cha, hp, ac, init } = char.stats
    let { name } = char
    this.setState({ 
      name: name,
      hit_points: hp,
      armor_class: ac,
      init: init,
      strength: str,
      dexterity: dex,
      constitution: con,
      intelligence: int,
      wisdom: wis,
      charisma: cha,
    })
  }


  render() {
    return (
      <form className="character-form">
        <CharGen genRando={this.genRandomCharacter} />
        <div>
          <label>Name</label>
          <input name="name" autoComplete="off" value={this.state.name} onChange={this.nameSetter} />
        </div>
        <div>
          <label>HP</label>
          <input onChange={this.hpSetter} value={this.state.hit_points} name="hit_points" type="number" min="1" max="100" />
          <label>AC</label>
          <input onChange={this.acSetter} value={this.state.armor_class} name="armor_class" type="number" min="1" max="20" />
          <label>Init</label>
          <input onChange={this.initSetter} value={this.state.init} type="number" min="1" max="50" />
        </div>
        <div className="stat-input">
          <label>STR</label>
          <input onChange={(event) => this.statSetter(event, 'strength')} value={this.state.strength} type="number" min="1" max="25" />
          <label>DEX</label>
          <input onChange={(event) => this.statSetter(event, 'dexterity')} value={this.state.dexterity} type="number" min="1" max="25" />
          <label>CON</label>
          <input onChange={(event) => this.statSetter(event, 'constitution')} value={this.state.constitution} type="number" min="1" max="25" />
          <label>INT</label>
          <input onChange={(event) => this.statSetter(event, 'intelligence')} value={this.state.intelligence} type="number" min="1" max="25" />
          <label>WIS</label>
          <input onChange={(event) => this.statSetter(event, 'wisdom')} value={this.state.wisdom} type="number" min="1" max="25" />
          <label>CHA</label>
          <input onChange={(event) => this.statSetter(event, 'charisma')} value={this.state.charisma} type="number" min="1" max="25" />
        </div>
        <button onClick={(event) => this.props.addCharacter(event, this.state)}>add your character!</button>
      </form>
    );
  }
}

export default CharacterForm;
