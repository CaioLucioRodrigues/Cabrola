const modifiers = { 
    DAMAGE: "Damage",
    INCREASESTATUS: "IncreaseStatus",
    INCREASEABILITY: "IncreaseAbility" 
} 

const increaseStatus = { 
    HEALTH_POINTS: "Heath Points", 
    ARMOR: "Armor", 
    INITIATIVE: "Initiative", 
    ACTION_POINTS_PER_ROUND: "Actions Points Per Round",     
    EXPERIENCE: "Experience"
}

const increaseAbility = { 
    STRENGTH: "Strength", 
    DEXTERITY: "Dexterity",  
    CONSTITUTION: "Constitution",  
    INTELLIGENCE: "Intelligence"
}

const duration = { 
    ROUNDS: "Rounds", 
    UNTIL_END_FIGHT: "Until End Fight", 
    JUST_IN_TIME: "Just In Time" 
}

class Modifier {

    constructor(_type) {
        Object.assign(this, {_type});
    }

    get type() {
        return this._type;
    }
}

class DamageModifier extends Modifier {

    constructor(_diceMove) {
        super(modifiers.DAMAGE);
        Object.assign(this, {_diceMove})
    }

    get diceMove() {
        return this._diceMove;
    }
}

class increaseStatusModifier extends Modifier {

    constructor(_increaseStatus, _points, _duration, _rounds) {
        super(modifiers.INCREASESTATUS);
        Object.assign(this, {_increaseStatus, _points, _duration, _rounds});
    }
}

class increaseAbilityModifier extends Modifier {

    constructor(_increaseAbility, _points, _duration, _rounds) {
        super(modifiers.INCREASEABILITY);
        Object.assign(this, {_increaseAbility, _points, _duration, _rounds});
    }
}