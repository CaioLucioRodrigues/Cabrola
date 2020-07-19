class Status {

    constructor(maxHealthPoints, healthPoints, armor, initiative, manaPoints, actionPointsPerRound, gold, level, experience) {
        this.maxHealthPoints = maxHealthPoints;
        this.healthPoints = healthPoints;
        this.armor = armor;
        this.initiative = initiative;
        this.manaPoints = manaPoints;
        this.actionPointsPerRound = actionPointsPerRound;
        this.gold = gold;
        this._level = level;
        this._actionPointsCurrentRound = 0;        
        this.experience = experience;
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
        gameLog.appendText('Health points restored to ' + this._healthPoints + ' points');
    }

    newRound() {
        this._actionPointsCurrentRound = this._actionPointsPerRound;
        gameLog.appendText('Action points restored to ' + this._actionPointsCurrentRound + ' points');
    }

    newLevel(maxHealthPoints, actionPointsPerRound) {
        this._level = this._level + 1;

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