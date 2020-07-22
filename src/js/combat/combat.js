class Combat{
    
    constructor(players) {
        this._rounds = 0;
        this._initiativeList = new Initiative(players);
    }

    get currentRound() {
        return this._rounds;
    }

    get isSequenceRevealed() {
        return this.currentRound > 1;
    }    

    get initiativeList() {
        return this._initiativeList;
    }

    newRound() {
        this._rounds += 1;
        Logger.appendText('Round: ' + this._rounds)
    }
}