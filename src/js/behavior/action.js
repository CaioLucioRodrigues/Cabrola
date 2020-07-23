class Action {

    constructor(_name, _actionPoints, _modifiers) {
        Object.assign(this, {_name, _actionPoints, _modifiers});
    }

    get modifiers() {
        return this._modifiers;
    }

    get name() {
        return this._name;
    }
}