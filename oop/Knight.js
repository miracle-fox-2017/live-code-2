const Hero = require('./hero.js')
class Knight extends Hero{
	constructor(name,health,mana,defense){
		super(name,health,mana,defense)
	}	
	skill(){
		return this.name+" Mengeluarkan Skill: Lemparan Perisai Suci"
	}	
}

module.exports = Knight