
import Utils from 'root/utils'
import {
  PORTFOLIO_ACTION,
} from '../actions/types'

const initalState = {
}

const defaultReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case PORTFOLIO_ACTION:
      return {
        ...state,
        ...payload
      }
    case Utils.makeSagasActionType(PORTFOLIO_ACTION).SUCCESS:
      return {
        ...state,
        ...payload
      }
    case Utils.makeSagasActionType(PORTFOLIO_ACTION).FAILED:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

export default defaultReducer