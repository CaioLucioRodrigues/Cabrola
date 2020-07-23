class DicerTest {

    testD4Roll() {
        let worked = true;

        let rolls = new Array(50).fill(0).map(() => {
            if (Dicer.roll(dices.D4) > 4) worked = false;            
        });

        if (!worked) console.log('Error in test testD4Roll()');
    }
    
    testD6Roll() {
        let worked = true;

        let rolls = new Array(50).fill(0).map(() => {
            if (Dicer.roll(dices.D6) > 6) worked = false;            
        });        

        if (!worked) console.log('Error in test testD6Roll()');
    }    

    testD8Roll() {
        let worked = true;

        let rolls = new Array(50).fill(0).map(() => {
            if (Dicer.roll(dices.D8) > 8) worked = false;            
        });                

        if (!worked) console.log('Error in test testD8Roll()');
    } 
    
    testDamageRoll() {
        let worked = true;
        let diceMove = new DiceMove(2, dices.D4, 3);

        let rolls = new Array(50).fill(0).map(() => {
            if (Dicer.damageRoll(diceMove) > 11) worked = false;           
        });  

        if (!worked) console.log('Error in test testDamageRoll()');
    }
}
