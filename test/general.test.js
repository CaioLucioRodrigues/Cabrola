class GeneralTests {

    static executeTests() {

        console.log('=== Start Combat Tests ===');
        const combatTest = new CombatTest();        
        combatTest.testIfSequenceIsRevealed();
        combatTest.testCurrentRoundNumber();
        combatTest.testInitiativeOrder();

        console.log('=== Start Dicer Tests ===');
        let dicerTest = new DicerTest();
        dicerTest.testD4Roll();
        dicerTest.testD6Roll();
        dicerTest.testD8Roll();
        dicerTest.testDamageRoll();

        console.log('=== Start Player Tests ===');
        let playerTest = new PlayerTest();
        playerTest.testNewPlayer();
        playerTest.testLevelUp();
        playerTest.testIfHealthPointsRestoredInNewLevel();      
        playerTest.testNewRandomPlayer();

        console.log('=== Start Action Tests ===');
        let actionTest = new ActionTest();
        actionTest.testDamageAction();
        actionTest.testRecoverHealthPointsAction();
        actionTest.testIncreaseArmorPointsAction();
        actionTest.testIncreaseActionPointsPerRoundAction();
        actionTest.testIncreaseInitiativeAction();
        actionTest.testIncreaseStrengthAction();
        actionTest.testIncreaseDexterityAction();
        actionTest.testIncreaseIntelligenceAction();
        actionTest.testIncreaseConstitutionAction();
        
        console.log('=== End Tests ===');
        Logger.clear();
    }
}