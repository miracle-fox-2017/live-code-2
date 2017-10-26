class Hero {
  constructor(){
    this.Name = 'Hero'
    this.Health = Math.floor(Math.random() * 5000)
    this.Mana = Math.floor(Math.random() * 1000)
    this.Defense = Math.floor(Math.random() * 1000)
  }
  
}

class Asassin extends Hero {
  constructor(){
    super()
    this.Name = 'Asassin'
  }
  
  skill(){
    return 'Ciat..! Serangan tanpa bayangan..'
  }
}

class Knight extends Hero {
  constructor(){
    super()
    this.Name = 'Knight'
  }
  skill(){
    return 'Lemparan Perisai Suci'
  }
}

class Mage extends Hero {
  constructor(){
    super()
    this.Name = 'Mage'
  }
  skill(){
    return 'Terimalah serangan sihir ini..'
  }
}

class SummonHero{
  static acak(){
    return Math.floor(Math.random() * 100)
  }
  static panggil(){
    if(SummonHero.acak() >= 85){
      let hero = new Mage
      return hero
    }
    if(50 > SummonHero.acak() < 85){
      let hero = new Knight
      return hero
    }
    if(SummonHero.acak() < 50){
      let hero = new Asassin
      return hero
    }
  }
}

let as = new Asassin
// console.log(as);
console.log(SummonHero.panggil());
console.log(SummonHero.panggil().skill());