import { all, fork } from 'redux-saga/effects';
import requestRootSaga from './requests';

export default function* rootSaga() {
    yield all([fork(requestRootSaga)]);
};