let Combat = require('../src/js/combat/combat.js')
let dices =  require('../src/js/combat/combat.js')

test('test if sequence is revealed', () => {

    let combat = new Combat(null);
    
    expect(combat.isSequenceRevealed).toEqual(false);
    combat.newRound();
    expect(combat.isSequenceRevealed).toEqual(false);
    combat.newRound();
    expect(combat.isSequenceRevealed).toEqual(true);    
});

test('teste the current round number', () => {
    
    let combat = new Combat(null);
    
    expect(combat.currentRound).toEqual(0);
    combat.newRound();
    expect(combat.currentRound).toEqual(1);
    combat.newRound();
    expect(combat.currentRound).toEqual(2);    
    combat.newRound();
    combat.newRound();
    expect(combat.currentRound).toEqual(4);    
});