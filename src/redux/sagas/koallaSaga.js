import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* getKoallas() {
    const response = yield call(axios.get, '/koalla');
    yield put({type: 'SET_KOALLAS', payload: response});
}

function* koallaSaga() {
    yield takeLatest('GET_KOALLAS', getKoallas);
    
  }

  export default koallaSaga;