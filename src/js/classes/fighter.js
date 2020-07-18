class Fighter extends Player {

    constructor(name) {

        let status = new Status(12, 12, 13, 10, 0, 2, 10, 1);
        let ability = new Ability(15, 12, 15, 8);

        super(status, ability, classes.FIGHTER, name);
    }
}