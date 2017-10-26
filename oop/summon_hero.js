
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