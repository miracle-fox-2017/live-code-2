const Hero = require('./hero')
class Mage extends Hero {
    constructor() {
        super('Mage', 113, 603, 231)
    }

    skill() {
        return 'Terimalah serangan sihir ini...'
    }

}


module.exports = Mage