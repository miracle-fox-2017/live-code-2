const Hero = require('./hero');
class Mage extends Hero{
  constructor() {
    super()
    this.name = 'Mage'
    this.health = 1130
    this.mana = 603
    this.defense =231
  }
  skill(){
    return `Terimalah serangan sihir ini..`
  }
}
module.exports = Mage;
