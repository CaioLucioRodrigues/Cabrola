class Initiative {
    
    constructor (players) {
        this._players = players;        
        this.sortInitiative();
    }

    sortInitiative() {
        this._players.sort(function(a, b){
            if (a.status.initiative > b.status.initiative) {
                return 1;
              }
              if (a.status.initiative < b.status.initiative) {
                return -1;
              }
              return 0;
        });
    }
}