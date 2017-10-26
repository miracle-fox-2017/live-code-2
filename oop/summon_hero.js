'use strict'

const Hero = require('./hero')
const Knight = require('./Knight')
const Mage = require('./mage')
const Assasin = require('./assasin')

class SummonHero{
	static acak(){
		let angka = Math.floor(Math.random()*100)
		return angka
	}

	static panggil(){
		// console.log()
		let angka = this.acak()



		if(angka >= 85){
			let mage = new Mage('mage', 1130, 603, 231)
			return mage
		}
		else if(angka >= 51 && angka < 84){
			let knight = new Knight('Knight', 3213, 126, 431)
			return knight
		}
		else if(angka < 50){
			let assasin = new Assasin('Assasin', 1200, 543, 431)
			return assasin
		}
	}
}

module.exports = SummonHero