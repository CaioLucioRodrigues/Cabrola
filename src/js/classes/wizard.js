class WizardStatus {

    static getMaxHealthPoints() {
        return [8, 9, 10, 11, 12] ;
    }

    static getActionsPerRound() {
        return [2, 3, 4, 5, 5];
    }    

    static getMaxLevel() {
        return WizardStatus.getMaxHealthPoints().length;
    }
}

class Wizard extends Player {

    constructor(name, level) {

        if (level > WizardStatus.getMaxLevel()) 
            level = WizardStatus.getMaxLevel();

        let status = new Status(WizardStatus.getMaxHealthPoints()[level - 1], 8, 11, WizardStatus.getActionsPerRound()[level - 1], 30 * level, level, 0);                
        let ability = new Ability(8, 10, 10, 16);
        super(status, ability, classes.WIZARD, name);
    }

    newLevel() {
        const level = this._status.level + 1;
        if (level <= WizardStatus.getMaxLevel())
        {        
            this.status.newLevel(WizardStatus.getMaxHealthPoints()[level - 1], WizardStatus.getActionsPerRound()[level - 1]);
            this.ability.increaseIntelligence(1);
        }
    }
}