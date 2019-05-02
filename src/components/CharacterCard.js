import React from "react";

const CharacterCard = ({
  data,
  nameSetter,
  initSetter,
  initSorter,
  removeCharacter
}) => {

  let modFinder = (int) => {
    let mod = 0
    if (int === 1) {
      mod = <span className="ability-mod">&#40;-5&#41;</span>
    } else if (int > 1 && int < 4) {
      mod = <span className="ability-mod">&#40;-4&#41;</span>
    } else if (int > 3 && int < 6) {
      mod = <span className="ability-mod">&#40;-3&#41;</span>
    } else if (int > 5 && int < 8) {
      mod = <span className="ability-mod">&#40;-2&#41;</span>
    } else if (int > 7 && int < 10) {
      mod = <span className="ability-mod">&#40;-1&#41;</span>
    } else if (int > 9 && int < 12) {
      mod = <span className="ability-mod">&#40;0&#41;</span>
    } else if (int > 11 && int < 14) {
      mod = <span className="ability-mod">&#40;+1&#41;</span>
    } else if (int > 13 && int < 16) {
      mod = <span className="ability-mod">&#40;+2&#41;</span>
    } else if (int > 15 && int < 18) {
      mod = <span className="ability-mod">&#40;+3&#41;</span>
    } else if (int > 17 && int < 20) {
      mod = <span className="ability-mod">&#40;+4&#41;</span>
    } else if (int > 19 && int < 22) {
      mod = <span className="ability-mod">&#40;+5&#41;</span>
    } else {
      mod = <span>HI</span>
    }
    return mod
  }

  return (
    <div className="character-card">
      <input 
        className="character-name"
        id={data.id}
        onChange={event => nameSetter(event)}
        value={data.name}
      />
      <span>HP: {data.hit_points}</span>
      <span>AC: {data.armor_class}</span>
      <span>Spell DC: {data.spell_save_dc}</span>

      <div className="stat-block">
        <span className="stat">
          <b>STR:</b> {data.strength}
          {modFinder(data.strength)}
        </span>
        <span className="stat">
          <b>DEX:</b> {data.dexterity}
          {modFinder(data.dexterity)}
        </span>
        <span className="stat">
          <b>CON:</b> {data.constitution}
          {modFinder(data.constitution)}
        </span>
        <span className="stat">
          <b>INT:</b> {data.intelligence}
          {modFinder(data.intelligence)}
        </span>
        <span className="stat">
          <b>WIS:</b> {data.wisdom}
          {modFinder(data.wisdom)}
        </span>
        <span className="stat">
          <b>CHA:</b> {data.charisma}
          {modFinder(data.charisma)}
        </span>
      </div>
      <div>
        <div>Conditions</div>
        <textarea />
        <div>Immunities:</div>


        <div>Resistances:</div>
        <div>Vulnerabilites:</div>


      </div>
      <label>Initiative</label>
      <input
        id={data.id}
        onBlur={initSorter}
        onChange={event => initSetter(event)}
        value={data.init}
      />
      <button id={data.id} onClick={event => removeCharacter(event)}>
        Remove character
      </button>
    </div>
  );
};

export default CharacterCard;
