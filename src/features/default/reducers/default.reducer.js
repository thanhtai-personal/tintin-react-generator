
import {
  DEFAULT_ACTION,
} from '../actions/types'

const forms = [
  FORM_LOGIN, FORM_REGISTER,
]

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
    case makeSagasActionType(DEFAULT_ACTION).SUCCESS:
      return {
        ...state,
        ...payload
      }
    case makeSagasActionType(DEFAULT_ACTION).FAILED:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

export default defaultReducer