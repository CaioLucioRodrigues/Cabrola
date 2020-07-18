class Wizard extends Player {

    constructor() {

        let status = new Status(6, 6, 9, 13, 10, 2, 30, 1, 0);
        let ability = new Ability(8, 10, 10, 16);

        super(status, ability);
    }
}