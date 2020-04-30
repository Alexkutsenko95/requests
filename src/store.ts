import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import { rootReducers } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore