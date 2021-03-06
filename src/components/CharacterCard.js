import React from "react";
import Action from "./Action.js";
import SpecialAbility from "./SpecialAbility.js";

const CharacterCard = ({
  data,
  nameSetter,
  initSetter,
  initSorter,
  hpSetter,
  removeCharacter,
  characterList
}) => {
  let modFinder = int => {
    let mod = 0;
    if (int === 1) {
      mod = <span className="ability-mod">&#40;-5&#41;</span>;
    } else if (int > 1 && int < 4) {
      mod = <span className="ability-mod">&#40;-4&#41;</span>;
    } else if (int > 3 && int < 6) {
      mod = <span className="ability-mod">&#40;-3&#41;</span>;
    } else if (int > 5 && int < 8) {
      mod = <span className="ability-mod">&#40;-2&#41;</span>;
    } else if (int > 7 && int < 10) {
      mod = <span className="ability-mod">&#40;-1&#41;</span>;
    } else if (int > 9 && int < 12) {
      mod = <span className="ability-mod">&#40;0&#41;</span>;
    } else if (int > 11 && int < 14) {
      mod = <span className="ability-mod">&#40;+1&#41;</span>;
    } else if (int > 13 && int < 16) {
      mod = <span className="ability-mod">&#40;+2&#41;</span>;
    } else if (int > 15 && int < 18) {
      mod = <span className="ability-mod">&#40;+3&#41;</span>;
    } else if (int > 17 && int < 20) {
      mod = <span className="ability-mod">&#40;+4&#41;</span>;
    } else if (int > 19 && int < 22) {
      mod = <span className="ability-mod">&#40;+5&#41;</span>;
    } else {
      mod = <span className="ability-mod">&#40;uh-oh&#41;</span>;
    }
    return mod;
  };

  return (
    <div className={data.active ? "character-card active-character" : "character-card"}
        onMouseLeave={initSorter}
          >
      <input
        className="character-name hidden-input"
        id={data.id}
        onChange={event => nameSetter(event, characterList)}
        value={data.name}
      />
      <span>
        HP: <input className="hp-input hidden-input" id={data.id} onChange={event => hpSetter(event)} value={data.hit_points} />
      </span>
      <span>AC: {data.armor_class}</span>
      <span>Spell Save DC: {data.spell_save_dc}</span>

      <div className="ability-block">
        <span className="ability">
          <b>STR:</b> {data.strength}
          {modFinder(data.strength)}
        </span>
        <span className="ability">
          <b>DEX:</b> {data.dexterity}
          {modFinder(data.dexterity)}
        </span>
        <span className="ability">
          <b>CON:</b> {data.constitution}
          {modFinder(data.constitution)}
        </span>
        <span className="ability">
          <b>INT:</b> {data.intelligence}
          {modFinder(data.intelligence)}
        </span>
        <span className="ability">
          <b>WIS:</b> {data.wisdom}
          {modFinder(data.wisdom)}
        </span>
        <span className="ability">
          <b>CHA:</b> {data.charisma}
          {modFinder(data.charisma)}
        </span>
      </div>
      <div className="character-info">
        <div>Conditions</div>
        <textarea />
        <div>
          <b>Immunities:</b> <span>{data.damage_immunities || "None"}</span>
        </div>
        <div>
          <b>Resistances:</b> <span>{data.damage_resistances || "None"}</span>
        </div>
        <div>
          <b>Vulnerabilities:</b>{" "}
          <span>{data.damage_vulnerabilities || "None"}</span>
        </div>
        <div>
          <b>Actions:</b>{" "}
          {data.actions
            ? data.actions.map(action => {
                return <Action key={action.name} data={action} />;
              })
            : "None"}
        </div>
        <div>
          <b>Special Abilities:</b>{" "}
          {data.special_abilities
            ? data.special_abilities.map(action => {
                return <SpecialAbility key={action.name} data={action} />;
              })
            : "None"}
        </div>
      </div>
      <label>Initiative: </label>
      <input
        className="hidden-input"
        id={data.id}
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
