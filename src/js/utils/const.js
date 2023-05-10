const gender = [
    {
        id: 'gender-male',
        value: 'male',
        label: 'Мужчина',
    },
    {
        id: 'gender-female',
        value: 'female',
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
        label: ' Минимальная',
        description: 'Сидячая работа и нет физических нагрузок',
    },
    {
        id: 'activity-low',
        value: 'low',
        label: 'Низкая',
        description: 'Редкие, нерегулярные тренировки, активность в быту',
    },
    {
        id: 'activity-medium',
        value: 'medium',
        label: 'Средняя',
        description: 'Тренировки 3-5 раз в неделю',
    },
    {
        id: 'activity-high',
        value: 'high',
        label: ' Высокая',
        description: 'Тренировки 6-7 раз в неделю',
    },
    {
        id: 'activity-maximal',
        value: 'max',
        label: 'Очень высокая',
        description: 'Больше 6 тренировок в неделю и физическая работа',
    },
];
const result = [
    {
        id: 'calories-norm',
        description: 'поддержание веса',
    },
    {
        id: 'calories-minimal',
        description: 'снижение веса',
    },
    {
        id: 'calories-maximal',
        description: 'набор веса',
    },
];

export { gender, physicalCharacteristics, physicalActivities, result };
