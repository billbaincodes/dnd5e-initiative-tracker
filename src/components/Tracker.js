import React, { Component } from "react";
import CharacterCard from "./CharacterCard.js";

class Tracker extends Component {
  state = {
    characterData: [
      { id: 1, name: "lyia", HP: 1, init: 20 },
      { id: 2, name: "neera", HP: 10, init: 5 },
      { id: 3, name: "cloud", HP: 22, init: 10 }
    ],
    monsterList: [
      {
        "_id": "5bce91465b7768e7920181a3",
        "index": 2,
        "name": "Acolyte",
        "size": "Medium",
        "type": "humanoid",
        "subtype": "any race",
        "alignment": "any alignment",
        "armor_class": 10,
        "hit_points": 9,
        "hit_dice": "2d8",
        "speed": "30 ft.",
        "strength": 10,
        "dexterity": 10,
        "constitution": 10,
        "intelligence": 10,
        "wisdom": 14,
        "charisma": 11,
        "medicine": 4,
        "religion": 2,
        "damage_vulnerabilities": "",
        "damage_resistances": "",
        "damage_immunities": "",
        "condition_immunities": "",
        "senses": "passive Perception 12",
        "languages": "any one language (usually Common)",
        "challenge_rating": 0.25,
        "special_abilities": [
          {
            "attack_bonus": 0,
            "desc": "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:\n\n• Cantrips (at will): light, sacred flame, thaumaturgy\n• 1st level (3 slots): bless, cure wounds, sanctuary",
            "name": "Spellcasting"
          }
        ],
        "actions": [
          {
            "damage_dice": "1d4",
            "attack_bonus": 2,
            "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
            "name": "Club"
          }
        ],
        "url": "http://www.dnd5eapi.co/api/monsters/2"
      },
      {
        "_id": "5bce91465b7768e792018228",
        "index": 135,
        "name": "Giant Rat (Diseased)",
        "size": "Small",
        "type": "beast",
        "subtype": "",
        "alignment": "unaligned",
        "armor_class": 12,
        "hit_points": 7,
        "hit_dice": "2d6",
        "speed": "30 ft.",
        "strength": 7,
        "dexterity": 15,
        "constitution": 11,
        "intelligence": 2,
        "wisdom": 10,
        "charisma": 4,
        "damage_vulnerabilities": "",
        "damage_resistances": "",
        "damage_immunities": "",
        "condition_immunities": "",
        "senses": "darkvision 60 ft., passive Perception 10",
        "languages": "",
        "challenge_rating": 0.125,
        "actions": [
          {
            "damage_bonus": 2,
            "damage_dice": "1d4",
            "attack_bonus": 4,
            "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 10 Constitution saving throw or contract a disease. Until the disease is cured, the target can't regain hit points except by magical means, and the target's hit point maximum decreases by 3 (1d6) every 24 hours. If the target's hit point maximum drops to 0 as a result of this disease, the target dies.",
            "name": "Bite"
          }
        ],
        "url": "http://www.dnd5eapi.co/api/monsters/135"
      },
      {
        "_id": "5bce91465b7768e7920182b7",
        "index": 277,
        "name": "Swarm of Quippers",
        "size": "Medium",
        "type": "swarm of Tiny beasts",
        "subtype": "",
        "alignment": "unaligned",
        "armor_class": 13,
        "hit_points": 28,
        "hit_dice": "8d8",
        "speed": "0 ft., swim 40 ft.",
        "strength": 13,
        "dexterity": 16,
        "constitution": 9,
        "intelligence": 1,
        "wisdom": 7,
        "charisma": 2,
        "damage_vulnerabilities": "",
        "damage_resistances": "bludgeoning, piercing, slashing",
        "damage_immunities": "",
        "condition_immunities": "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        "senses": "darkvision 60 ft., passive Perception 8",
        "languages": "",
        "challenge_rating": 1,
        "special_abilities": [
          {
            "attack_bonus": 0,
            "desc": "The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
            "name": "Blood Frenzy"
          },
          {
            "attack_bonus": 0,
            "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points.",
            "name": "Swarm"
          },
          {
            "attack_bonus": 0,
            "desc": "The swarm can breathe only underwater.",
            "name": "Water Breathing"
          }
        ],
        "actions": [
          {
            "damage_dice": "4d6",
            "attack_bonus": 5,
            "desc": "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer.",
            "name": "Bites"
          }
        ],
        "url": "http://www.dnd5eapi.co/api/monsters/277"
      }
    ],
    currentSelection: {}
  };

  componentDidMount() {
    this.initSorter()
  }

  initSorter = () => {
    console.log('heyo')
    let sortedList = this.state.characterData.sort(function(a, b) {return b.init - a.init})
    console.log(sortedList)
    this.setState({ characterData : sortedList })

  };

  initSetter = event => {
    let newList = this.state.characterData.map(character => {
      if (character.id === parseInt(event.target.id)) {
        console.log("found a bitch");
        character.init = event.target.value;
      }
      return character;
    });

    this.setState({ characterData: newList });
  };

  newMonsterName = () => {
    console.log()
  }

  render() {
    return (
      <div>
      <h2>Add a monster!</h2>
      <select >
      {
        this.state.monsterList.map(monster => {
          return (<option>{monster.name}</option>)
        })
      }
      </select>
      <button>+</button>
      <div className="character-list">
        {this.state.characterData.map(character => (
          <CharacterCard
            key={character.id}
            initSetter={this.initSetter}
            initSorter={this.initSorter}
            data={character}
          />
        ))}
      </div>

      </div>
    );
  }
}

export default Tracker;
