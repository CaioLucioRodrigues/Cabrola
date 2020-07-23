class Executer {

    constructor(_action, _round, _target) {
        Object.assign(this, {_action, _round, _target})
    }

    get action(){
        return this._action;
    }

    get round() {
        return this._round;
    }

    get target() {
        return this._target;
    }

    execute() {
        ActionFactory.getAction(this);
    }
}

class ActionFactory {

    static getAction(executer) {

        executer.action.modifiers.map((element) =>
        {
            switch (element.type) {
                case modifiers.DAMAGE: Actions.DamageAction(executer, element);
            }
            return element;

        });
    }
}



