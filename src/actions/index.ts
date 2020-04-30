import { actionTypes, IRequest } from '../common';

export const addRequest = (request: IRequest): any => ({
    type: actionTypes.ADD_REQUEST,
    payload: request
});
