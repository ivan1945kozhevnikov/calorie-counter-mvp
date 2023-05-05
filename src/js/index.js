import { render } from './utils/render.js';
import CounterFormModel from './model/CounterFormModel.js';
import AppView from './view/appView.js';
import CounterFormView from './view/CounterFormView.js';
import ResultView from './view/resultView.js';

const main = document.querySelector('.main');
const formModel = new CounterFormModel();
const appView = new AppView();
const formView = new CounterFormView(
    formModel.getGender(),
    formModel.getPhysicalCharacteristics(),
    formModel.getPhysicalActivities(),
    formModel.getSelectedGender()
);
const resultView = new ResultView();

render(main, appView.getElement());
render(appView.getElement(), formView.getElement());
render(appView.getElement(), resultView.getElement());
