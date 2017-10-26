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
  super()
  this.name = Assassin
  this.health= 1200
  this.mana= 543
  this.defense= 431
  this.skill='Ciat..! Serangan tanpa bayangan.'

  }
}

class Knight extends Hero{
  constructor(){
  super()
  this.name = Knigth
  this.health= 3213
  this.mana= 126
  this.defense= 431
  this.skill='Lemparan Perisai Suci'
  }
}

class Mage extends Hero{
  constructor(){
    super()
    this.name = Mage
    this.health= 1130
    this.mana= 603
    this.defense= 231
    this.skill='Terimalah serangan sihir ini..'
  }
}


class SummonHero{

  static acak(){
    let random = Math.floor(Math.random()*100)
    return random
  }
  static panggil(){
    if(acak()>=85){
      return new Mage()
    }
    else if(acak()>50 && acak()<85){
      return new Knight()
    }
    else if(acak()<50){
      return new Assasin()
    }
  }
}

console.log(SummonHero.panggil());
