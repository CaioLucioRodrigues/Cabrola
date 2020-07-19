class Player {

    constructor(status, ability, kind, name) {
        this._status = status;
        this._ability = ability;
        this._class = kind;
        this._name = name;
        gameLog.appendText('Player ' + this._name + ' (' + this._class + ') created');
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