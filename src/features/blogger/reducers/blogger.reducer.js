
import Utils from 'root/utils'
import { BLOGGER_ACTION } from '../actions/types'

const initalState = {
  
}

const bloggerReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case BLOGGER_ACTION:
      return {
        ...state,
        ...payload
      }
    case Utils.makeSagasActionType(BLOGGER_ACTION).SUCCESS:
      return {
        ...state,
        ...payload
      }
    case Utils.makeSagasActionType(BLOGGER_ACTION).FAILED:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

export default bloggerReducer