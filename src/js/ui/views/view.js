class View {

    constructor(seletor) {

        this._elemento = seletor;
    }

    update(model) {

        this._elemento.html(this.template(model));
    }

    template(model) {

        throw new Error('No Implementation here');
    }
}  