
class Hero {
  constructor(name, health, mana, defense) {
    this.name = name;
    this.health = health;
    this.mana = mana;
    this.defense = defense;
  }

  skill() {
    if (this.name == 'Assassin') {
      console.log('Ciat..! Serangan tanpa bayangan..');
    } else if (this.name == 'Knight') {
      console.log('Lemparan Perisai Suci');
    } else if (this.name == 'Mage') {
      console.log('Terimalah serangan sihir ini..');
    }
  }
}

module.exports = Hero;
