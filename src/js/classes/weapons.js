class Weapons {
   
    constructor (name, damage, actionPoints, tier, type, modifiers ){
        this._damage = damage;
        this._actionPoints = actionPoints;
        this._tier = tier;
        this._type = type;
        this._name = name;
        this._modifiers = modifiers;
    }
}

const subtypeWeapons = {
    TwoHanded: { 
        _maxRange : 2        
    }, 
    OneHanded: { 
        _maxRange : 1
    }, 
    Light: { 
        _maxRange : 1
    } , 
    Throwable: {
        _maxRange : 5
    }, 
    Shootable: {
        _maxRange : 10
    }    
}

const typeWeapons = {
    LightSword: {
        _subtype : subtypeWeapons.OneHanded
    },
    HeavySword: {
        _subtype : subtypeWeapons.TwoHanded
    }, 
    Dagger: {
        _subtype : subtypeWeapons.Throwable
    }, 
    Knife: {
        _subtype : subtypeWeapons.Light
    },         
    BOW : {
        _subtype : subtypeWeapons.Shootable
    } 
}
   
    
