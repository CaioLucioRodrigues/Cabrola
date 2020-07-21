let Logger = require('../services/logger.js')

const classes = {
    FIGHTER: "Fighter",
    WIZARD: "Wizard"
};    

class Player {    

    constructor(_status, _ability, _class, _name) {
        Object.assign(this,  {_status, _ability, _class, _name});
        Logger.appendText('Player ' + this._name + ' (' + this._class + ') created');
    }    

    get status() {
        return this._status;
    }

    get ability() {
        return this._ability;
    }    

    get name() {
        return this._name;
    }

    get class() {
        return this._class;
    }        
}

module.exports = Player;
module.exports.classes = classes;