$(document).ready(function(){   
    GeneralTests.executeTests();   

    var player = NewPlayer.new(1);
    Messenger.writeMessage(Texts.intro(player.name));  
    
    const statusController = new StatusController(player);    
    statusController.update();

    //$('#abilitys').html("str </br> força");
});