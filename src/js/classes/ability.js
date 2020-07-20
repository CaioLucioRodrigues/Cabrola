class Ability {

    constructor(strength, dexterity, constitution, intelligence) {
        this._strength = strength;
        this._dexterity = dexterity;
        this._constitution = constitution;
        this._intelligence = intelligence;
    }

    get strength() {
        return this._strength;
    }

    get dexterity() {
        return this._dexterity;
    }    

    get constitution() {
        return this._constitution;
    }        

    get intelligence() {
        return this._intelligence;
    }        
    
    increaseStrength(strengthPoints) {        
        this._strength += strengthPoints;
        Logger.appendText('Strength increased to ' + this._strength)
    }

    increaseDexterity(dexterityPoints) {
        this._dexterity += dexterityPoints;
        Logger.appendText('Dexterity increased to ' + this._dexterity)
    }    

    increaseConstitution(constitutionPoints) {
        this._constitution += constitutionPoints;
        Logger.appendText('Constitution increased to ' + this._constitution)
    }  
    
    increaseIntelligence(intelligencePoints) {
        this._intelligence += intelligencePoints;
        Logger.appendText('Intelligence increased to ' + this._intelligence)
    }    
}

module.exports = Ability;