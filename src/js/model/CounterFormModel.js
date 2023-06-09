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
        this._enteredPhysicalCharacteristics = {
            age: '',
            height: '',
            weight: '',
        };
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

    getEnteredPhysicalCharacteristics() {
        return this._enteredPhysicalCharacteristics;
    }
}

export default CounterFormModel;
