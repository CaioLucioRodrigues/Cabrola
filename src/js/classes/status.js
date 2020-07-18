class Status {

    constructor(maxHealthPoints, armor, initiative, actionPointsPerRound, gold, level) {
        this._maxHealthPoints = maxHealthPoints;        
        this._armor = armor;
        this._initiative = initiative;                
        this._actionPointsPerRound = actionPointsPerRound;         
        this._level = level;
        this._healthPoints = this._maxHealthPoints;
        this._actionPointsCurrentRound = 0;
        this.gold = gold;
    }

    get level() {
        return this._level;
    }

    get healthPoints() {
        return this._healthPoints;
    }

    set heathPoints(healthPoints) {
        ((this._healthPoints + healthPoints) >= this._maxHealthPoints) ? 
            this._healthPoints = this._maxHealthPoints : 
            this._healthPoints = this._healthPoints + healthPoints;
    }

    newRound() {
        this._actionPointsCurrentRound = this._actionPointsPerRound;
    }

    newLevel(maxHealthPoints, actionPointsPerRound) {
        this._level = this._level + 1;
        this._maxHealthPoints = maxHealthPoints;   
        this._actionPointsPerRound = actionPointsPerRound;
        this._healthPoints = this._maxHealthPoints;     
    }
}