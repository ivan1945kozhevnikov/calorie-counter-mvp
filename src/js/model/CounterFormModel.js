import {
    gender,
    physicalCharacteristics,
    physicalActivities,
} from '../utils/const.js';

class CounterFormModel {
    constructor() {
        this.genderValue = null;
        this.physicalCharacteristicValue = null;
        this.physicalActivityValue = null;
    }

    _findGenderValue() {
        this.genderValue = gender;
        return this.genderValue;
    }

    _findPhysicalCharacteristicsValue() {
        this.physicalCharacteristicValue = physicalCharacteristics;
        return this.physicalCharacteristicValue;
    }

    _findPhysicalActivitiesValue() {
        this.physicalActivityValue = physicalActivities;
        return this.physicalActivityValue;
    }
}

export default CounterFormModel;
