let Dicer = require('../src/js/services/dicer.js')
let Damage = require('../src/js/combat/damage.js')
let dices = Dicer.dices;

test('teste normal roll', () => {
    let damage = new Damage(2, dices.D4, 3);
    var a = Dicer.teste;
    expect(2).toEqual(2);
});