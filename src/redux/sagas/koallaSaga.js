import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* getKoallas() {
    const response = yield call(axios.get, '/koalla');
}

function* addGamesSaga() {
    yield takeLatest('GET_KOALLAS', getKoallas);
    
  }

  export default koallaSaga;