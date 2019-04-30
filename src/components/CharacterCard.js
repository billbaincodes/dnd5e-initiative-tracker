import React from 'react'

const CharacterCard = ({ data, nameSetter, initSetter, initSorter, removeCharacter }) => {


  return(
    <div className="character-card">
      <input id={data.id} onChange={(event) => nameSetter(event)} value={data.name}></input>
      <span>HP:{data.hit_points}</span>
      <span>AC:{data.armor_class}</span>
      <div className="stat-block">
        <span className="stat"><b>STR:</b> {data.strength}</span>
        <span className="stat"><b>DEX:</b> {data.dexterity}</span>
        <span className="stat"><b>CON:</b> {data.constitution}</span>
        <span className="stat"><b>INT:</b> {data.intelligence}</span>
        <span className="stat"><b>WIS:</b> {data.wisdom}</span>
        <span className="stat"><b>CHA:</b> {data.charisma}</span>
      </div>
      <div>
      <div>Conditions</div>
      <textarea></textarea>
      </div>

      <label>Initiative</label>
      <input id={data.id} onBlur={initSorter} onChange={(event) => initSetter(event)} value={data.init}></input>
      <button id={data.id} onClick={(event) => removeCharacter(event)}>Remove character</button>
    </div>
  )
}

export default CharacterCard