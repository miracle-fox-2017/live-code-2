const Hero = require('./hero.js')
class Assasin extends Hero{
	constructor(name,health,mana,defense){
		super(name,health,mana,defense)
	}
	skill(){
		return this.name+" Mengeluarkan Skill: Ciat..! Serangan tanpa bayangan.."
	}
}

module.exports = Assasin