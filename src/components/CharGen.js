import React, { Component } from 'react'

class CharGen extends Component {

  // Thanks Mozilla
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  genStats = () => {




    let statNums = []
    for (let i = 0; i < 6; i++){
      statNums[i] = this.getRandomInt(1, 5)
    }
    return statNums
  }
  
  componentDidMount(){
    let stats = this.genStats()
    console.log(stats)
  }

  render(){
  return(
    <div>
      <p>I am the Character Generator</p>
      
    </div>
  )
  }
}

export default CharGen