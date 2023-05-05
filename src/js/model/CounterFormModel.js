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
        this._selectedGender = 'male';
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

    getSelectedGender() {
        return this._selectedGender;
    }
}

export default CounterFormModel;
