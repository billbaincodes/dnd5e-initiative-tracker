import React, { Component } from "react";
import StatDropDown from "./StatDropDown.js";

class CharacterForm extends Component {
  state = {
    name: "",
    hit_points: 0,
    armor_class: 0,
    init: 0,
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1
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

  render() {
    return (
      <form>
        <div>
          <label>Name</label>
          <input name="name" autoComplete="off" value={this.state.name} onChange={this.nameSetter} />
        </div>
        <div>
          <label>HP</label>
          <input onChange={this.hpSetter} value={this.state.hit_points} name="hit_points" type="number" min="1" max="100" />
          <label>AC</label>
          <input onChange={this.acSetter} value={this.state.armor_class} name="armor_class" type="number" min="1" max="100" />
          <label>Init</label>
          <input onChange={this.initSetter} value={this.state.init} type="number" min="1" max="50" />
        </div>
        <div className="stat-input">
          <label>STR</label>
          <StatDropDown statSetter={this.statSetter} stat="strength" />
          <label>DEX</label>
          <StatDropDown statSetter={this.statSetter} stat="dexterity" />
          <label>CON</label>
          <StatDropDown statSetter={this.statSetter} stat="constitution" />
          <label>INT</label>
          <StatDropDown statSetter={this.statSetter} stat="intelligence" />
          <label>WIS</label>
          <StatDropDown statSetter={this.statSetter} stat="wisdom" />
          <label>CHA</label>
          <StatDropDown statSetter={this.statSetter} stat="charisma" />
        </div>
        <button onClick={(event) => this.props.addCharacter(event, this.state)}>add your character!</button>
      </form>
    );
  }
}

export default CharacterForm;
