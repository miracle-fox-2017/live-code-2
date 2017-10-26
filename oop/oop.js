class Hero {
  constructor(name,health,mana,defense) {
    this.name = name
    this.health = health
    this.mana = mana
    this.defense = defense
  }
}

class Assasin extends Hero {
  constructor(name,health,mana,defense) {
    super (name,health,mana,defense)
  }
  skill(){
    let skill ='Ciat..! Serangan tanpa bayangan..'
    return skill
  }
}
class Mage extends Hero {
  constructor(name,health,mana,defense) {
    super(name,health,mana,defense)

  }
  skill(){
    let skill ='Terimalah serangan sihir ini..'
    return skill
  }
}
class Knigth extends Hero {
  constructor(name,health,mana,defense) {
    super(name,health,mana,defense)
  }
  skill(){
    let skill = 'Lemparan Perisai Suci'
    return skill
  }
}
class SummonHero {
  static acak(){
    let random = Math.ceil(Math.random()*(100-1)+1)
    return random
  }
static panggil(){
    let angka = this.acak()
    if (angka >= 85){
      let mage = new Mage ('Mage',1130,603,231)
      console.log(mage);
    }
    else if (angka > 50) {
      let knight = new Knigth ('Knigth',3213,126,431)
      console.log(knight);
    }
    else if (angka < 50 ) {
      let assassin = new Assasin ('Assasin',1200,543,431)
      console.log(assassin);
    }
  }


}



SummonHero.panggil();

// Detail Hero:
// Assassin
// Name: Assassin
// Health: 1200
// Mana: 543
// Defense: 431
// Knight
// Name: Knight
// Health: 3213
// Mana: 126
// Defense: 431
// Mage
// Name: Mage
// Health: 1130
// Mana: 603
// defense: 231
