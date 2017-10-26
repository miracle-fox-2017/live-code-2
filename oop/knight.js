const Hero = require('./hero')

class Knigth extends Hero {
  constructor() {
    super()
    this.name = 'Knigth'
    this.health = 3213
    this.mana = 126
    this.defense = 431
  }

  skill() {
    console.log('Lemparan Perisai Suci');
  }
}

module.exports = Knigth;
