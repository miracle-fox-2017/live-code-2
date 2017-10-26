const Assasin = require('./assasin')
const Mage = require('./mage')
const Knight = require('./knight')

class SummonHero {
  
  static acak (){
    //return 1-100
    return Math.floor(Math.random()*100)+1;
  }
  
  static panggil(){
    let rand = this.acak();
    if(rand<=50){
      // console.log('bikin assasin');
      return new Assasin();
      
    } else if(rand>50 && rand<84){
      // console.log('bikin Knight');
      return new Knight();
      
    } else if(rand>=85){
      // console.log('bikin mage');
      return new Mage();
      
    }
  }
}

module.exports = SummonHero;