const Hero = require('./hero')

class Knight extends Hero{
	constructor(){
		super('Knight', 3213, 126, 431)
	}

	skill(){
		console.log('Lemparan Perisai Suci');
	}
}

module.exports = Knight