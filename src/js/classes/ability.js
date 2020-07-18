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
        this._strength = this._strength + strengthPoints;
    }

    increaseDexterity(dexterityPoints) {
        this._dexterity = this._dexterity + dexterityPoints;
    }    

    increaseConstitution(constitutionPoints) {
        this._constitution = this._constitution + constitutionPoints;
    }  
    
    increaseIntelligence(intelligencePoints) {
        this._intelligence = this._intelligence + intelligencePoints;
    }    
}