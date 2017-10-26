const Assassin = require('./assassin')
const Knigth = require('./knight')
const Mage = require('./mage')

class SummonHero {
  static acak() {
    return Math.ceil(Math.random() * 100)
  }

  static panggil() {
    // console.log(this.acak());
    if(this.acak() >= 85) {
      // console.log('--> test > 85');
      return new Mage()
    } else if(this.acak() > 50 && this.acak() < 85) {
      // console.log('--> test 50 - 85');
      return new Knigth()
    } else {
      // console.log('--> test < 50');
      return new Assassin()
    }
  }
}

module.exports = SummonHero;
