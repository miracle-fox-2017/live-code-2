class Hero{
    constructor(name,health,mana,defense,skill){
        this.name = name
        this.health = health
        this.mana = mana
        this.defense = defense
        this.skill = skill
        
    }
    skill(){
        return this.skill
    }
}

class Assassin extends Hero{
    constructor(name,health,mana,defense,skill){
        super(name,health,mana,defense)
        this.skill = "Ciat..! Serangan tanpa bayangan.."
    }
    skill(){
        return this.skill
    }    
}
class Knight extends Hero{
    constructor(name,health,mana,defense){
        super(name,health,mana,defense)
        this.skill = console.log("Lemparan Perisai Suci!")
    }    
}
class Mage extends Hero{
    constructor(name,health,mana,defense){
        super(name,health,mana,defense)
        this.skill = console.log("Terimalah serangan sihir ini..")
    }    
}

class SummonHero{
    constructor(nama_hero){
        this.nama_hero = nama_hero
    }
    static acak(){
        let random = Math.floor((Math.random() * 100) + 1)
        return random
    }
    static panggil(){
        let hasil = SummonHero.acak()
        if(hasil > 85){
            let mage = new Mage ('Mage', 1130, 603, 231)
        }
        else if(hasil > 51 && hasil < 85){
            let knight = new Knight("Knight")
        }
    }
    
}

let angga = new Assassin('hero',12,12,12)
