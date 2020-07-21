class Weapons {
   
    constructor (_name, _damage, _actionPoints, _tier, _type, _modifiers) {
        Object.assign(this, {_name, _damage, _actionPoints, _tier, _type, _modifiers});
    }

    get damage(){
        return this._damage;
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
   
    
