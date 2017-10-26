const Hero = require('./hero');
class Assassin extends Hero{
  constructor() {
    super()
    this.name = 'Assasin'
    this.health = 1200
    this.mana = 543
    this.defense =431
  }
  skill(){
    return `Ciat..! Serangan tanpa bayangan..`
  }
}
module.exports = Assassin;
