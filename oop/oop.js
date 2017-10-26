class Hero {
  constructor(name, health, mana, defense) {
    this.name = name;
    this.health = health;
    this.mana = mana;
    this.defense = defense;
    // this.skill =  
  }

  // skill() {
  //   console.log(`${this.name} ${this.skill}`);
  // }
}

class Assassin extends Hero {
  constructor(name, health, mana, defense) {
    super(name, health, mana, defense);
  }

  skill() {
    console.log(`Ciat..! serangan tanpa bayangan`);
  }
}

class Knight extends Hero {
  constructor(name, health, mana, defense) {
    super(name, health, mana, defense);
  }

  skill() {
    console.log(`Lemparan perisai suci`);
  }
}

class Mage extends Hero {
  constructor(name, health, mana, defense) {
    super(name, health, mana, defense);
  }

  skill() {
    console.log(`Terimalah sihirku`);
  }
}

module.exports = {
  Hero,
  Assassin,
  Knight,
  Mage
}