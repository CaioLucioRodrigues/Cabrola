class Status {

    constructor(_maxHealthPoints, _armor, _initiative, _actionPointsPerRound, _gold, _level, _experience) {
        Object.assign(this, {_maxHealthPoints, _armor, _initiative, _actionPointsPerRound, _gold, _level, _experience});        
        this._healthPoints = this._maxHealthPoints;
        this._actionPointsCurrentRound = 0;
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

    get actionPointsPerRound() {
        return this._actionPointsPerRound;
    }       

    get armor() {
        return this._armor;
    }

    get gold() {
        return this._gold;
    }
    
    get experience() {
        return this._experience;
    }

    recoverHeathPoints(healthPoints) {
        ((this._healthPoints + healthPoints) >= this._maxHealthPoints) ? 
            this._healthPoints = this._maxHealthPoints : 
            this._healthPoints += healthPoints;
            Logger.appendText('Health points restored to ' + this._healthPoints + ' points');
    }

    takeDamage(damagePoints) {
        this._healthPoints = Math.max(0, this._healthPoints - damagePoints);
    }

    increaseArmor(armorPoints) {
        this._armor += armorPoints;
    }

    increaseActionPointsPerRound(actionPointsPerRound) {
        this._actionPointsPerRound += actionPointsPerRound;
        this._actionPointsCurrentRound = actionPointsPerRound;
    }
    
    increaseInitiative(initiative) {
        this._initiative += initiative;
    }

    newRound() {
        this._actionPointsCurrentRound = this._actionPointsPerRound;
        Logger.appendText('Action points restored to ' + this._actionPointsCurrentRound + ' points');
    }

    newLevel(maxHealthPoints, actionPointsPerRound) {
        this._level += 1;

        if (maxHealthPoints > this._maxHealthPoints) {
            this._maxHealthPoints = maxHealthPoints;
            Logger.appendText('Updated maximum health points to ' + this._healthPoints);
        }
        
        if (actionPointsPerRound > this._actionPointsPerRound) {
            this._actionPointsPerRound = actionPointsPerRound;
            Logger.appendText('Updated action points to ' + this._actionPointsPerRound);
        }

        this._healthPoints = this._maxHealthPoints;     
        Logger.appendText('Health points restored');
    }
}