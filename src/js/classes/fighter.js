class Fighter extends Player {

    constructor(name, level) {

        let maxHealthPoints = [12, 14, 16, 18, 20]
        let armor = [10, 11, 12, 13, 14]
        let actionsPerRound = [2, 2, 2, 3, 3]        

        if (level > maxHealthPoints.length) 
            level = maxHealthPoints;

        let status = new Status(maxHealthPoints[level-1], maxHealthPoints[level-1], armor[level-1], 10, 0, actionsPerRound[level-1], 10 * level, level);
        let ability = new Ability(14 + level, 12, 15 + level, 8);
        super(status, ability, classes.FIGHTER, name);
    }

    
}