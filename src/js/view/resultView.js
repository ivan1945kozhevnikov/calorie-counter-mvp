import { createElement } from '../utils/render.js';

class ResultView {
    constructor() {
        this.element = null;
    }

    // eslint-disable-next-line class-methods-use-this
    _getTemplate() {
        return ` <section class="counter__result counter__result--hidden">
        <h2 class="heading">Ваша норма калорий</h2>
        <ul class="counter__result-list">
          <li class="counter__result-item">
            <h3><span id="calories-norm">3 800</span> ккал</h3>
            <p>поддержание веса</p>
          </li>
          <li class="counter__result-item">
            <h3>
              <span id="calories-minimal">3 300</span>
              ккал
            </h3>
            <p>снижение веса</p>
          </li>
          <li class="counter__result-item">
            <h3>
              <span id="calories-maximal">4 000</span>
              ккал
            </h3>
            <p>набор веса</p>
          </li>
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
