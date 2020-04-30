export const actionTypes = {
    ADD_REQUEST:
        'ADD_REQUEST',
    ADD_REQUEST_SUCCESS:
        'ADD_REQUEST_SUCCESS',
    REMOVE_REQUEST:
        'REMOVE_REQUEST',
    REMOVE_REQUEST_SUCCESS:
        'REMOVE_REQUEST_SUCCESS',
};

export interface BaseAction {
    type: string;
    payload?: any;
}


export interface IRequest {
    text: string;
    delay: number;
    id: number;
}

export interface IList {
    list: Array<IRequest> ;
}