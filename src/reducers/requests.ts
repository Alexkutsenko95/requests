import { actionTypes, BaseAction } from '../common';


interface IRequest {
    text: string;
    delay: number;
    id: number,
}

interface Requests {
    list: Array<IRequest> ;
    loading: false
}

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
            console.log('state::>',state);
            return {...state, loading: true};
        case actionTypes.ADD_REQUEST_SUCCESS:
            console.log('action:: REDUCER  >',action);
            return {...state, loading: false, list: [...state.list, action.payload]};

        default:
            return state;
    }

};

const handleAddRequest = (
    state: any,
    newRequests: any
): RequestsState => {

    return initialState;
};