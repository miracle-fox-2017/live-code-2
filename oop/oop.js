class Hero {
  constructor(name,health,mana,defense) {
    this.name = name;
    this.health = health
    this.mana = mana
    this.defense = defense
  }
}

class Assassin extends Hero {
  constructor(name,health,mana,defense) {
    super(name,health,mana,defense);
  }

  skillAssassin() {
    return 'Ciat..! Serangan tanpa bayangan..'
  }
}

class Knight extends Hero{
  constructor(name,health,mana,defense) {
    super(name,health,mana,defense);
  }

  skillKnight() {
    return 'Lemparan Perisai Suci'
  }
}

class Mage extends Hero{
  constructor(name,health,mana,defense) {
    super(name,health,mana,defense);
  }

  skillMage() {
    return 'Terimalah serangan sihir ini'
  }
}

class SummonHero {
  constructor() {
    this.hero = this.acak();
    this.mage = new Mage('Mage','1130','603','231');
    this.knight = new Knight('Knight','3213','126','431')
    this.assassin = new Assassin('Assassin','1200','543','431')
  }

    acak() {
      let random = Math.ceil(Math.random() * 100);
      return random;
    }

    panggil() {
      if(this.hero >= 85) {
        return this.mage;
      } else if(this.hero >= 50) {
        return this.knight;
      } else {
        return this.assassin;
      }
    }
}

let objsummon = new SummonHero();
console.log(objsummon.panggil());

// let objAssassin = new Assassin('Assassin','1200','543','431')
// // console.log(objAssassin)
// let objKnight = new Knight('Knight','3213','126','431')
// // console.log(objKnight)
// let objMage = new Mage('Mage','1130','603','231')
// // console.log(objMage)

// console.log(SummonHero.panggil())
//output yang diharapkan (output akan random jadi tidak perlu sesuai dengan contoh ini)
//Mage {name: Mage, health: 1130, mana: 603, defense: 231}

// SummonHero.panggil().skill()
//output yang diharapkan (output akan random jadi tidak perlu sesuai dengan contoh ini)
//‘Assassin mengeluarkan skill: Ciat..! Serangan tanpa bayangan..’
