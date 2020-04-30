import { all,put,takeEvery } from 'redux-saga/effects';

import { actionTypes } from '../common';

function* createSubscriber(request: any) {
    try {
        yield put({ type: actionTypes.ADD_REQUEST_SUCCESS, payload: request.payload });
    }catch (error) {
        console.log('errror',error)
    }
}


export default function* requestRootSaga() {

    yield all([takeEvery(actionTypes.ADD_REQUEST,createSubscriber)]);
}
