import * as constants from '../constants';

export interface IncrementWeight {
    type: constants.INCREMENT_WEIGHT;
}

export interface DecrementWeight {
    type: constants.DECREMENT_WEIGHT;
}

export interface SetWeight {
    type: constants.SET_WEIGHT;
}

export type WeightAction = IncrementWeight | DecrementWeight | SetWeight;

export function incrementWeight(): IncrementWeight {
    return {
        type: constants.INCREMENT_WEIGHT,
    }
}

export function decrementWeight(): DecrementWeight {
    return {
        type: constants.DECREMENT_WEIGHT,
    }
}

export function setWeight(): SetWeight {
    return {
        type: constants.SET_WEIGHT,
    }
}
