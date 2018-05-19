import { WeightAction } from '../actions';
import { AppState, Exercise } from '../types';
import { INCREMENT_WEIGHT, DECREMENT_WEIGHT, SET_WEIGHT } from '../constants';

const initialState: Exercise = {
    name: 'squat',
    weight: 90,
    history: [],
}

export function weight(exercise: Exercise = initialState, action: WeightAction): Exercise {
    let newExercise: Exercise;

    switch (action.type) {
        case INCREMENT_WEIGHT:
            newExercise = { ...exercise, weight: exercise.weight + 1.25 };
            return newExercise;
        case DECREMENT_WEIGHT:
            newExercise = { ...exercise, weight: exercise.weight - 1.25 };
            return newExercise;
    }

    return exercise;
}
