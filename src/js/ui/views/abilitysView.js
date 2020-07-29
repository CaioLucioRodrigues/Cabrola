class AbilitysView extends View {

    template(model) {
        return `
            Str : ${model.ability.strength} </br>
            Dex: ${model.ability.dexterity} </br>
            Int : ${model.ability.intelligence} </br>
            Con : ${model.ability.constitution} </br>
        `;
    }
}  