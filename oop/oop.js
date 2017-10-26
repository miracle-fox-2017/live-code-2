class Hero {
  constructor(name, health, mana, defense) {
    this.name = name;
    this.health = health;
    this.mana = mana;
    this.defense = defense;
  }

  skill() {
    if (this.name == 'Assassin') {
      console.log('Ciat..! Serangan tanpa bayangan..');
    } else if (this.name == 'Knight') {
      console.log('Lemparan Perisai Suci');
    } else if (this.name == 'Mage') {
      console.log('Terimalah serangan sihir ini..');
    }
  }
}

class Assassin extends Hero {
  constructor() {
    super('Assassin', 1200, 543, 431);
  }
}

class Knight extends Hero {
  constructor() {
    super('Knight', 3213, 126, 431);
  }
}

class Mage extends Hero {
  constructor() {
    super('Mage', 1130, 603, 231);
  }
}

class SummonHero {

  static acak() {
    let acak = Math.floor(Math.random() * 100) + 1;
    this.number = acak;
    return this.number;
  }

  static panggil() {
    let number = SummonHero.acak();
    let answer;
    if (number > 85) {
      answer = new Mage();
    } else if (number > 50 && this.number < 85) {
      answer = new Knight();
    } else if (number <= 50) {
      answer = new Assassin();
    }

    return answer;
  }
}

console.log(SummonHero.panggil());
SummonHero.panggil().skill();
