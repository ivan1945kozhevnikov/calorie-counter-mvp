import { render } from './utils/render.js';
import {
    gender,
    physicalCharacteristics,
    physicalActivities,
} from './utils/const.js';
import CounterFormModel from './model/CounterFormModel.js';
import AppView from './view/appView.js';
import CounterFormView from './view/CounterFormView.js';
import ResultView from './view/resultView.js';

const main = document.querySelector('.main');
const formModel = new CounterFormModel();
const appView = new AppView();
const formView = new CounterFormView(
    gender,
    physicalCharacteristics,
    physicalActivities
);
const resultView = new ResultView();
console.log(formModel);

render(main, appView.getElement());
render(appView.getElement(), formView.getElement());
render(appView.getElement(), resultView.getElement());
