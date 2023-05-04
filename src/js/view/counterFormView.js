import { createElement } from '../utils/render.js';

class CounterFormView {
    constructor(
        gender,
        physicalCharacteristics,
        physicalActivities,
        valueGender
    ) {
        this.gender = gender;
        this.physicalCharacteristics = physicalCharacteristics;
        this.physicalActivities = physicalActivities;
        this.valueGender = valueGender;
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
                 .map(({ id, value, label }) => {
                     if (value === this.valueGender) {
                         return `<li class="switcher__item">
                        <input 
                          id = "${id}" 
                          name = "gender" 
                          value = "${value}"
                          type = "radio" 
                          checked
                          required
                        />
                        <label for="gender-male"> ${label} </label></li>`;
                     }
                     return `<li class="switcher__item">
                     <input 
                       id = "${id}" 
                       name = "gender" 
                       value = "${value}"
                       type = "radio"
                       required
                     />
                     <label for="gender-male"> ${label} </label></li>`;
                 })
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
            <div class="form__submit">
            <button
              class="form__submit-button button"
              name="submit"
              type="submit"
              disabled
            >
              Рассчитать
            </button>
            <button
              class="form__reset-button"
              name="reset"
              type="reset"
              disabled
            >
              <svg
                width="24"
                height="24"
                viewbox="0 0 24 24"
                fill="#FD3636"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z"
                />
              </svg>
              <span> Очистить поля и расчёт </span>
            </button>
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
