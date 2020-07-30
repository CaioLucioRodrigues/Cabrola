class MenuController {

    constructor() {
        this._btnNewGame = $('#btnNewGame');
    }    

    update() {
        this._btnNewGame.click(() => newGame());
    }
}