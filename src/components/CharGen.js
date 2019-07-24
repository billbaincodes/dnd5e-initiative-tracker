import React, { Component } from 'react'

class CharGen extends Component {

  // Thanks Mozilla
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  genStats = (difficulty) => {
    let min, max;
    switch (difficulty) {
      case "weak" :
        [min, max] = [1, 9]
        break
      case "med" :
        [min, max] = [7, 13]
        break
        
      case "strong" :
        [min, max] = [12, 20]
        break
        // no default
    }
    let statNums = []
    for (let i = 0; i < 6; i++){
      statNums[i] = this.getRandomInt(min, max)
    }
    return statNums
  }

  nameGen = () => {
    fetch('https://uinames.com/api/')
    .then(response => {
      return response.json();
    }).then(result => {
      return `my name is ${result.name} ${result.surname}`;
    })
    
  }
  
  componentDidMount(){
    let stats = this.genStats("strong")
    console.log(stats)
    this.nameGen()
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