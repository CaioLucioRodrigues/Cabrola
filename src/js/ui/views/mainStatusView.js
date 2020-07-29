class MainStatusView extends View {

    template(model) {
        return `
            Health: ${model.status.healthPoints} </br>
            Armor: ${model.status.armor} </br>
            Level\xa0\xa0\xa0: ${model.status.level} 
        `;
    }
}  