import { combineReducers } from "redux";

import { exercisesReducer } from "./exercises";

export const entitiesReducer = combineReducers({
    exercises: exercisesReducer
});
