import React from 'react'

const CharacterCard = ({ data, nameSetter, initSetter, initSorter }) => {


  return(
    <div className="character-card">
      <input id={data.id} onChange={(event) => nameSetter(event)} value={data.name}></input>
      <h3>STR</h3>
      <h3>DEX</h3>
      <label>Initiative</label>
      <input id={data.id} onBlur={initSorter} onChange={(event) => initSetter(event)} value={data.init}></input>
    </div>
  )
}

export default CharacterCard