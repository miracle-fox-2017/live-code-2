const opp = require('./knigth');

class SummonHero {
    static acak() {
        return Math.ceil(Math.random() * 100);
    }

    static panggil() {
        let getAcak = this.acak();
        let hero = ''
        if (getAcak > 85) {
            hero = new Mage('Mage', 1130, 603, 231);
        } else if (getAcak > 51 && getAcak < 85) {
            hero = new Knight('Knight', 3213, 126, 431);
        } else {
            hero = new Assassin('Assassin', 1200, 543, 431);
        }
        return hero;
    }
}

console.log(SummonHero.panggil())
//output yang diharapkan (output akan random jadi tidak perlu sesuai dengan contoh ini)
//Mage {name: Mage, health: 1130, mana: 603, defense: 231}

SummonHero.panggil().skill()
//output yang diharapkan (output akan random jadi tidak perlu sesuai dengan contoh ini)