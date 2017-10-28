const Hero = require('./hero.js')
class Mage extends Hero{
	constructor(name,health,mana,defense){
		super(name,health,mana,defense)
	}
	skill(){
		return this.name+" Mengeluarkan Skill:  Terimalah serangan sihir ini.."
	}	
}

module.exports = Mage