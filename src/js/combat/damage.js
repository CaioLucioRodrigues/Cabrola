class Damage{

    constructor(quantitiesDices, dice, modifier = 0){
        this._quantitiesDices = quantitiesDices;
        this._dice = dice;
        this._modifier = modifier;
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