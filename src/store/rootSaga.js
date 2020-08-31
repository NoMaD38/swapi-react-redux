import {fork} from 'redux-saga/effects'
import { loadStarshipsSaga } from '../pages/Starships/redux/loadStarshipsSaga'

export function* rootSaga () {
    yield fork(loadStarshipsSaga)
}