class MenuController {

    constructor() {
        this._btnNewGame = $('#btnNewGame');
    }    

    update() {
        this._btnNewGame.off("click");
        this._btnNewGame.click(() => newGame());
    }
}