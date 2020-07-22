class Dicer {

    static roll(dices) {
        let roll = 1 + Math.floor((dices.Max) * Math.random());
        Logger.appendText(`Roll: ${roll}`);
        return roll;
    }

    static damageRoll(damage)  {        
        let results = new Array(damage.quantitiesDices).fill(0).map((element, index) => Dicer.roll(damage.dice));            
        let sum = results.reduce((acc, value) => acc + value);
        Logger.appendText(`Total: ${sum} + ${damage.modifier} = ${sum + damage.modifier}`);
        return sum + damage.modifier;
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