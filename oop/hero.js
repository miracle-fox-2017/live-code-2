class Hero {
  constructor(name, health, mana, defense) {
    this.name = name
    this.health = health
    this.mana = mana
    this.defense = defense
  }
}

module.exports = Hero;

// class Assassin extends Hero{
//   constructor() {
//     super()
//     this.name = 'Assassin'
//     this.health = 1200
//     this.mana = 543
//     this.defense = 431
//   }
//
//   skill() {
//     console.log('Ciat..! Serangan tanpa bayangan..');
//   }
// }
//
// class Knigth extends Hero {
//   constructor() {
//     super()
//     this.name = 'Knigth'
//     this.health = 3213
//     this.mana = 126
//     this.defense = 431
//   }
//
//   skill() {
//     console.log('Lemparan Perisai Suci');
//   }
// }
//
// class Mage extends Hero {
//   constructor() {
//     super()
//     this.name = 'Mage'
//     this.health = 1130
//     this.mana = 603
//     this.defense = 231
//   }
//
//   skill() {
//     console.log('Terimalah serangan sihir ini..');
//   }
// }

// class SummonHero {
//   static acak() {
//     return Math.ceil(Math.random() * 100)
//   }
//
//   static panggil() {
//     if(this.acak >= 85) {
//       return new Mage()
//     } else if(this.acak > 50 && this.acak < 85) {
//       return new Knigth()
//     } else {
//       return new Assassin()
//     }
//   }
// }

// console.log(SummonHero.panggil())
// console.log(SummonHero.acak())
//output yang diharapkan (output akan random jadi tidak perlu sesuai dengan contoh ini)
//Mage {name: Assassin, health: 1130, mana: 603, defense: 231}

// SummonHero.panggil().skill()
//output yang diharapkan (output akan random jadi tidak perlu sesuai dengan contoh ini)
//‘Assassin mengeluarkan skill: Ciat..! Serangan tanpa bayangan..’
