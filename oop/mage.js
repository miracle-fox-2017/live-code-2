const Hero = require('./hero.js');

class Mage extends Hero {
  constructor() {
    super('Mage', 1130, 603, 231);
  }
}

module.exports = Mage;
