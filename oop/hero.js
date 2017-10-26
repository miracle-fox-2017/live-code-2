class Hero
{
  constructor(name)
  {
    this.name = name;
    this.health = 0;
    this.mana = 0;
    this.defense = 0;
  }
  
  skill()
  {
    let ownedSkill = new Skill(this.name);
    return ownedSkill.useSkill();
  }
}

module.exports = Hero;