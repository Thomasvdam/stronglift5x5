import * as constants from '../constants';

export interface IncrementWeight {
    type: constants.INCREMENT_WEIGHT;
    payload: {
        id: number;
    };
}

export interface DecrementWeight {
    type: constants.DECREMENT_WEIGHT;
    payload: {
        id: number;
    };
}

export interface SetWeight {
    type: constants.SET_WEIGHT;
    payload: {
        id: number;
        newWeight: number;
    };
}

export type WeightAction = IncrementWeight | DecrementWeight | SetWeight;

export function incrementWeight(id: number): IncrementWeight {
    return {
        type: constants.INCREMENT_WEIGHT,
        payload: {
            id,
        },
    };
};

export function decrementWeight(id: number): DecrementWeight {
    return {
        type: constants.DECREMENT_WEIGHT,
        payload: {
            id,
        },
    };
};

export function setWeight(id: number, newWeight: number): SetWeight {
    return {
        type: constants.SET_WEIGHT,
        payload: {
            id,
            newWeight,
        },
    };
};
