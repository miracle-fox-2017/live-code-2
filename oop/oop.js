class Hero {
  constructor(name, health, mana, defense){
    this.name = name
    this.health = health
    this.mana = mana
    this.defense = defense
    this.skill = 0
  }
}

class Knight extends Hero{
  constructor(name, health, mana, defense) {
    super(name, health, mana, defense)
    this.skill = Math.floor(Math.random()* ((this.mana + this.health/2) + 100))
  }
}

class Assassin extends Hero{
  constructor(name, health, mana, defense) {
    super(name, health, mana, defense)
    this.skill = Math.floor(Math.random()* ((this.mana + this.health) + 700))
  }
}

class Mage extends Hero{
  constructor(name, health, mana, defense) {
    super(name, health, mana, defense)
    this.skill = Math.floor(Math.random()* ((this.mana + this.health*2) + 100))
  }
}

class SummonHero{
  constructor(){
    this.acakAngka = 0
    this.panggilHero;
  }

  acak(){
    this.acakAngka = Math.floor(Math.random()* 100)
  }

  panggil(){
    if(this.acakAngka > 85){
      let summonHero = new Hero()
      return summonHero.Mage
    }

  }
}

let hero = new Hero()

let knight = new Knight('Knight', 3213, 126, 431)
let assassin = new Assassin('Assassin', 1200, 543, 431)
let mage = new Mage('Mage', 1110, 603, 231)
console.log(knight);
console.log(assassin);
console.log(mage);

let panggilHero = new SummonHero()
console.log(panggilHero.panggil());
