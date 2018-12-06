import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* getKoallas() {
    try{
    const response = yield call(axios.get, '/koalla');
    yield put({type: 'SET_KOALLAS', payload: response.data});
    }
    catch (error){
        console.log('error getting the koalls');
    }
}

function* addKoallas(action) {
    console.log('in addKoallas saga', action.payload);
    try{
    yield call(axios.post, '/koalla', {data: action.payload});
    yield put({type: 'GET_KOALLAS'});
    }
    catch (error){
        console.log('error getting the koalls');
    }
}

function* deleteBear(action) {
    console.log('in deleteBear saga', action.payload);
    try{
    yield call(axios.delete, `/koalla/${action.payload}`);
    yield put({type: 'GET_KOALLAS'});
    }
    catch (error){
        console.log('error getting the koalls');
    }
}

function* koallaSaga() {
    yield takeLatest('GET_KOALLAS', getKoallas);
    yield takeLatest('ADD_KOALLA', addKoallas);
    yield takeLatest('DELETE_BEAR', deleteBear);
  }

  export default koallaSaga;