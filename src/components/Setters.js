
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
        console.log("found a bitch");
        character.name = event.target.value;
      }
      return character;
    });
    return newList;
  }
}

export default Setters



