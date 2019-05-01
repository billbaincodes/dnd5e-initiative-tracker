import React, { Component } from "react";
import CharacterCard from "./CharacterCard.js";
import CharacterForm from "./CharacterForm.js";

class Tracker extends Component {
  state = {
    characterList: [
      {
        id: 1,
        name: "Elxiphar",
        hit_points: 18,
        armor_class: 14,
        init: 20,
        strength: 18,
        dexterity: 14,
        constitution: 14,
        intelligence: 13,
        wisdom: 12,
        charisma: 3
      },
      {
        id: 2,
        name: "Neera",
        hit_points: 19,
        armor_class: 12,
        init: 10,
        strength: 9,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 12,
        charisma: 11
      },
      {
        id: 3,
        name: "Lyia",
        hit_points: 12,
        armor_class: 14,
        init: 10,
        strength: 18,
        dexterity: 17,
        constitution: 18,
        intelligence: 19,
        wisdom: 18,
        charisma: 17
      }
    ],
    monsterList: [],
    monsterData: [
      {
        _id: "5bce91465b7768e7920181a3",
        index: 2,
        name: "Acolyte",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        armor_class: 10,
        hit_points: 9,
        hit_dice: "2d8",
        speed: "30 ft.",
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 14,
        charisma: 11,
        medicine: 4,
        religion: 2,
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 12",
        languages: "any one language (usually Common)",
        challenge_rating: 0.25,
        special_abilities: [
          {
            attack_bonus: 0,
            desc:
              "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:\n\n• Cantrips (at will): light, sacred flame, thaumaturgy\n• 1st level (3 slots): bless, cure wounds, sanctuary",
            name: "Spellcasting"
          }
        ],
        actions: [
          {
            damage_dice: "1d4",
            attack_bonus: 2,
            desc:
              "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
            name: "Club"
          }
        ],
        url: "http://www.dnd5eapi.co/api/monsters/2"
      },
      {
        _id: "5bce91465b7768e792018228",
        index: 135,
        name: "Giant Rat (Diseased)",
        size: "Small",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        armor_class: 12,
        hit_points: 7,
        hit_dice: "2d6",
        speed: "30 ft.",
        strength: 7,
        dexterity: 15,
        constitution: 11,
        intelligence: 2,
        wisdom: 10,
        charisma: 4,
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "",
        challenge_rating: 0.125,
        actions: [
          {
            damage_bonus: 2,
            damage_dice: "1d4",
            attack_bonus: 4,
            desc:
              "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 10 Constitution saving throw or contract a disease. Until the disease is cured, the target can't regain hit points except by magical means, and the target's hit point maximum decreases by 3 (1d6) every 24 hours. If the target's hit point maximum drops to 0 as a result of this disease, the target dies.",
            name: "Bite"
          }
        ],
        url: "http://www.dnd5eapi.co/api/monsters/135"
      },
      {
        _id: "5bce91465b7768e7920182b7",
        index: 277,
        name: "Swarm of Quippers",
        size: "Medium",
        type: "swarm of Tiny beasts",
        subtype: "",
        alignment: "unaligned",
        armor_class: 13,
        hit_points: 28,
        hit_dice: "8d8",
        speed: "0 ft., swim 40 ft.",
        strength: 13,
        dexterity: 16,
        constitution: 9,
        intelligence: 1,
        wisdom: 7,
        charisma: 2,
        damage_vulnerabilities: "",
        damage_resistances: "bludgeoning, piercing, slashing",
        damage_immunities: "",
        condition_immunities:
          "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        senses: "darkvision 60 ft., passive Perception 8",
        languages: "",
        challenge_rating: 1,
        special_abilities: [
          {
            attack_bonus: 0,
            desc:
              "The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
            name: "Blood Frenzy"
          },
          {
            attack_bonus: 0,
            desc:
              "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points.",
            name: "Swarm"
          },
          {
            attack_bonus: 0,
            desc: "The swarm can breathe only underwater.",
            name: "Water Breathing"
          }
        ],
        actions: [
          {
            damage_dice: "4d6",
            attack_bonus: 5,
            desc:
              "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer.",
            name: "Bites"
          }
        ],
        url: "http://www.dnd5eapi.co/api/monsters/277"
      }
    ],
    selectedMonster: "Acolyte",
    formToggle: false
  };

  componentDidMount() {
    this.initSorter();
    this.monsterFetcher();
  }

  monsterFetcher = () => {
    fetch('http://www.dnd5eapi.co/api/monsters')
  .then(response => {
    return response.json();
  })
  .then(json => {
    console.log(json);
  });
  }

  initSorter = () => {
    console.log("heyo");
    let sortedList = this.state.characterList.sort(function(a, b) {
      return b.init - a.init;
    });
    console.log(sortedList);
    this.setState({ characterList: sortedList });
  };

  initSetter = event => {
    let newList = this.state.characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        character.init = event.target.value;
      }
      return character;
    });

    this.setState({ characterList: newList });
  };

  nameSetter = event => {
    let newList = this.state.characterList.map(character => {
      if (character.id === parseInt(event.target.id)) {
        console.log("found a bitch");
        character.name = event.target.value;
      }
      return character;
    });

    this.setState({ characterList: newList });
  };

  addCharacter = (event, newCharacter) => {
    event.preventDefault();
    console.log(newCharacter);

    //Generate Id by incrementing highest current ID. Init at 0 if no characters present
    let lastId = 0;
    if (this.state.characterList.length) {
      lastId = this.state.characterList
        .map(character => {
          return character.id;
        })
        .sort(function(a, b) {
          return a - b;
        })
        .pop();
    }

    this.state.characterList.push({
      id: lastId + 1,
      name: newCharacter.name,
      hit_points: newCharacter.hit_points,
      armor_class: newCharacter.armor_class,
      init: newCharacter.init,
      strength: newCharacter.strength,
      dexterity: newCharacter.dexterity,
      constitution: newCharacter.constitution,
      intelligence: newCharacter.intelligence,
      wisdom: newCharacter.wisdom,
      charisma: newCharacter.charisma
    });

    this.toggleForm();
    this.initSorter();
  };

  //Removes character by filtering through characterList arr
  removeCharacter = event => {
    let characterId = parseInt(event.target.id);
    let newList = this.state.characterList.filter(
      character => character.id !== characterId
    );
    this.setState({ characterList: newList });
  };

  selectMonster = (event) => {
    this.setState({selectedMonster : event.target.value})
  }

  addMonster = () => {

    let monsterInfo = this.state.monsterData.filter(monster => monster.name === this.state.selectedMonster)[0]

    console.log(monsterInfo);
  };

  toggleForm = () => {
    this.setState({ formToggle: !this.state.formToggle });
  };

  render() {
    return (
      <div>
        <span>Add Character!</span>
        <button onClick={this.toggleForm}>v</button>
        {this.state.formToggle && (
          <CharacterForm addCharacter={this.addCharacter} />
        )}
        <br />
        <span>Add Monster!</span>
        <select onChange={(event) => this.selectMonster(event)}>
          {this.state.monsterData.map(monster => {
            return <option key={monster.index}> {monster.name}</option>;
          })}
        </select>
        <button onClick={this.addMonster}>+</button>
        <div className="character-list">
          {this.state.characterList.map(character => (
            <CharacterCard
              key={character.id}
              nameSetter={this.nameSetter}
              initSetter={this.initSetter}
              initSorter={this.initSorter}
              removeCharacter={this.removeCharacter}
              data={character}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Tracker;
