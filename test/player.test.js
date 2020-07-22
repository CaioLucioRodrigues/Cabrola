class PlayerTest {

    testNewPlayer() {  
        let worked = true;
        let player1 = new Fighter('Caio', 1);
        let player2 = new Wizard('Marcola', 5);

        if (player1.class != classes.FIGHTER) worked = false;
        if (!(player1.status.level ==  1)) worked = false;        
        if (player2.class != classes.WIZARD) worked = false;
        if (!(player2.status.level ==  5)) worked = false;        

        if (!worked) console.log('Error in test testNewPlayer()');
    }

    testLevelUp() {  
        let worked = true;
        let player1 = new Fighter('Caio', 1);        
        
        if (!(player1.status.level ==  1)) worked = false;        
        player1.newLevel();
        player1.newLevel();
        player1.newLevel();        
        if (!(player1.status.level ==  4)) worked = false;        

        if (!worked) console.log('Error in test testLevelUp()');
    }    
}