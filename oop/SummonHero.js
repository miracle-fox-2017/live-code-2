class SummonHero{
  static panggil(){
    let random = Math.ceil(Math.random()*100)
    if(random >= 85){
      //console.log(new Mage())
      return new Mage()
    }
    if(random >= 51 && random <=84){
      //console.log(new Knight())
      return new Knight()
    }else{
      //console.log(new Assasin())
      return new Assasin()
    }
  }

  module.export = SummonHero
