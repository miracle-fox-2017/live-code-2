'use strict'

const Hero = require('./hero')
class Knight extends Hero{
	constructor(name, heatlh, mana, defense){
		super(name, heatlh, mana, defense)
	}
	 skill(){
		return 'Lemparan Perisai Suci'
	}
}

module.exports = Knight
