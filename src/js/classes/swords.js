class Sword extends Weapons {    
   
    constructor(name, damage, actionsPoints , tier, type ) {
        super(name, damage, actionsPoints, tier,type )
    }  
}

class LigthSword extends Sword {    
       
    constructor(name, modifiers, tier ) {
        this._actionsPoints = 3;    
        this._damage = new Damage(1, dices.D10, modifiers )  
        super( name, damage, actionsPoints, modifiers, tier, typeWeapons.LightSword)
    }  
}

class HeavySword extends Sword {    

    constructor(name, damage, actionsPoints , tier ) {
        this._actionsPoints = 6;    
        this._damage = new Damage(2, dices.D6, modifiers )  
        super(name, damage, actionsPoints, tier, typeWeapons.HeavySword  )
    }  
}