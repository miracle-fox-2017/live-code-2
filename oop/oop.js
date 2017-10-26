class Hero{
    constructor(){
        this.name=null;
        this.health=null;
        this.mana=null;
        this.defense=null;
    }
}

class Assassin extends Hero{
    constructor(){
        super();
        this.name="Assassin";
        this.health=1200;
        this.mana=543;
        this.defense=431;
    }
    skill(){
        console.log("Assassin mengeluarkan skill: Ciat..! Serangan tanpa bayangan..");
    }
}

class Mage extends Hero{
    constructor(){
        super();
        this.name="Mage";
        this.health=1130;
        this.mana=603;
        this.defense=231;
    }
    skill(){
        console.log("Mage mengeluarkan skill: Terimalah serangan sihir ini..");
    }
}

class Knight extends Hero{
    constructor(){
        super();
        this.name="Knight";
        this.health=3213;
        this.mana=126;
        this.defense=431;
    }
    skill(){
        console.log("Knight mengeluarkan skill: Lemparan Perisai Suci");
    }
}

class SummonHero{
    static acak(){
        const acak=Math.ceil(Math.random() * 100);
        return acak;
    }
    static panggil(){
        const acakAngka=this.acak();
        if(acakAngka >= 85){
            const mage=new Mage();
            return mage;
        }else if(acakAngka > 50 && acakAngka < 85){
            const knight=new Knight();
            return knight;
        }else{
            const assassin=new Assassin();
            return assassin;
        }
    }
}

module.exports=SummonHero;
