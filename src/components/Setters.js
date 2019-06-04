
let Setters = {
  
  //Lets initiative be set from the characterCard after initial render
  initSetter: function(event) {
    let newList = this.state.characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        character.init = event.target.value;
      }
      return character;
    });
    this.setState({ characterList: newList });
  },
  //Lets name be set from characterCard after initial render
  nameSetter: function(event, characterList) {
    let newList = characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        character.name = event.target.value;
      }
      return character;
    });
    return newList;
  },
  dexSetter: function(event, characterList) {
    let newList = characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        character.dexterity = event.target.value;
      }
      return character;
    });
    return newList;
  },
  strSetter: function(event, characterList) {
    let newList = characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        character.strength = event.target.value;
      }
      return character;
    });
    return newList;
  },
  chaSetter: function(event, characterList) {
    let newList = characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        character.charisma = event.target.value;
      }
      return character;
    });
    return newList;
  },
  intSetter: function(event, characterList) {
    let newList = characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        character.intelligence = event.target.value;
      }
      return character;
    });
    return newList;
  },
  wisSetter: function(event, characterList) {
    let newList = characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        character.wisdom = event.target.value;
      }
      return character;
    });
    return newList;
  },
  conSetter: function(event, characterList) {
    let newList = characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        character.constitution = event.target.value;
      }
      return character;
    });
    return newList;
  },
}

export default Setters



