const Hero = require('./hero');
class Assassin extends Hero{
  constructor() {
    super()
    this.name = 'Assasin'
    this.health = 1200
    this.mana = 543
    this.defense =431
  }
  static skill(){
    console.log(`Ciat..! Serangan tanpa bayangan..`)
  }
}
// console.log(Assassin.skill());
module.exports = Assassin;
