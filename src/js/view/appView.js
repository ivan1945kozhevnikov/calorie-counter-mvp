import createElement from '../utils/render.js';

class AppView {
    constructor() {
        this.element = this.getElement();
    }

    // eslint-disable-next-line class-methods-use-this
    _getTemplate() {
        return `<div class="container">
        </div>`;
    }

    getElement() {
        return createElement(this._getTemplate());
    }
}
console.log(AppView);
