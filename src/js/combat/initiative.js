class Initiative {
    
    constructor (_players) {
        Object.assign(this, {_players})        
        this.sortInitiative();
    }

    get players() {
        return this._players;
    }

    sortInitiative() {
        if (this._players != null) {
            this._players.sort(function(a, b){
                if (a.status.initiative < b.status.initiative) {
                    return 1;
                }
                if (a.status.initiative > b.status.initiative) {
                    return -1;
                }
                return 0;
            });
        }
    }
}