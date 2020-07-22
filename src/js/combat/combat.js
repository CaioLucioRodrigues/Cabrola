class Combat{
    
    constructor(players) {
        this._rounds = 0;
        this._initiative = new Initiative(players);
    }

    get currentRound() {
        return this._rounds;
    }

    get isSequenceRevealed() {
        return this.currentRound > 1;
    }    

    newRound() {
        this._rounds += 1;
        Logger.appendText('Round: ' + this._rounds)
    }
}