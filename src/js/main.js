$(document).ready(function(){
    
    let player1 = new Fighter('Caio');
    let player2 = new Wizard('Kako');
    let player3 = new Fighter('Jessica');
    console.log(player1);
    console.log(player2);
    console.log(player3);

    let players = new [player1, player2, player3];

    let combat = new Combat(players);
    console.log(combat);
    console.log(combat.initiative);
    
});