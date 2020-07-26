class StatusController {

    constructor(_player) {
        Object.assign(this, {_player});
        this._playerView = new PlayerView($('#player'));
        this._abilitysView = new AbilitysView($('#abilitys'));
    }    

    update() {
        this._playerView.update(this._player);
        this._abilitysView.update(this._player);        
    }
}