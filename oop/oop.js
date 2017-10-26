class Hero{
  constructor(name, health, mana, defense){
    this.name = name;
    this.health = health;
    this.mana = mana;
    this.defense = defense;
  }
}

class Assasin extends Hero {
  constructor(){
    super('Assasin', 1200, 543, 431)
  }
  
  skill(){
    console.log(this.name + ' mengeluarkan skill: ' + 'Ciat..! Serangan tanpa bayangan..');
  }
}

class Knight extends Hero {
  constructor(){
    super('Knight', 3213, 126, 431)
    
  }
  skill(){
    console.log(this.name + ' mengeluarkan skill: ' + 'Lemparan Perisai Suci');
  }
}

class Mage extends Hero {
  constructor(){
    super('Knight', 1130, 603, 231)
    
  }
  
  skill(){
    console.log(this.name + ' mengeluarkan skill: ' + 'Terimalah serangan sihir ini..');
  }
}

class SummonHero {
  
  static acak (){
    //return 1-100
    
    return Math.floor(Math.random()*100)+1;
  }
  
  static panggil(){
    let rand = this.acak();
    if(rand<50){
      // console.log('bikin assasin');
      return new Assasin();
      
    } else if(rand>50 && rand<84){
      // console.log('bikin Knight');
      return new Knight();
      
    } else if(rand>=85){
      // console.log('bikin mage');
      return new Mage();
      
    }
  }
}

console.log(SummonHero.panggil());
SummonHero.panggil().skill();