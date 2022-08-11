export class View {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    template(model) {
        throw Error('Classe filha precisa implementar metodo template!');
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
