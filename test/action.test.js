class ActionTest {
    
    testDamageAction() {
        let worked = true;
        let player1 = NewPlayer.new(1);
        let player2 = NewPlayer.new(1);
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
        let player1 = NewPlayer.new(1);
        let player2 = NewPlayer.new(1);
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
        let player1 = NewPlayer.new(1);
        let player2 = NewPlayer.new(1);
        let recoverModifier = new IncreaseStatusModifier(increaseStatus.ARMOR, 2, duration.UNTIL_END_FIGHT);
        let action = new Action('stone skin', 1, [recoverModifier]);        
        let round = new Round([player1, player2]);
        let executer = new Executer(action, round, player2);        
        let beginningArmorPoints = player2.status.armor;       

        executer.execute();
        if (player2.status.armor <= beginningArmorPoints) worked = false;

        if (!worked) console.log('Error in test testIncreaseArmorPointsAction()');
    }    

    testIncreaseActionPointsPerRoundAction() {
        let worked = true;
        let player1 = NewPlayer.new(1);
        let player2 = NewPlayer.new(1);
        let actionPointsModifier = new IncreaseStatusModifier(increaseStatus.ACTION_POINTS_PER_ROUND, 2, duration.ROUNDS, 3);
        let action = new Action('super velocity', 1, [actionPointsModifier]);        
        let round = new Round([player1, player2]);
        let executer = new Executer(action, round, player2);        
        let beginningActionPointsPerRound = player2.status.actionPointsPerRound;       

        executer.execute();
        if (player2.status.actionPointsPerRound <= beginningActionPointsPerRound) worked = false;

        if (!worked) console.log('Error in test testIncreaseActionPointsPerRoundAction()');
    }   
    
    testIncreaseInitiativeAction() {
        let worked = true;
        let player1 = NewPlayer.new(1);
        let player2 = NewPlayer.new(1);
        let initiativeModifier = new IncreaseStatusModifier(increaseStatus.INITIATIVE, 2, duration.UNTIL_END_FIGHT);
        let action = new Action('divine initiative', 1, [initiativeModifier]);        
        let round = new Round([player1, player2]);
        let executer = new Executer(action, round, player2);        
        let beginningInitiative = player2.status.initiative;       

        executer.execute();
        if (player2.status.initiative <= beginningInitiative) worked = false;

        if (!worked) console.log('Error in test testIncreaseInitiativeAction()');
    }        

    testIncreaseStrengthAction() {
        let worked = true;
        let player1 = NewPlayer.new(1);
        let player2 = NewPlayer.new(1);
        let strengthModifier = new IncreaseAbilityModifier(increaseAbility.STRENGTH, 2, duration.ROUNDS, 10);
        let action = new Action('Enhance', 1, [strengthModifier]);        
        let round = new Round([player1, player2]);
        let executer = new Executer(action, round, player2);        
        let beginningStrength = player2.ability.strength;               

        executer.execute();
        if (player2.ability.strength <= beginningStrength) worked = false;

        if (!worked) console.log('Error in test testIncreaseStrengthAction()');
    }       
    
    testIncreaseDexterityAction() {        
        let worked = true;
        let player1 = NewPlayer.new(1);
        let player2 = NewPlayer.new(1);
        let dexterityModifier = new IncreaseAbilityModifier(increaseAbility.DEXTERITY, 2, duration.ROUNDS, 10);
        let action = new Action('Thief Sense', 1, [dexterityModifier]);        
        let round = new Round([player1, player2]);
        let executer = new Executer(action, round, player2);        
        let beginningDexterity = player2.ability.dexterity;             

        executer.execute();
        if (player2.ability.dexterity <= beginningDexterity) worked = false;

        if (!worked) console.log('Error in test testIncreaseDexterityAction()');
    }         

    testIncreaseIntelligenceAction() {
        let worked = true;
        let player1 = NewPlayer.new(1);
        let player2 = NewPlayer.new(1);
        let intelligenceModifier = new IncreaseAbilityModifier(increaseAbility.INTELLIGENCE, 2, duration.ROUNDS, 10);
        let action = new Action('Thief Sense', 1, [intelligenceModifier]);        
        let round = new Round([player1, player2]);
        let executer = new Executer(action, round, player2);        
        let beginningIntelligence = player2.ability.intelligence;       

        executer.execute();
        if (player2.ability.intelligence <= beginningIntelligence) worked = false;

        if (!worked) console.log('Error in test testIncreaseIntelligenceAction()');
    }  
    
    testIncreaseConstitutionAction() {
        let worked = true;
        let player1 = NewPlayer.new(1);
        let player2 = NewPlayer.new(1);
        let constitutionModifier = new IncreaseAbilityModifier(increaseAbility.CONSTITUTION, 2, duration.ROUNDS, 10);
        let action = new Action('Thief Sense', 1, [constitutionModifier]);        
        let round = new Round([player1, player2]);
        let executer = new Executer(action, round, player2);        
        let beginningConstitution = player2.ability.constitution;       

        executer.execute();
        if (player2.ability.constitution <= beginningConstitution) worked = false;

        if (!worked) console.log('Error in test testIncreaseConstitutionAction()');
    }    
}