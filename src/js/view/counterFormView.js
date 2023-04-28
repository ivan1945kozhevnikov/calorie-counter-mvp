import { createElement } from '../utils/render.js';

class CounterFormView {
    constructor(gender, physicalCharacteristics, physicalActivities) {
        this.gender = gender;
        this.physicalCharacteristics = physicalCharacteristics;
        this.physicalActivities = physicalActivities;
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
             ${this.gender
                 .map(
                     ({ id, value, checked, label }) =>
                         `<li class="switcher__item">
        <input 
          id = "${id}" 
          name = "gender" 
          value = "${value}"
          type = "radio" 
          checked = ${checked}
          required
        />
        <label for="gender-male"> ${label} </label></li>`
                 )
                 .join('')}
              </ul>
              </div>
              <fieldset class="form__item form__parameters" name="parameters">
              <legend class="visually-hidden">Физические параметры</legend>
              <div class="inputs-group">
              ${this.physicalCharacteristics
                  .map(
                      ({ id, name, label, unit }) =>
                          `<div class="input">
                <div class="input__heading">
                  <label class="heading" for="age"> ${label} </label>
                  <span class="input__heading-unit"> ${unit} </span>
                </div>
                <div class="input__wrapper">
                  <input
                    type="text"
                    id="${id}"
                    name="${name}"
                    placeholder="0"
                    inputmode="decimal"
                    maxlength="3"
                    required
                  />
                </div>
              </div>`
                  )
                  .join('')}
              </div>
              </fieldset>
              <fieldset class="form__item">
              <legend class="heading">Физическая активность</legend>
              <ul class="radios-group">
              ${this.physicalActivities
                  .map(
                      ({ id, value, checked, label, description }) =>
                          `<li class="radio">
                <div class="radio__wrapper">
                  <input
                    id="${id}"
                    name="activity"
                    value="${value}"
                    type="radio"
                    checked=${checked}} 
                    required
                  />
                  <label for="activity-minimal"> ${label} </label>
                </div>
                <p class="radio__description">
                  ${description}
                </p>
              </li>`
                  )
                  .join('')}
              </ul>
            </fieldset>
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
