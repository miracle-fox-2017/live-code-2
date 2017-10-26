const Hero = require('./Hero');

class Mage extends Hero {
  constructor() {
    super('Mage', 1130, 603, 231)
  }
  skill() {
    console.log('Terimalah serangan sihir ini..');
  }
}

module.exports = Mage;
