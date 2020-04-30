import { all,put,takeEvery } from 'redux-saga/effects';

import { actionTypes } from '../common';

function* postRequest(request: any) {
    try {
        yield put({ type: actionTypes.ADD_REQUEST_SUCCESS, payload: request.payload });
    }catch (error) {
        console.log('error',error)
    }
}

function* removeRequest(request: any) {
    try {
        yield put({ type: actionTypes.REMOVE_REQUEST_SUCCESS, payload: request.payload });
    }catch (error) {
        console.log('error',error)
    }
}


export default function* requestRootSaga() {
    yield all([takeEvery(actionTypes.ADD_REQUEST,postRequest),
        takeEvery(actionTypes.REMOVE_REQUEST,removeRequest)]);
}
