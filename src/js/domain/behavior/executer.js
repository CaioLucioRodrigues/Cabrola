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

        executer.action.modifiers.map((element) => {
            switch(element.type) {
                case modifiers.DAMAGE: Actions.damageAction(executer, element);
                case modifiers.INCREASESTATUS: IncreaseStatusActionFactory.getAction(executer);
                case modifiers.INCREASEABILITY: IncreaseAbilityActionFactory.getAction(executer);
            }
            return element;
        });
    }
}

class IncreaseStatusActionFactory {

    static getAction(executer) {

        executer.action.modifiers.map((element) => {
            switch(element._increaseStatus) {
                case increaseStatus.HEALTH_POINTS: Actions.recoverHealthAction(executer, element);
                case increaseStatus.ARMOR: Actions.increaseArmorAction(executer, element);
                case increaseStatus.ACTION_POINTS_PER_ROUND: Actions.increaseActionPointsPerRoundAction(executer, element);
                case increaseStatus.INITIATIVE: Actions.increaseInitiativeAction(executer, element);
            }
        });
    }
}

class IncreaseAbilityActionFactory {

    static getAction(executer) {

        executer.action.modifiers.map((element) => {            
            switch(element._increaseAbility) {
                case increaseAbility.STRENGTH: Actions.increaseStrengthAction(executer, element);
                case increaseAbility.DEXTERITY: Actions.increaseDexterityAction(executer, element);
                case increaseAbility.INTELLIGENCE: Actions.increaseIntelligenceAction(executer, element);
                case increaseAbility.CONSTITUTION: Actions.increaseConstitutionAction(executer, element);
            }
        });
    }
}



