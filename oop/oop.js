class Hero{
  constructor(job,health,mana,defense){
    this.job = job
    this.health = health
    this.mana = mana
    this.defense = defense
  }
}

class Assassin extends Hero{
  constructor(){
    super()
    this.job = Assassin
    this.health = 1200
    this.mana = 543
    this.defense = 431
    this.serang =  'Ciat..! Serangan tanpa bayangan..'
  }

}

class Knight extends Hero{
  constructor(){
    super()
    this.job = Knight
    this.health = 3213
    this.mana = 126
    this.defense = 431
    this.serang = 'Lemparan Perisai Suci'
  }

}

class Mage extends Hero{
  constructor(){
    super()
    this.job = Mage
    this.health = 1130
    this.mana = 603
    this.defense = 231
    this.serang =  'Terimalah serangan sihir ini..i'
  }



}
let apaaja = new Hero()
let asa = new Assassin()
let kni = new Knight()
let mag = new Mage()
console.log(apaaja);
console.log(asa);
console.log(kni);
console.log(mag);
// function acak(){
//   let data = [asa,kni,mag]
//   let rand = Math.round(Math.random()*data.length)
//   return data
// }
// console.log(acak);
