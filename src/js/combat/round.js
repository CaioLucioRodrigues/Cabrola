class Round{

    constructor(players) {
        this._players = players;
        this._currentPLayer = players.length > 0 ? players[0] : null;
    }
}