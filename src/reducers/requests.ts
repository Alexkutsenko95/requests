import { actionTypes, BaseAction } from '../common';

export type RequestsState = any;

const initialState: RequestsState = {
    list: []
};

export const requestsReducer = (
    state: RequestsState = initialState,
    action: BaseAction
) => {
    switch (action.type) {
        case actionTypes.ADD_REQUEST:
            return {...state, loading: true};
        case actionTypes.ADD_REQUEST_SUCCESS:
            return {...state, loading: false, list: [...state.list, action.payload]};
        case actionTypes.REMOVE_REQUEST:
            return {...state, loading: true};
        case actionTypes.REMOVE_REQUEST_SUCCESS:
            return {...state, loading: false, list: state.list.filter((request: any) => request.id !== action.payload)};

        default:
            return state;
    }
};