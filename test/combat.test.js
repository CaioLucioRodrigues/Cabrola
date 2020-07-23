class CombatTest {

    testIfSequenceIsRevealed() {
        let worked = true;
        let combat = new Combat(null);
        
        if (combat.isSequenceRevealed) worked = false;
        combat.newRound();
        if (combat.isSequenceRevealed) worked = false;         
        combat.newRound();
        if (!combat.isSequenceRevealed) worked =  false;

        if (!worked) console.log('Error in test testIfSequenceIsRevealed()');
    }

    testCurrentRoundNumber() {
        let worked = true;
        let combat = new Combat(null);

        if (combat.currentRound != 0) worked =  false;
        combat.newRound();
        if (combat.currentRound != 1) worked =  false;         
        combat.newRound();
        if (combat.currentRound != 2) worked =  false;
        combat.newRound();
        combat.newRound();
        if (combat.currentRound != 4) worked =  false;

        if (!worked) console.log('Error in test testCurrentRoundNumber()');
    }

    testInitiativeOrder() {
        let worked = true;
        let player1 = new Fighter('Caio', 1);
        let player2 = new Wizard('Marcola', 1);
        let player3 = new Fighter('Cabron', 1);        
        let players = [player1, player2, player3];
        let combat = new Combat(players);

        if (combat.initiativeList.players[0] != player2) worked =  false;
        if ((combat.initiativeList.players[1] != player1) && (combat.initiativeList.players[1] != player3)) worked =  false;
        if ((combat.initiativeList.players[2] != player1) && (combat.initiativeList.players[2] != player3)) worked =  false;

        if (!worked) console.log('Error in test testInitiativeOrder()');
    }
}