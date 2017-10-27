const Hero = require('./hero')

class Assassin extends Hero{
  constructor(name,health,mana,defense) {
    super(name,health,mana,defense)
  }

  skill() {
    console.log('Ciat..! Serangan tanpa bayangan..');
  }
}

module.exports = Assassin;
