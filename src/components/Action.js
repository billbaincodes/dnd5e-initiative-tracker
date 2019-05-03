import React from 'react'

const Action = ({ data }) => {
  return(
    <div>
      <div>Name:{data.name}</div>
      <div>Description: {data.desc}</div>
      <div>Atk Bonus: {data.attack_bonus}</div>
    </div>
  )
}

export default Action