import React from 'react'

const CharacterForm = () => {
  return(
    <form>
      <div>
        <label>Name</label>
        <input/>
      </div>
      <div>
        <label>HP</label>
        <input/>
        <label>AC</label>
        <input/>
      </div>
      <div className="stat-input">
        <label>STR</label>
        <input/>
        <label>DEX</label>
        <input/>
        <label>CON</label>
        <input/>
        <label>INT</label>
        <input/>
        <label>WIS</label>
        <input/>
        <label>CHA</label>
      </div>
      <input/>

    </form>
  )
}

export default CharacterForm