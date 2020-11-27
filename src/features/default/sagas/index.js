

import { 
  //put
  takeLatest
  , all
  , put
} from 'redux-saga/effects'

import {
  DEFAULT_ACTION
} from './../actions/types'
import { defaultApiNames } from './../apis'
import apiManager from 'root/manager/apis'

const APIManager = apiManager()

function* defaultSaga(action = {}) {
  const defaultRes = yield APIManager.call(defaultApiNames.default, action.payload || {}).then(response => response)
  yield put({ type: makeSagasActionType(DEFAULT_ACTION).SUCCESS, payload: defaultRes || {} })
}

export default function* defaultWatcher() {
  yield all([
    takeLatest(DEFAULT_ACTION, defaultSaga)
  ])
}
