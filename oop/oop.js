class Hero {
  constructor (name, health, mana, defense){
    this.name = name
    this.health = health
    this.mana = mana
    this.defense = defense

  }

}

class Assasin extends Hero {
  constructor(name, health, mana, defense ) {
    super(name, health, mana, defense)
  }

}


class Knight extends Hero {
  constructor(name, health, mana, defense ) {
    super(name, health, mana, defense)
  }

}

class Mage extends Hero {
  constructor(name, health, mana, defense ) {
    super(name, health, mana, defense)
  }
}

class SummonHero {


  static random(){
    let angkaRandom = Math.floor(Math.random() *100)
    return angkaRandom
  }

  static panggil(){
    let arr = []
    let hasil = this.random()
    if(hasil > 85){
      arr.push(new Mage('Mage', 1130, 603, 231))
    }else if(hasil >= 51 && hasil <= 84 ){
      arr.push(new Knight('Knight', 3213, 126, 431))
    }else if(hasil < 50 ){
      arr.push(new Mage ('Assasin', 1200, 543, 431))
    }

    return arr
  }

    static skill()  {
    //   console.log(arr);
    //   if(this.name == 'Assasin' ){
    //   console.log('Ciat..! Serangan tanpa bayangan..');
    // }else if(this.name == 'Knight'){
    //   console.log(' ‘Lemparan Perisai Suci’');
    // }else{
      console.log('Terimalah serangan sihir ini..');
    //}

    }

}

console.log(SummonHero.panggil())
