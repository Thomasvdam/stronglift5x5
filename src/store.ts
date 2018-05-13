import { createStore } from 'redux';
import { weight } from './reducers';
import { AppState } from './types';

export default function configureStore(initialState:AppState) {
    const store = window.store || createStore(weight, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    window.store = store;

    return store;
}

  