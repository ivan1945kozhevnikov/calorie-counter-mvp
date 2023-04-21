import createElement from '../utils/render.js';

class CounterFormView {
    constructor() {
        this.element = this.getElement();
    }

    // eslint-disable-next-line class-methods-use-this
    _getTemplate() {
        return `<article class="counter">
        <h1 class="counter__heading heading-main">Счётчик калорий</h1>
        <form
        class="counter__form form"
        name="counter"
        action="#"
         method="post">
        </form>
      </article>`;
    }

    getElement() {
        return createElement(this._getTemplate());
    }
}
console.log(CounterFormView);
