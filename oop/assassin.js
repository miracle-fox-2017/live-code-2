const Hero = require('./hero')

class Assassin extends Hero{
  constructor() {
    super()
    this.name = 'Assassin'
    this.health = 1200
    this.mana = 543
    this.defense = 431
  }

  skill() {
    console.log('Ciat..! Serangan tanpa bayangan..');
  }
}

module.exports = Assassin;
