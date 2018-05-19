import { WeightAction } from '../actions';
import { AppState, Exercise } from '../types';
import { INCREMENT_WEIGHT, DECREMENT_WEIGHT, SET_WEIGHT } from '../constants';

export function weight(state: AppState, action: WeightAction): AppState {
    const { exercise } = state;
    let newExercise: Exercise;

    switch (action.type) {
        case INCREMENT_WEIGHT:
            newExercise = { ...exercise, weight: exercise.weight + 1.25 };
            return { ...state, exercise: newExercise };
        case DECREMENT_WEIGHT:
            newExercise = { ...exercise, weight: exercise.weight - 1.25 };
            return { ...state, exercise: newExercise };
    }

    return state;
}