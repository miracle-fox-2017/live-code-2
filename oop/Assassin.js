const Hero = require('./Hero')

class Assassin extends Hero {
  constructor() {
    super('Assassin', 1200, 543, 431)
  }

  skill() {
    console.log('Ciat..! Serangan tanpa bayangan..');
  }
}

module.exports = Assassin;
