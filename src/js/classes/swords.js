class Sword extends Weapons {    
   
    constructor(name, damage, actionsPoints , tier, type, modifiers ) {
        super(name, damage, actionsPoints, tier,type, modifiers )
    }  
}

class LightSword extends Sword {    
       
    constructor(name, damagemodifiers, tier, modifiers ) {
        let actionsPoints = 3;    

        let damage = new Damage(1, dices.D10, damagemodifiers )  

        super( name, damage, actionsPoints, tier, typeWeapons.LightSword, modifiers)
    }  
}

class HeavySword extends Sword {    

    constructor(name, damagemodifiers, tier, modifiers ) {
        let actionsPoints = 6;    
        let damage = new Damage(2, dices.D6, modidamagemodifiersfiers )  
        super(name, damage, actionsPoints, tier, typeWeapons.HeavySword, modifiers  )
    }  
}