const Hero = require('./hero')
class Knight extends Hero {
    constructor() {
        super("Knight", 3213, 126, 431)
    }

    skill() {
        return 'Lemparan Perisai Suci'
    }

}

module.exports = Knight
// /console.log(Hero.skill())

