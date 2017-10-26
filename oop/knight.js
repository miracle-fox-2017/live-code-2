const Hero = require('./hero');
class Knight extends Hero{
  constructor() {
    super()
    this.name = 'Knight'
    this.health = 3213
    this.mana = 126
    this.defense =431
  }
  skill(){
    return `Lemparan Perisai Suci`
  }
}
module.exports = Knight;
