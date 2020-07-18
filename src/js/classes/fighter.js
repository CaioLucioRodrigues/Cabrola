class FighterStatus {

    static getMaxHealthPoints() {
        return [12, 14, 16, 18, 20];
    }

    static getActionsPerRound() {
        return [2, 2, 2, 3, 3];
    }    

    static getMaxLevel() {
        return FighterStatus.getMaxHealthPoints().length;
    }
}

class Fighter extends Player {

    constructor(name, level) {

        if (level > FighterStatus.getMaxLevel()) 
            level = FighterStatus.getMaxLevel();

        let status = new Status(FighterStatus.getMaxHealthPoints()[level - 1], 10, 10, FighterStatus.getActionsPerRound()[level - 1], 10 * level, level);
        let ability = new Ability(14, 12, 15, 8);
        super(status, ability, classes.FIGHTER, name);
    }    

    newLevel() {
        const level = this._status.level + 1;
        if (level <= FighterStatus.getMaxLevel())
        {        
            this.status.newLevel(FighterStatus.getMaxHealthPoints()[level - 1], FighterStatus.getActionsPerRound()[level - 1]);
            this.ability.increaseStrength(1);
            this.ability.increaseConstitution(1);
        }
    }    
}