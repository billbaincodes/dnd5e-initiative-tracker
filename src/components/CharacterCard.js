import React from 'react'

const CharacterCard = ({ data, initSetter, initSorter }) => {


  return(
    <div className="character-card">
      <h2>{data.name}</h2>
      <h3>Initiative: <input id={data.id} onBlur={initSorter} onChange={(event) => initSetter(event)} value={data.init}></input></h3>
      <h3>STR</h3>
      <h3>DEX</h3>
    </div>
  )
}

export default CharacterCard