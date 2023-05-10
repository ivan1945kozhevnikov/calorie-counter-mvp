import { createElement } from '../utils/render.js';

class ResultView {
    constructor(result, countedResult) {
        this.result = result;
        this.countedResult = countedResult;
        this.element = null;
    }

    _getTemplate() {
        return `<section class="counter__result counter__result--hidden">
        <h2 class="heading">Ваша норма калорий</h2>
        <ul class="counter__result-list">
          ${this.result
              .map(
                  ({ id, description }) =>
                      `<li class="counter__result-item">
          <h3><span id="${id}">${this.countedResult[id]}</span> ккал</h3>
          <p>${description}</p>
        </li>`
              )
              .join('')}
        </ul>
        </section>`;
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this._getTemplate());
        }
        return this.element;
    }
}

export default ResultView;
