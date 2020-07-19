 class Dicer {

    static roll(dices) {                
        return 1 + Math.floor((dices.MAX) * Math.random());
    }

    static damageRoll(damage) {        
        const result = Dicer.roll(damage.dice) + damage.modifier;
        gameLog.appendText('Damage roll: ' + result)
        return result;
    }
 }