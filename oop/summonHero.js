const Hero = require('./hero.js');
const Assassin = require('./assassin.js');
const Knight = require('./knight.js');
const Mage = require('./mage.js');

class SummonHero {

  static acak() {
    let acak = Math.floor(Math.random() * 100) + 1;
    this.number = acak;
    return this.number;
  }

  static panggil() {
    let number = SummonHero.acak();
    let answer;
    if (number > 85) {
      answer = new Mage();
    } else if (number > 50 && this.number < 85) {
      answer = new Knight();
    } else if (number <= 50) {
      answer = new Assassin();
    }

    return answer;
  }
}

module.exports = SummonHero;
