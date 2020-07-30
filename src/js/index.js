function newGame() {    
    GeneralTests.executeTests();   

    player = NewPlayer.new(1);
    Messenger.writeMessage(Texts.intro(player.name));  
    
    const statusController = new StatusController(player);    
    statusController.update();
    const menuController = new MenuController();    
    menuController.update();
}


$(document).ready(function(){
    let player = null;
    newGame();
});