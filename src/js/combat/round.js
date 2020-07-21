class Round{

    constructor(_players) {
        Object.assign(this, {_players});        
        this._currentPLayer = players.length > 0 ? players[0] : null;
    }
}