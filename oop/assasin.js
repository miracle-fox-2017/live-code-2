const Hero = require('./hero')

class Assasin extends Hero {
    constructor() {
        super("Assasin", 1200, 543, 431)
    }
    skill() {
        return 'Ciat..! Serangan tanpa bayangan..'
    }

}


module.exports = Assasin