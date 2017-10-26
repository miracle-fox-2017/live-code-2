class Hero{
  constructor(name, health, mana, defense){
    this.name=name;
    this.health=health;
    this.mana=mana;
    this.defense=defense
  }

}
class Assasin extends Hero{
  constructor(){
  super('Assassin',1200,543,431)


  }
  skill(){
    return 'Ciat..! Serangan tanpa bayangan.'
  }
}

class Knight extends Hero{
  constructor(){
  super('Knight',3213,126,431)
  }
  skill(){
    return 'Lemparan Perisai Suci'
  }
}

class Mage extends Hero{
  constructor(){
    super('Mage',1130,603,231)
  }
  skill(){
    return 'Terimalah serangan sihir ini..'
  }
}



class SummonHero{

  static acak(){
    let random = Math.floor(Math.random()*100)
    // console.log(random);
    return random
  }
  static panggil(){
    let random = this.acak()

    if(random>=85){
      let result = new Mage()
      return result
    }
    else if(random>50 && random<85){
      let result = new Knight()
      return result
    }
    else if(random<50){
      let result = new Assasin()
      return result
    }
  }

}
// console.log(SummonHero.acak());
console.log(SummonHero.panggil());
console.log(SummonHero.panggil().skill());
