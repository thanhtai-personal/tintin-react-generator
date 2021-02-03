

import Utils from 'root/utils'
import {
  //put
  takeLatest
  , all
  , put
} from 'redux-saga/effects'

import {
  PORTFOLIO_ACTION
} from './../actions/types'
import { portfolioApiNames } from './../apis'
import apiManagerInstant from 'root/managers/api/instant'

const apiManager = apiManagerInstant()

function* portfolioSaga(action = {}) {
  const portfolioRes = yield apiManager.call(portfolioApiNames.portfolio, action.payload || {}).then(response => response)
  yield put({ type: Utils.makeSagasActionType(PORTFOLIO_ACTION).SUCCESS, payload: portfolioRes || {} })
}

export default function* portfolioWatcher() {
  yield all([
    takeLatest(PORTFOLIO_ACTION, portfolioSaga)
  ])
}
