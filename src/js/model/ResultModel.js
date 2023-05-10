import { result } from '../utils/const.js';

class ResultModel {
    constructor() {
        this._result = result;
        this._CountedResult = {
            'calories-norm': '3800',
            'calories-minimal': '3300',
            'calories-maximal': '4000',
        };
    }

    getCountedResult() {
        return this._CountedResult;
    }

    getResult() {
        return this._result;
    }
}

export default ResultModel;
