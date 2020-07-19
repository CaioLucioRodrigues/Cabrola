class Logger {
    
    constructor() {
        if (Logger.instance instanceof Logger){
            return Logger.instance;
        }

        this._log = '';
        Object.freeze(this.instance);        
        Logger.instance = this;
    }

    get log() {
        return this._log;
    }

    appendText(message) {
        this._log += '\n' + message;        
    }
}

const gameLog = new Logger();