class Logger {
    
    constructor() {
        if (Logger.instance instanceof Logger){
            return Logger.instance;
        }

        this._log = '';
        Object.freeze(this.instance);        
        Logger.instance = this;
    }

    appendText(message) {
        this._log += '\n' + message;        
    }

    clear() {
        this._log = '';        
    }        

    static get log() {
        return new Logger()._log;
    }    

    static appendText(message) {
        new Logger().appendText(message);
    }
}