class Dicer {

    static roll(dices) {
        let roll = 1 + Math.floor((dices.Max) * Math.random());
        Logger.appendText(`Roll: ${roll}`);
        return roll;
    }

    static damageRoll(diceMove)  {        
        let results = new Array(diceMove.quantitiesDices).fill(0).map((element, index) => Dicer.roll(diceMove.dice));            
        let sum = results.reduce((acc, value) => acc + value);
        Logger.appendText(`Total: ${sum} + ${diceMove.modifier} = ${sum + diceMove.modifier}`);
        return sum + diceMove.modifier;
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