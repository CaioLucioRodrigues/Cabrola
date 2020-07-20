class Messenger {

    static writeMessage(message){
        let text = GlobalsElements.getMessagesArea().text(message);
        text.html(text.html().replace(/\n/g,'<br/>'));   
        Logger.appendText(message);
    }
}