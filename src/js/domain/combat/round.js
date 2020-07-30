class Round{

    constructor(_players) {
        Object.assign(this, {_players});        
        this._currentPLayer = this._players.length > 0 ? this._players[0] : null;
    }

    get currentPlayer() {
        return this._currentPLayer;
    }
}