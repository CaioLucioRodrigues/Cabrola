class Initiative {
    
    constructor (players) {
        this.players = players;
        sortInitiative();
    }

    sortInitiative() {
        players.sort(function(a, b){
            if (a.initiative > b.initiative) {
                return 1;
              }
              if (a.initiative < b.initiative) {
                return -1;
              }
              return 0;
        });
    }
}