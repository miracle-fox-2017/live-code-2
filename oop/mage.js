const Hero = require('./hero')

class Mage extends Hero{
  constructor(name,health,mana,defense) {
    super(name,health,mana,defense)
  }

  skill() {
    console.log('Terimalah serangan sihir ini..');
  }
}

module.exports = Mage;
