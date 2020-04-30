import { combineReducers } from 'redux';
import {
    requestsReducer,
    RequestsState,
} from './requests';

export interface State {
    requestsReducer: RequestsState;
}

export const rootReducers = combineReducers<State>({
    requestsReducer: requestsReducer,
});