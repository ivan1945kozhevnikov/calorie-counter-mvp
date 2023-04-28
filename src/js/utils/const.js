const gender = [
    {
        id: 'gender-male',
        value: 'male',
        checked: true,
        label: 'Мужчина',
    },
    {
        id: 'gender-female',
        value: 'female',
        checked: false,
        label: 'Женщина',
    },
];
const physicalCharacteristics = [
    {
        id: 'age',
        name: 'age',
        label: 'Возраст',
        unit: 'лет',
    },
    {
        id: 'height',
        name: 'height',
        label: 'Рост',
        unit: 'см',
    },
    {
        id: 'weight',
        name: 'weight',
        label: 'Вес',
        unit: 'кг',
    },
];
const physicalActivities = [
    {
        id: 'activity-minimal',
        value: 'min',
        checked: true,
        label: ' Минимальная',
        description: 'Сидячая работа и нет физических нагрузок',
    },
    {
        id: 'activity-low',
        value: 'low',
        checked: false,
        label: 'Низкая',
        description: 'Редкие, нерегулярные тренировки, активность в быту',
    },
    {
        id: 'activity-medium',
        value: 'medium',
        checked: false,
        label: 'Средняя',
        description: 'Тренировки 3-5 раз в неделю',
    },
    {
        id: 'activity-high',
        value: 'high',
        checked: false,
        label: ' Высокая',
        description: 'Тренировки 6-7 раз в неделю',
    },
    {
        id: 'activity-maximal',
        value: 'max',
        checked: false,
        label: 'Очень высокая',
        description: 'Больше 6 тренировок в неделю и физическая работа',
    },
];

export { gender, physicalCharacteristics, physicalActivities };
