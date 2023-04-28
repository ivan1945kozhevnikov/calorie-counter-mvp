import { createElement } from '../utils/render.js';

class CounterFormView {
    constructor(array) {
        this.array = array;
        this.element = null;
    }

    _getTemplate() {
        return `<article class="counter">
        <h1 class="counter__heading heading-main">Счётчик калорий</h1>
        <form
        class="counter__form form"
        name="counter"
        action="#"
         method="post">
         <div class="form__item">
              <h2 class="heading">Пол</h2>
              <ul class="switcher">
             ${this.array
                 .map(
                     (item) =>
                         `<li class="switcher__item">
            <input 
              id = "${item.id}" 
              name = "gender" 
              value = "${item.value}"
              type = "radio" 
              checked = ${item.checked}
              required
            />
            <label for="gender-male"> ${item.label} </label></li>`
                 )
                 .join('')}
              </ul>
              </div>
        </form>
      </article>`;
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this._getTemplate());
        }
        return this.element;
    }
}

export default CounterFormView;
