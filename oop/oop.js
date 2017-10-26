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


class Assassin extends Hero
{
  constructor(name)
  {
    super(name)
    this.health = 1200;
    this.mana = 543;
    this.defense = 431;
  }
}

class Knight extends Hero
{
  constructor(name)
  {
    super(name)
    this.health = 3213;
    this.mana = 126;
    this.defense = 431;
  }
}

class Mage extends Hero
{
  constructor(name)
  {
    super(name)
    this.health = 1130;
    this.mana = 603;
    this.defense = 231;
  }
}


class Skill
{
  constructor(jobOwner)
  {
    this.jobOwner = jobOwner;
  }
  
  useSkill()
  {
    debugger
    if (this.jobOwner === "mage")
    {
      return `Mage mengeluarkan skill : Terimalah serangan sihir ini..`;
    }
    if (this.jobOwner === "assassin")
    {
      return `Assassin mengeluarkan skill : Ciat..! Serangan tanpa bayangan..`;
    }
    if (this.jobOwner === "knight")
    {
      return `Knight mengeluarkan skill : Lemparan Perisai Suci`;
    }
  }
}


class SummonHero
{
  constructor()
  {
    
  }
  
  static acak()
  {
    return Math.floor(Math.random() * (101 - 1)) + 1
  }
  
  static panggil()
  {
    let result = this.acak()
    {
      if (result >= 85)
      {
          let mage = new Mage("mage")
          return mage//.skill();
      }
      if (result > 50 && result <= 84)
      {
        let knight = new Knight("knight")
        return knight//.skill();
      }
      else
      {
        let ass = new Assassin("assassin")
        return ass//.skill();
      }
    }
  }
  
  
  
}



module.exports = SummonHero;