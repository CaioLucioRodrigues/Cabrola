class Combat{
    
    constructor(players){
        this._rounds = 0;
        this._initiative = new Initiative(players);
    }

    newRound(){
        this._rounds = this._rounds++;
    }
}