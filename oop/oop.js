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

class Assasin extends Hero{
	constructor(name, heatlh, mana, defense){
		super(name, heatlh, mana, defense)
	}
	skill(){
		return 'Ciat..! Serangan tanpa bayangan..'
	}
}

class Mage extends Hero{
	constructor(name, heatlh, mana, defense){
		super(name, heatlh, mana, defense)
	}
	 skill(){
		return 'Terimalah serangan sihir ini..'
	}
}

class Knight extends Hero{
	constructor(name, heatlh, mana, defense){
		super(name, heatlh, mana, defense)
	}
	 skill(){
		return 'Lemparan Perisai Suci'
	}
}

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




console.log(SummonHero.panggil())
console.log(SummonHero.panggil().skill())