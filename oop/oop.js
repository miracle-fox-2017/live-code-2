class Hero{
  constructor(name,health,mana,defense,skill){
    this.name = name
    this.health = health
    this.mana = mana
    this.defense = defense
    this.skill = skill
  }
  Useskill(){
    return `${this.name} mengeluarkan skill ${this.skill}`
  }
}

class Assasin extends Hero{
  constructor(){
    super('Assasin',1200,543,431,'ciaat..serangan cepat!')
  }
}

class Knight extends Hero{
  constructor(){
    super('Knight',3213,126,431,'eaarrgh shield charge!!')
  }
}

class Mage extends Hero{
  constructor(){
    super('Mage',1130,603,231,'quas.. wex.. exort..')
  }
}

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

}

console.log(SummonHero.panggil().Useskill())


// const Hero = require('./Hero.js')
// const Assasin = require('./Assasin.js')
// const Knight = require('./Knight.js')
// const Mage = require('./Mage.js')
// const SummonHero = require('./SummonHero.js')
//
