class Status {

    constructor(maxHealthPoints, armor, initiative, actionPointsPerRound, gold, level, experience) {
        this._maxHealthPoints = maxHealthPoints;
        this._healthPoints = maxHealthPoints;
        this._armor = armor;
        this._initiative = initiative;        
        this._actionPointsPerRound = actionPointsPerRound;        
        this._level = level;
        this._experience = experience;
        this._actionPointsCurrentRound = 0;                
        this._gold = gold;
    }

    get level() {
        return this._level;
    }

    get healthPoints() {
        return this._healthPoints;
    }

    get initiative() {
        return this._initiative;
    }

    set heathPoints(healthPoints) {
        ((this._healthPoints + healthPoints) >= this._maxHealthPoints) ? 
            this._healthPoints = this._maxHealthPoints : 
            this._healthPoints += healthPoints;
        gameLog.appendText('Health points restored to ' + this._healthPoints + ' points');
    }

    newRound() {
        this._actionPointsCurrentRound = this._actionPointsPerRound;
        gameLog.appendText('Action points restored to ' + this._actionPointsCurrentRound + ' points');
    }

    newLevel(maxHealthPoints, actionPointsPerRound) {
        this._level += 1;

        if (maxHealthPoints > this._maxHealthPoints) {
            this._maxHealthPoints = maxHealthPoints;
            gameLog.appendText('Updated maximum health points to ' + this._healthPoints);
        }
        
        if (actionPointsPerRound > this._actionPointsPerRound) {
            this._actionPointsPerRound = actionPointsPerRound;
            gameLog.appendText('Updated action points to ' + this._actionPointsPerRound);
        }

        this._healthPoints = this._maxHealthPoints;     
        gameLog.appendText('Health points restored');
    }
}