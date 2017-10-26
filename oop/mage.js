const Hero = require('./hero')
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


module.exports = Mage