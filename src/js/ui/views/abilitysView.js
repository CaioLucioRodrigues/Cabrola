class AbilitysView extends View {

    template(model) {
        return `
            str: ${model.ability.strength} </br>
            dex: ${model.ability.dexterity} </br>
            int: ${model.ability.intelligence} </br>
            con: ${model.ability.constitution} </br>
        `;
    }
}  