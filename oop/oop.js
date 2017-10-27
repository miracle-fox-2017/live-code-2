class Hero{
  constructor(name,health,mana,defense){
    this.name = name
    this.health = health
    this.mana = mana
    this.defense = defense
  }

}

class Assassin extends Hero{
  constructor(name,health,mana,defense){
    super(name,health,mana,defense)
  }

  skill(){
    return `Ciat..! Serangan tanpa bayangan..`
  }
}

class Knight extends Hero{
  constructor(name,health,mana,defense){
    super(name,health,mana,defense)
  }

  skill(){
    return `Lemparan Perisai Suci`
  }
}

class Mage extends Hero{
  constructor(name,health,mana,defense){
    super(name,health,mana,defense)
  }

  skill(){
    return `Terimalah serangan sihir ini..`
  }
}

class SummonHero{
  constructor(){
    this.random = 0
  }

  static acak(){
    let rand = Math.floor(Math.random() * 100) + 1
    return rand
  }

  static panggil(){
    if(this.acak() > 85){
      return new Mage('Mage', 1130, 603, 231)
    }else if(this.acak() < 85){
      return new Knight('Knight', 3213, 126, 431)
    }else if(this.acak() < 50){
      return new Assassin('Assassin', 1200, 543, 431)
    }

  }

}

// let summon = new SummonHero()
// console.log(summon.panggil());
// console.log(SummonHero.panggil().skill())
let hero = SummonHero.panggil()
console.log(hero);
console.log(hero.skill())
