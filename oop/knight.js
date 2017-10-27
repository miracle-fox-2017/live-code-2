const Hero = require('./hero')

class Knight extends Hero{
  constructor(name,health,mana,defense) {
    super(name,health,mana,defense)
  }

  skill() {
    console.log('Lemparan Perisai Suci');
  }
}

module.exports = Knight;
