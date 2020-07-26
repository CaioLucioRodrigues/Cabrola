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
        const ability = new Ability(10, 10, 10, 10);
        let player1 = new Fighter('Caio', 1, ability);        
        
        if (!(player1.status.level ==  1)) worked = false;        
        player1.newLevel();
        player1.newLevel();
        player1.newLevel();        
        if (!(player1.status.level ==  4)) worked = false;        

        if (!worked) console.log('Error in test testLevelUp()');
    }  
    
    testIfHealthPointsRestoredInNewLevel() {
        let worked = true;
        const ability = new Ability(10, 10, 10, 10);
        let player1 = new Fighter('Caio', 1, ability);   
        let heathPoints = player1.status.healthPoints;        
        
        player1.status.takeDamage(1);
        if (!(player1.status.healthPoints ==  heathPoints - 1)) worked = false;        
        player1.status.takeDamage(Number.MAX_SAFE_INTEGER);
        if (!(player1.status.healthPoints ==  0)) worked = false;

        if (!worked) console.log('Error in test testIfHealthPointsRestoredInNewLevel()');
    }

    testNewRandomPlayer() {
        let worked = true;
        const newPlayer = NewPlayer.new();        

        if (newPlayer.status == null) worked = false;
        if (newPlayer.ability == null) worked = false;        
        if (newPlayer.class == classes.FIGHTER) {
            if (newPlayer.ability.intelligence > newPlayer.ability.strength) worked = false;
        }
        if (newPlayer.class == classes.WIZARD ){
            if (newPlayer.ability.strength > newPlayer.ability.intelligence) worked = false;
        }       
        
        if (!worked) console.log('Error in test testNewPlayer()');        
    }
}