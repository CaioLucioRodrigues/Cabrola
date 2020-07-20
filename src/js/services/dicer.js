 class Dicer {

    static roll(dices) {                
        return 1 + Math.floor((dices.MAX) * Math.random());
    }

    static damageRoll(damage) {        
        let result= 0;    
        for (let i= 0 ; i < damage.quantitiesDices; i++){
            const roll = Dicer.roll(damage.dice);
            result = result +roll
            gameLog.appendText('Dice:'+ i +' - Damage roll: ' + roll);
        }
        result += damage.modifier;
        gameLog.appendText('Damage Total: ' + result + ' modifier: ' + (damage.modifier == 0 ? '' : (damage.modifier > 0 ? '+' : '-') + damage.modifier));
        return result;
    }
 }