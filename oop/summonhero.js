const Assassin = require('./assassin');
const Mage = require('./mage');
const Knight = require('./knight');
class SummonHero {
  constructor() {

  }
  static acak(){
    return Math.floor(Math.random() * 100) + 1;
  }
  static panggil(){
    if(this.acak()>= 85){
      let mage = new Mage()
      return mage
      //mage
    } else if(this.acak() >= 51){
      let knight = new Knight()
      return knight
      // knight
    } else {
      let assassin = new Assassin()
      return assassin
      // Assasin
    }
  }

}
module.exports = SummonHero;
