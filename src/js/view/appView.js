import { createElement } from '../utils/render.js';

class AppView {
    constructor() {
        this.element = null;
    }

    // eslint-disable-next-line class-methods-use-this
    _getTemplate() {
        return `<div class="container">
        </div>`;
    }

    getElement() {
        this.element = createElement(this._getTemplate());
        return this.element;
    }
}

export default AppView;
