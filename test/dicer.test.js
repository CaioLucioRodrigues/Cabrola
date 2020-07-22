class DicerTest {

    testD4Roll() {
        let worked = true;

        if (Dicer.roll(dices.D4) > 4) worked = false;
        if (Dicer.roll(dices.D4) > 4) worked = false;
        if (Dicer.roll(dices.D4) > 4) worked = false;
        if (Dicer.roll(dices.D4) > 4) worked = false;
        if (Dicer.roll(dices.D4) > 4) worked = false;

        if (!worked) console.log('Error in test testD4Roll()');
    }
    
    testD6Roll() {
        let worked = true;

        if (Dicer.roll(dices.D6) > 6) worked = false;
        if (Dicer.roll(dices.D6) > 6) worked = false;
        if (Dicer.roll(dices.D6) > 6) worked = false;
        if (Dicer.roll(dices.D6) > 6) worked = false;
        if (Dicer.roll(dices.D6) > 6) worked = false;
        if (Dicer.roll(dices.D6) > 6) worked = false;
        if (Dicer.roll(dices.D6) > 6) worked = false;

        if (!worked) console.log('Error in test testD6Roll()');
    }    

    testD8Roll() {
        let worked = true;
        
        if (Dicer.roll(dices.D8) > 8) worked = false;
        if (Dicer.roll(dices.D8) > 8) worked = false;
        if (Dicer.roll(dices.D8) > 8) worked = false;
        if (Dicer.roll(dices.D8) > 8) worked = false;
        if (Dicer.roll(dices.D8) > 8) worked = false;
        if (Dicer.roll(dices.D8) > 8) worked = false;
        if (Dicer.roll(dices.D8) > 8) worked = false;
        if (Dicer.roll(dices.D8) > 8) worked = false;
        if (Dicer.roll(dices.D8) > 8) worked = false;   

        if (!worked) console.log('Error in test testD8Roll()');
    }        
}