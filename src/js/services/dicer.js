class Dicer {

    static roll(dices) {                
        return 1 + Math.floor((dices.Max) * Math.random());
    }

    static damageRoll(damage) {        
        let result = 0;    
        for (let i = 0; i < damage.quantitiesDices; i++) {
            const roll = Dicer.roll(damage.dice);
            result = result + roll;
            //gameLog.appendText('Dice:'+ i +' - Damage roll: ' + roll);
        }
        result += damage.modifier;
        //gameLog.appendText('Damage Total: ' + result + ' modifier: ' + (damage.modifier == 0 ? '' : (damage.modifier > 0 ? '+' : '-') + damage.modifier));
        return result;
    }

    static teste()  {
        var a = new Array(2).map((element) =>  element = 10);
        return a;
    }
}

 const dices = {
    D4: {
        Name: "D4",  
        Max: 4
    },
    D6: {
        Name: "D6",  
        Max: 6
    },
    D8: {
        Name: "D8",  
        Max: 8
    },
    D10: {
        Name: "D10",  
        Max: 10
    },
    D12: {
        Name: "D12",  
        Max: 12
    },
    D20: {
        Name: "D20",  
        Max: 20
    },
}; 