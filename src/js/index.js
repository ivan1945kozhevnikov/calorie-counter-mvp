import { render } from './utils/render.js';
import CounterFormModel from './model/CounterFormModel.js';
import ResultModel from './model/ResultModel.js';
import AppView from './view/appView.js';
import CounterFormView from './view/counterFormView.js';
import ResultView from './view/resultView.js';

const main = document.querySelector('.main');
const formModel = new CounterFormModel();
const resultModel = new ResultModel();
const appView = new AppView();
const formView = new CounterFormView(
    formModel.getGender(),
    formModel.getPhysicalCharacteristics(),
    formModel.getPhysicalActivities(),
    formModel.getSelectedGender(),
    formModel.getSelectedPhysicalActivity(),
    formModel.getEnteredPhysicalCharacteristics()
);
const resultView = new ResultView(
    resultModel.getResult(),
    resultModel.getCountedResult()
);

render(main, appView.getElement());
render(appView.getElement(), formView.getElement());
render(appView.getElement(), resultView.getElement());
