const Hero = require('./hero')

class Assassin extends Hero{
	constructor(){
		super('Assassin', 1200, 543, 431)
	}

	skill(){
		console.log('Ciat.. !! Serangan tanpa bayangan..');	
	}
}

// let a = new Assassin('nizar', 1000, 500, 300)
// console.log(a);
module.exports = Assassin