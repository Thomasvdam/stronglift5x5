import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { History } from 'history';
import { routerMiddleware, routerReducer } from 'react-router-redux';

import { weight } from './reducers';
import { AppState } from './types';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

export default function configureStore(initialState: AppState, history: History) {
    const reducers = combineReducers({
        exercise: weight,
        router: routerReducer,
    });

    const routingMiddleware = routerMiddleware(history);

    const store = window.store || createStore(reducers, composeEnhancers(applyMiddleware(routingMiddleware)))
    window.store = store;

    return store;
}

if (module.hot) {
    module.hot.accept(() => {
        const reducers = combineReducers({
            weight: weight,
            router: routerReducer,
        });

        window.store.replaceReducer(reducers);
    });
}
  