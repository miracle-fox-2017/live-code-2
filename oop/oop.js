class Hero {
  constructor(name, health, mana, defense) {
    this.name = name
    this.health = health
    this.mana = mana
    this.defense = defense
  }

}

class Assassin extends Hero {
  constructor() {
    super('Assassin', 1200, 543, 431)
  }

  skill() {
    console.log('Ciat..! Serangan tanpa bayangan..');
  }
}

class Knight extends Hero {
  constructor() {
    super('Knight', 3213, 126, 431)
  }
  skill() {
    console.log('Lemparan Perisai Suci');
  }
}

class Mage extends Hero {
  constructor() {
    super('Mage', 1130, 603, 231)
  }
  skill() {
    console.log('Terimalah serangan sihir ini..');
  }
}


class SummonHero {
  static acak() {
    return Math.floor(Math.random() * 100)
  }

  static panggil() {
    var acak = this.acak()

    if(acak > 85) {
      return new Mage()
    }
    else if(acak > 51) {
      return new Knight()
    }
    else {
      return new Assassin()
    }
  }
}


console.log(SummonHero.panggil());
SummonHero.panggil().skill()
