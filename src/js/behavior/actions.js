class Actions {

    static damageAction(executer, currentModifier) {
        let diceResult = Dicer.damageRoll(currentModifier.diceMove);
        executer.target.status.takeDamage(diceResult);
        Logger.appendText(`${executer.target.name} suffered ${diceResult} of damage from ${executer.action.name}`);
    }

    static recoverHealthAction(executer, currentModifier) {        
        executer.target.status.recoverHeathPoints(currentModifier.points);
        Logger.appendText(`${executer.target.name} recover ${currentModifier.points} heath points from ${executer.action.name}`);
    }    

    static increaseArmorAction(executer, currentModifier) {        
        executer.target.status.increaseArmor(currentModifier.points);
        Logger.appendText(`${executer.target.name} increase armor in ${currentModifier.points} points from ${executer.action.name}`);
    }

    static increaseActionPointsPerRoundAction(executer, currentModifier) {        
        executer.target.status.increaseActionPointsPerRound(currentModifier.points);
        Logger.appendText(`${executer.target.name} increase action points per round (and current) in ${currentModifier.points} points from ${executer.action.name}`);
    }    

    static increaseInitiativeAction(executer, currentModifier) {        
        executer.target.status.increaseInitiative(currentModifier.points);
        Logger.appendText(`${executer.target.name} increase initiative in ${currentModifier.points} points from ${executer.action.name}`);
    }     

    static increaseStrengthAction(executer, currentModifier) {        
        executer.target.ability.increaseStrength(currentModifier.points);
        Logger.appendText(`${executer.target.name} increase strength in ${currentModifier.points} points from ${executer.action.name}`);
    }         

    static increaseDexterityAction(executer, currentModifier) {                
        executer.target.ability.increaseDexterity(currentModifier.points);
        Logger.appendText(`${executer.target.name} increase dexterity in ${currentModifier.points} points from ${executer.action.name}`);
    }         
    
    static increaseIntelligenceAction(executer, currentModifier) {        
        executer.target.ability.increaseIntelligence(currentModifier.points);
        Logger.appendText(`${executer.target.name} increase intelligence in ${currentModifier.points} points from ${executer.action.name}`);
    }         
    
    static increaseConstitutionAction(executer, currentModifier) {        
        executer.target.ability.increaseConstitution(currentModifier.points);
        Logger.appendText(`${executer.target.name} increase constitution in ${currentModifier.points} points from ${executer.action.name}`);
    }             
}