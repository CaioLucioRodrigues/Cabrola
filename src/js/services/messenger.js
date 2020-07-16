class Messenger {

    static writeMessage(message){
        var text = GlobalsElements.getMessagesArea().text(message);
        text.html(text.html().replace(/\n/g,'<br/>'));        
    }

}