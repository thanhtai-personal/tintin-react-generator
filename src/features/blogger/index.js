

import Utils from 'root/utils'
import {
  //put
  takeLatest
  , all
  , put
} from 'redux-saga/effects'

import {
  BLOGGER_ACTION
} from './../actions/types'
import { bloggerApiNames } from './../apis'
import apiManagerInstant from 'root/managers/api/instant'

const apiManager = apiManagerInstant()

function* defaultSaga(action = {}) {
  const defaultRes = yield apiManager.call(bloggerApiNames.blog, action.payload || {}).then(response => response)
  yield put({ type: Utils.makeSagasActionType(BLOGGER_ACTION).SUCCESS, payload: defaultRes || {} })
}

export default function* defaultWatcher() {
  yield all([
    takeLatest(BLOGGER_ACTION, defaultSaga)
  ])
}
