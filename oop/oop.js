class Hero {
  constructor(name,health,mana,defense) {
    this._name = name,
    this._health = health,
    this._mana = mana
    this._defense = defense
  }

}



class Assasin extends Hero{
  constructor() {
    super ()
    this._name = 'Assasin';
    this._health = 1200
    this._mana =  543
    this._defense = 431
  }

  skill(){

  }

}


class Knight extends Hero {
  constructor() {
    super()
    this._name = 'Knigth';
    this._health = 1200
    this._mana =  543
    this._defense = 431

  }
  skill(){

  }

}

class Mage extends Hero {
  constructor() {
    super(this._name, this._health, this._mana,this._defense)
    this._name = 'Mage';
    this._health = 1200
    this._mana =  543
    this._defense = 431

  }

  skill(){

  }
}

class SummonHero{

  acak(){
    let min = 1;
    let max = 100;
    // return Math.random() * (max - min) + min;
    console.log(Math.random() * (max - min) + min);
  }

  panggil(){
  }
}




//let herostar = new Hero()
let assasin = new Assasin
let sumHaro = new SummonHero;
console.log(assasin);
// console.log(sumHaro.acak());
