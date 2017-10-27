

class Hero {
  constructor(name, health, mana, defense) {
    this.name = name;
    this.health = health;
    this.mana = mana;
    this.defense = defense;
  }
}

class Assasin  {
  constructor(name, health, mana, defense) {
    this.name = name
    this.health = health
    this.mana = mana
    this.defense = defense
  }
}

class Summonhero {
  constructor() {
  }
  Acak (hero){
    let random = Math.random() * 100;

    if(random > 0){
      console.log(new Assasin());
    }
  }

}

class Knight extends Hero {
  constructor() {
    super()
  }
}

// class Mage {
//   constructor() {
//     super
//   }
// }


let pahlawan = new Hero()
let assasin = new Assasin('assasin', 1200, 530, 1286 )
let summonhero = new Summonhero()
summonhero.Acak()
let knight = new Knight('knight', 1100, 761, 1837)
console.log(knight);






//
