class Hero {
    constructor(name, health, mana, defense) {
        this.name = "Assasin" name
        this.health = 1200 health
        this.mana = 543 mana
        this.defense = 431 defense
    }
    skill() {
        return 'Ciat..! Serangan tanpa bayangan..'
    }
}

class Assasin extends Hero {


}

class Knight extends Hero {
    constructor() {
        super()
        this.name = "Knight"
        this.health = 3213
        this.mana = 126
    }

    static skill() {
        return 'Lemparan Perisai Suci'
    }

}

class Mage extends Hero {
    constructor() {
        super()
        this.name = 'Mage'
        this.health = 113
        this.mana = 603
        this.defense = 231
    }
    static skill() {
        return 'Terimalah serangan sihir ini...'
    }

}

class SummonHero {

    static acak() {
        let angka = Math.ceil(Math.random() * 100)
        return angka

    }
    static panggil() {
        let angkaRandom = SummonHero.acak()
        let arr = []
        if (angkaRandom >= 85) {
            arr.push(new Mage())
        } else if (angkaRandom >= 51 && angkaRandom <= 84) {
            arr.push(new Knight())
        } else {
            arr.push(new Assasin())
        }

        return arr;
    }
}

module.exports = SummonHero