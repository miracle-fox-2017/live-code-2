const Assassin = require('./assassin')
const Knight = require('./knight')
const Mage = require('./mage')

class SummonHero{

	static acak(){
		return Math.floor((Math.random() * 100) + 1)
	}

	static panggil(){

		let random = this.acak()

		if(random<50){
			return new Assassin()
		}

		if(random>=50 && random<85){
			return new Knight()
		}

		if(random>=85 && random <=100){
			return new Mage()
		}
	}
}

module.exports = SummonHero