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
        this._selectedPhysicalActivity = 'min';
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

    getSelectedPhysicalActivity() {
        return this._selectedPhysicalActivity;
    }
}

export default CounterFormModel;
