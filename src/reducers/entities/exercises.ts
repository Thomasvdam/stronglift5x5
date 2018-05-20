import { Exercise, Status } from "../../types";
import { ExerciseAction } from '../../actions';
import { SetWeight } from '../../actions/weightActions';
import { INCREMENT_WEIGHT, DECREMENT_WEIGHT, SET_WEIGHT } from '../../constants';

interface ExercisesState {
    [key: number]: Exercise;
};

const intialState:ExercisesState = {
    0: {
        id: 0,
        name: 'Squat',
        weight: 100,
        history: [],
    },
    1: {
        id: 1,
        name: 'Bench Press',
        weight: 80,
        history: [],
    },
    2: {
        id: 2,
        name: 'Barbell Row',
        weight: 40,
        history: [],
    },
    3: {
        id: 3,
        name: 'Overhead Press',
        weight: 30,
        history: [],
    },
    4: {
        id: 4,
        name: 'Deadlift',
        weight: 95,
        history: []
    }
}

function updateWeight(state: ExercisesState, exercise: Exercise, modifier: number) {
    return {
        ...state,
        [exercise.id]: {
            ...exercise,
            weight: exercise.weight + modifier,
        },
    };
}

export function exercisesReducer(state:ExercisesState = intialState, action: ExerciseAction) {
    const {payload} = action;

    if (!payload) {
        return state;
    }

    const exercise = state[payload.id];

    switch (action.type) {
        case INCREMENT_WEIGHT:
            return updateWeight(state, exercise, 1.25);
        case DECREMENT_WEIGHT:
            return updateWeight(state, exercise, -1.25);
        case SET_WEIGHT:
            const {newWeight} = action.payload;
            return {
                ...state,
                [exercise.id]: {
                    ...exercise,
                    weight: newWeight,
                },
            };
    }

    return state;
}

