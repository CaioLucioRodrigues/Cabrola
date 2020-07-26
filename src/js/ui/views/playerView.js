class PlayerView extends View {

    template(model) {
        return `${model.name} - ${model.class}`;
    }
}  