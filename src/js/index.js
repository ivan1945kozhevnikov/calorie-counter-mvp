import { render } from './utils/render.js';
import AppView from './view/appView.js';
import CounterFormView from './view/CounterFormView.js';
import ResultView from './view/resultView.js';

const main = document.querySelector('.main');
const app = new AppView();
const form = new CounterFormView();
const result = new ResultView();

render(main, app.getElement());
render(app.getElement(), form.getElement());
render(main, result.getElement());
