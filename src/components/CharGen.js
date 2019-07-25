import React, { Component } from 'react'

class CharGen extends Component {
  // Thanks Mozilla
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  genStats = (difficulty) => {
    let statMin, statMax, hpMin, hpMax, acMin, acMax;
    switch (difficulty) {
      case "weak" :
        [statMin, statMax] = [1, 9]
        hpMin = 10
        hpMax = 20
        acMin = 10
        acMax = 14
        break
      case "med" :
        [statMin, statMax] = [7, 13]
        hpMin = 20
        hpMax = 30
        acMin = 13
        acMax = 16
        break
      case "strong" :
        [statMin, statMax] = [12, 20]
        hpMin = 35
        hpMax = 50
        acMin = 16
        acMax = 20
        break
        // no default
    }
    let statNums = []
    let hp = this.getRandomInt(hpMin, hpMax)
    let ac = this.getRandomInt(acMin, acMax)
    let init = this.getRandomInt(acMin, acMax)
    for (let i = 0; i < 6; i++){
      statNums[i] = this.getRandomInt(statMin, statMax)
    }
    let [str, dex, con, wis, int, cha] = statNums
    // console.log({ str, dex, con, wis, int, cha, hp, ac, init })
    return { str, dex, con, wis, int, cha, hp, ac, init }
  }

  nameGen = async () => {
    let fullName = await fetch('https://uinames.com/api/').then(response => {
      return response.json();
    })
    .then(result => {
      return `${result.name} ${result.surname}`
    })
    return fullName
  }

  charPasser = async (event) => {
    event.preventDefault()
    let randomChar = {
      name: 'greg',
      stats: null,
    }
    randomChar.name = await this.nameGen()
    randomChar.stats = this.genStats("med")
    console.log(randomChar)
    this.props.genRando(randomChar)
  }
  
  componentDidMount(){
    this.genStats("strong")
    this.nameGen()
  }

  render(){
  return(
    <button onClick={(event) => this.charPasser(event)}>Gen Random Char</button>
  )
  }
}

export default CharGen