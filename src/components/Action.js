import React from 'react'

const Action = ({ data }) => {
  return(
    <div className="action">
      <div><b>{data.name}</b></div>
      <div><b>Description:</b> <span className="small-text">{data.desc}</span></div>
      <div><b>Atk Bonus:</b> {data.attack_bonus}</div>
    </div>
  )
}

export default Action