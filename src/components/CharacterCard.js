import React from 'react'

const Component = ({ data }) => {
  return(
    <div className="character-card">
      <h2>{data.name}</h2>
      <h3>{data.HP}</h3>
      <h3>{data.AC}</h3>
      <h3>STR</h3>
      <h3>DEX</h3>
    </div>
  )
}

export default Component