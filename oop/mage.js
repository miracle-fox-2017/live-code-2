'use strict'

const Hero = require('./hero')


class Mage extends Hero{
	constructor(name, heatlh, mana, defense){
		super(name, heatlh, mana, defense)
	}
	 skill(){
		return 'Terimalah serangan sihir ini..'
	}
}

module.exports = Mage
