class Damage{

    constructor(_quantitiesDices, _dice, _modifier){
        Object.assign(this, {_quantitiesDices, _dice, _modifier});        
    }

    get quantitiesDices (){
        return this._quantitiesDices;
    }

    get dice (){
        return this._dice;
    }    

    get modifier (){
        return this._modifier;
    }    
}