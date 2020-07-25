class ActionTest {
    
    testDamageAction() {
        let worked = true;
        let player1 = new Fighter('Caio', 1);
        let player2 = new Fighter('Marcola', 1);
        let diceMove = new DiceMove(2, dices.D4, 1);
        let damageModifier = new DamageModifier(diceMove);
        let action = new Action('sword attack', 1, [damageModifier]);        
        let round = new Round([player1, player2]);
        let executer = new Executer(action, round, player2);        
        let beginningHealthPoints = player2.status.healthPoints;

        executer.execute();
        if (player2.status.healthPoints >= beginningHealthPoints) worked = false;
        new Array(50).fill(0).map(() => {
            executer.execute();            
        });
        if (player2.status.healthPoints > 0) worked = false;


        if (!worked) console.log('Error in test testDamageAction()');
    }    

    testRecoverHealthPointsAction() {
        let worked = true;
        let player1 = new Fighter('Caio', 1);
        let player2 = new Fighter('Marcola', 1);
        let recoverModifier = new IncreaseStatusModifier(increaseStatus.HEALTH_POINTS, 5, duration.JUST_IN_TIME);        
        let action = new Action('minor healing potion', 1, [recoverModifier]);        
        let round = new Round([player1, player2]);
        let executer = new Executer(action, round, player2);        
        let beginningHealthPoints = player2.status.healthPoints;
        
        player2.status.takeDamage(5);
        if (player2.status.healthPoints > beginningHealthPoints) worked = false;
        executer.execute();
        if (player2.status.healthPoints != beginningHealthPoints) worked = false;


        if (!worked) console.log('Error in test testRecoverHealthPointsAction()');
    }

    testIncreaseArmorPointsAction() {
        let worked = true;
        let player1 = new Fighter('Caio', 1);
        let player2 = new Fighter('Marcola', 1);
        let recoverModifier = new IncreaseStatusModifier(increaseStatus.ARMOR, 2, duration.UNTIL_END_FIGHT);
        let action = new Action('stone skin', 1, [recoverModifier]);        
        let round = new Round([player1, player2]);
        let executer = new Executer(action, round, player2);        
        let beginningArmorPoints = player2.status.armor;       

        executer.execute();
        if (player2.status.armor <= beginningArmorPoints) worked = false;


        if (!worked) console.log('Error in test testIncreaseArmorPointsAction()');
    }    
}