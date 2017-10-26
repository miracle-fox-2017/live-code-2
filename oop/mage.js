const Hero = require('./hero');

class Mage extends Hero {
  constructor(){
    super('Knight', 1130, 603, 231)
    
  }
  
  skill(){
    console.log(this.name + ' mengeluarkan skill: ' + 'Terimalah serangan sihir ini..');
  }
}

module.exports = Mage;