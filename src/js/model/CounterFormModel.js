import {
    gender,
    physicalCharacteristics,
    physicalActivities,
} from '../utils/const.js';

class CounterFormModel {
    constructor() {
        this._gender = gender;
        this._physicalCharacteristics = physicalCharacteristics;
        this._physicalActivities = physicalActivities;
        this._valueGender = this._gender[0].value;
    }

    getGender() {
        return this._gender;
    }

    getPhysicalCharacteristics() {
        return this._physicalCharacteristics;
    }

    getPhysicalActivities() {
        return this._physicalActivities;
    }

    getvalueGender() {
        return this._valueGender;
    }
}

export default CounterFormModel;
