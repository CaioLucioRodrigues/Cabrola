class Wizard extends Player {

    constructor(name, level) {

        let maxHealthPoints = [8, 9, 10, 11, 12]
        let armor = [8, 8, 9, 9, 10]
        let actionsPerRound = [2, 3, 4, 5, 5]        

        if (level > maxHealthPoints.length) 
            level = maxHealthPoints;

        let status = new Status(maxHealthPoints[level-1], maxHealthPoints[level-1], armor[level-1], 11, 10, actionsPerRound[level-1], 30 * level, level);                
        let ability = new Ability(8, 10, 10, 16 + level);
        super(status, ability, classes.WIZARD, name);
    }
}