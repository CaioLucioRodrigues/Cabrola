class NewPlayer {

    static new(level=  1) {
        const abilitys = NewPlayer.rollAbilitys();

        switch (NewPlayer.chooseClass(abilitys)) {
            case classes.FIGHTER: return new Fighter(NewPlayer.chooseName(), level, abilitys);
            case classes.WIZARD: return new Wizard(NewPlayer.chooseName(), level, abilitys);
        }
        
        console.log(abilitys);
    }

    static rollAbilitys() {
        let results = new Array(4).fill(0).map((element) => 
        new Array(4).fill(0)
                    .map((element) => Dicer.roll(dices.D6))
                                           .sort()
                                           .splice(1, 3)
                                           .reduce((acc, value) => acc + value));

        return new Ability(...results);
    }    

    static chooseClass(ability) {

        if (ability.strength >= ability.intelligence) return classes.FIGHTER;
        if (ability.intelligence > ability.strength) return classes.WIZARD;
    }

    static chooseName() {
        const names = ["Merek", "Carac", "Ulric", "Tybalt", "Borin", "Sadon", "Rowan", "Althalos", "Fendrel", "Brom", "Hadrian", "Lord Crewe", "Sir Clifton", "Walter deGrey", "Geoffrey the bad", "William of Wykeham", "Francis Drake", "Simon de Montfort", "John of Gaunt", "William of Orange", "Lord Cornwallis", "Edmund Cartwright", "Charles the Bald", "Benedict", "Bran", "Gregory", "Jon" , "Peter", "Henry", "Frederick", "Walter", "Eddard", "Thomas", "Arthur", "Bryce", "Luke", "Donald", "Lief", "Barda", "Rulf", "Robin", "Gavin", "Terrin", "Ronald", "Sir Jarin", "Cassius", "Cedric", "Gavin", "Peyton", "Janshai", "Doran", "Asher", "Anakin", "Quinn", "Zane", "Xalvador", "Favian", "Destrian", "Dain", "Lord Falk", "Berinon", "Tristan"]
        return names[Math.floor(Math.random() * (names.length + 1))];
    }
}
