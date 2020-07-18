class Combat{
    
    constructor(players){
        this.rounds = 0;
        this.initiative = new Initiative(players);
    }

    newRound(){
        this.rounds++;
    }
}