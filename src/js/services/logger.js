class Logger {
    
    constructor() {
        this._log = '';
    }

    get log() {
        return this._log;
    }

    appendText(message) {
        this._log = this._log + '\n' + message;        
    }
}