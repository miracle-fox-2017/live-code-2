class Hero{
	constructor(name,health,mana,defense){
		this.name = name
		this.health = health
		this.mana = mana
		this,defense = defense
	}
}

class Assasin extends Hero{
	constructor(name,health,mana,defense){
		super(name,health,mana,defense)
	}
	skill(){
		return this.name+" Mengeluarkan Skill: Ciat..! Serangan tanpa bayangan.."
	}
}

class Knight extends Hero{
	constructor(name,health,mana,defense){
		super(name,health,mana,defense)
	}	
	skill(){
		return this.name+" Mengeluarkan Skill: Lemparan Perisai Suci"
	}	
}

class Mage extends Hero{
	constructor(name,health,mana,defense){
		super(name,health,mana,defense)
	}
	skill(){
		return this.name+" Mengeluarkan Skill:  Terimalah serangan sihir ini.."
	}	
}

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
let summonHero = new SummonHero()
console.log(summonHero.panggil())
console.log(summonHero.panggil().skill())