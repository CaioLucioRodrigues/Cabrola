class StatusController {

    constructor(_player) {
        Object.assign(this, {_player});
        this._playerView = new PlayerView($('#player'));
        this._abilitysView = new AbilitysView($('#abilitys'));
        this._mainStatusView = new MainStatusView($('#mainStatus'));
        this._secondStatusView = new SecondStatusView($('#secondStatus'));
        
    }    

    update() {
        this._playerView.update(this._player);
        this._abilitysView.update(this._player);   
        this._mainStatusView.update(this._player);
        this._secondStatusView.update(this._player);
    }
}