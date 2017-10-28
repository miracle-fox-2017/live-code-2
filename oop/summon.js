const Hero = require('./hero.js')
const Mage = require('./Mage.js')
const Knight = require('./Knight.js')
const Assasin = require('./Assasin.js')

class SummonHero{

	panggil(){
	let obj=[]	
	let temp ;
		let randomNum = Math.floor(Math.random()*150)
		if(randomNum >=85 ){
			temp = new Mage("Mage",1130,603,231)
		}
		if(randomNum >50 && randomNum <85 ){
			temp = new Knight("Knight",3213,126,431)
		}
		if(randomNum <=50 ){
			temp = new Assasin("Assasin",1200,543,431)
		}			
		return (temp)
	}
}

module.exports = SummonHero