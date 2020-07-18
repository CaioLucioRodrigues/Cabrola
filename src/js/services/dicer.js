 class Dicer {

    static roll(dices) {        
        return 1 + Math.floor((dices.MAX) * Math.random());
    }

    static damageRoll(damage) {        
        return Dicer.roll(damage.dice) + damage.modifier;
    }
 }