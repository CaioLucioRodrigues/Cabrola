$(document).ready(function(){
    
    let player1 = new Fighter('Caio', 1);
    let player2 = new Wizard('Kako', 5);
    let player3 = new Fighter('Jessica', 5);
    console.log(player1);
    console.log(player2);
    console.log(player3);

    let players = [player1, player2, player3];
    let combat = new Combat(players);
    console.log(combat);
    console.log(combat.initiative);
});