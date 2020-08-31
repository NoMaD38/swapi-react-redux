import {takeLatest, call, put} from 'redux-saga/effects'
import { GET_STARSHIPS } from './actionTypes'
import { getURLsStarships } from '../../../utils/api'
import { setStarships, setSelectStarships } from './action'

export function* loadStarshipsSaga(){
    yield takeLatest(GET_STARSHIPS, loadStarshipsFlow)
}

function* loadStarshipsFlow(){
    const starships = yield call(getURLsStarships)
    yield put(setSelectStarships(starships))
    yield put(setStarships(starships))
}