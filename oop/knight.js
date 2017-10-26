const Hero = require('./hero');

class Knight extends Hero {
  constructor(){
    super('Knight', 3213, 126, 431)
    
  }
  skill(){
    console.log(this.name + ' mengeluarkan skill: ' + 'Lemparan Perisai Suci');
  }
}

module.exports = Knight;