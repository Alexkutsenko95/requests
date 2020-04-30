import { actionTypes, IRequest } from '../common';

export const addRequest = (request: IRequest): any => ({
    type: actionTypes.ADD_REQUEST,
    payload: request
});

export const removeRequest = (index: number): any => ({
    type: actionTypes.REMOVE_REQUEST,
    payload: index
});
