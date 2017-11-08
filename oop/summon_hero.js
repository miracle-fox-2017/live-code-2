const Mage = require('./mage')
const Knight = require('./knight')
const Assasin = require('./assasin')

class SummonHero {

    static acak() {
        let angka = Math.ceil(Math.random() * 100)
        return angka

    }
    static panggil() {
        let angkaRandom = SummonHero.acak()
        let arr
        if (angkaRandom >= 85) {
            arr = new Mage()
        } else if (angkaRandom >= 51 && angkaRandom <= 84) {
            arr = new Knight()
        } else {
            arr = new Assasin()
        }

        return arr;
    }
}

module.exports = SummonHero