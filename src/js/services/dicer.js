 class Dicer {

    static roll(dices) {                
        return 1 + Math.floor((dices.Max) * Math.random());
    }

    static damageRoll(damage) {        
        const roll = Dicer.roll(damage.dice);
        const result = roll + damage.modifier;
        Logger.appendText('Damage roll: ' + result + ' - roll: ' + roll + ' modifier: ' + (damage.modifier == 0 ? '' : (damage.modifier > 0 ? '+' : '-') + damage.modifier));
        return result;
    }
 }