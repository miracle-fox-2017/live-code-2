const { Hero, Assassin, Knight, Mage } = require('./oop');

class SummonHero {
  static acak() {
    return Math.floor(Math.random() * 101);
  }

  static panggil() {
    const num = this.acak();

    if (num > 84) {
      const mage = new Mage('Mage', 1200, 543, 431);
      return mage;
    } else if (num > 50 && num < 85) {
      const knight = new Knight('Knight', 3213, 126, 431);
      return knight;
    } else {
      const assassin = new Assassin('Assassin', 1130, 603, 231);
      return assassin;
    }
  }
}

console.log(SummonHero.panggil());
console.log(SummonHero.panggil().skill());