'use strict'

const Hero = require('./hero')

class Assasin extends Hero{
	constructor(name, heatlh, mana, defense){
		super(name, heatlh, mana, defense)
	}
	skill(){
		return 'Ciat..! Serangan tanpa bayangan..'
	}
}

module.exports = Assasin