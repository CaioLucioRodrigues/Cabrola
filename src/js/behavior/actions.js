class Actions {

    static DamageAction(executer, currentModifier) {
        let diceResult = Dicer.damageRoll(currentModifier.diceMove);
        executer.target.status.takeDamage(diceResult);
        Logger.appendText(`${executer.target.name} suffered ${diceResult} of damage from ${executer.action.name}`)
    }

}