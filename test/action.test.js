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
}