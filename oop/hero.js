'use strict'

class Hero{
	constructor(name, heatlh, mana, defense){
		this.name = name
		this.heatlh = heatlh
		this.mana = mana
		this.defense = defense
	}

	skill(){
		console.log('skillnya hero')
	}

}
module.exports = Hero
