class Tests {

    static testGeneral() {
        Tests.testNewPlayers();
        Tests.testNewCombat();
        Tests.testLevelUp();
    }

    static testNewPlayers() {        
        console.log('---testNewPlayers---');
        let player1 = new Fighter('Caio', 1);
        let player2 = new Wizard('Marcola', 5);
        let player3 = new Fighter('Cabron', 5);
        console.log(player1);
        console.log(player2);
        console.log(player3);
    }

    static testNewCombat() {        
        console.log('---testNewCombat---');
        let player1 = new Fighter('Caio', 1);
        let player2 = new Wizard('Marcola', 5);
        let player3 = new Fighter('Cabron', 5);        
        let players = [player1, player2, player3];
        let combat = new Combat(players);
        console.log(combat);
        console.log(combat.initiative);
    }

    static testLevelUp() {        
        console.log('---testLevelUp---');
        let player1 = new Wizard('Caio', 1);
        console.log(player1);
        player1.newLevel();
        player1.newLevel();
        player1.newLevel();
        player1.newLevel();
        player1.newLevel();
        console.log(player1);
    }

}

