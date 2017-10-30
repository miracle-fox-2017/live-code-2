class Hero {
  constructor(name,health,mana,defense) {
    this.name = name;
    this.health = health;
    this.mana = mana;
    this.defense = defense
  }
}

class Assassin extends Hero {
  constructor() {
    super('Assasins',1200,543,431)
  }
  skill(){
    console.log('Assasins mengeluarkan skill: Ciat..! Serangan tanpa bayangan..');
  }
}

class Knight extends Hero {
  constructor() {
    super('Knight',3213,126,431)
  }
  skill(){
    console.log('Knight mengeluarkan skill: lemparan perisai suci');
  }
}

class Mage extends Hero {
  constructor() {
    super('Mage',1200,543,431)
  }
  skill(){
    console.log('Mage mengeluarkan skill: terimalah serangan sihir ini');
  }
}

class SummonHero {
  constructor() {
    this.random = 0
  }
  static acak(){
    this.random = Math.floor(Math.random()*100+1)
  }
  static panggil(){
    this.acak()
    if(this.random >= 85){
      return this.mage = new Mage()
    }
    else if(this.random >= 51 || this.random <= 84){
      return this.knight = new Knight()
    }
    else if(this.random <= 50){
      return this.assassin = new Assassin()
    }
  }
}


// console.log(SummonHero.panggil())
//output yang diharapkan (output akan random jadi tidak perlu sesuai dengan contoh ini)
//Mage {name: Mage, health: 1130, mana: 603, defense: 231}

SummonHero.panggil().skill()
//output yang diharapkan (output akan random jadi tidak perlu sesuai dengan contoh ini)
//‘Assassin mengeluarkan skill: Ciat..! Serangan tanpa bayangan..’
