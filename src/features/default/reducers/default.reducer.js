
import Utils from 'root/utils'
import {
  DEFAULT_ACTION,
} from '../actions/types'

const initalState = {
  title: 'default'
}

const defaultReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case DEFAULT_ACTION:
      
      return {
        ...state,
        ...payload
      }
    case Utils.makeSagasActionType(DEFAULT_ACTION).SUCCESS:
      return {
        ...state,
        ...payload
      }
    case Utils.makeSagasActionType(DEFAULT_ACTION).FAILED:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

export default defaultReducer