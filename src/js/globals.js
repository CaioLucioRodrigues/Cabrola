const classes = {
    FIGHTER: "Fighter",
    WIZARD: "Wizard"
};    

const dices = {
    D4: {
        NAME: "D4",  
        MAX: 4
    },
    D6: {
        NAME: "D6",  
        MAX: 6
    },
    D8: {
        NAME: "D8",  
        MAX: 8
    },
    D10: {
        NAME: "D10",  
        MAX: 10
    },
    D12: {
        NAME: "D12",  
        MAX: 12
    },
    D20: {
        NAME: "D20",  
        MAX: 20
    },
};    

class GlobalsElements {

    static getMessagesArea(){
        return $('#messages');
    }
}