

import Utils from 'root/utils'
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
import apiManagerInstant from 'root/managers/api/instant'

const apiManager = apiManagerInstant()

function* defaultSaga(action = {}) {
  const defaultRes = yield apiManager.call(defaultApiNames.default, action.payload || {}).then(response => response)
  yield put({ type: Utils.makeSagasActionType(DEFAULT_ACTION).SUCCESS, payload: defaultRes || {} })
}

export default function* defaultWatcher() {
  yield all([
    takeLatest(DEFAULT_ACTION, defaultSaga)
  ])
}
