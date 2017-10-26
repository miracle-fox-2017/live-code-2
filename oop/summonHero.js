class SummonHero {
  constructor() {

  }

  static acak() {
    let acak = Math.floor(Math.random() * 100) + 1;
    this.number = acak;
    return this.number;
  }

  static panggil() {
    let number = SummonHero.acak();
    let answer;
    if (number > 85) {
      answer = 'hero Mage';
    } else if (number > 50 && this.number < 85) {
      answer = 'hero Knight';
    } else if (number <= 50) {
      answer = 'hero Assassin';
    }
    return answer;
  }
}
module.exports = SummonHero;

// console.log(SummonHero.acak());
// console.log(SummonHero.panggil());
