const Hero = require('./Hero')
const Assassin = require('./Assassin')
const Knight = require('./Knight')
const Mage = require('./Mage')

class SummonHero {
  static acak() {
    return Math.floor(Math.random() * 100)
  }

  static panggil() {
    var acak = this.acak()

    if(acak > 85) {
      return new Mage()
    }
    else if(acak > 51) {
      return new Knight()
    }
    else {
      return new Assassin()
    }
  }
}

module.exports = SummonHero;
