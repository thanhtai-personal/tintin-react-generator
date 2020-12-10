import {
  UPDATE_DETAIL_BLOG,
  UPDATE_ACTIVE_TAB
} from './types'

export const updateDetailBlogger = (data) => {
  return {
    type: UPDATE_DETAIL_BLOG,
    payload: data
  }
}

export const updateActiveTab = (data) => {
  return {
    type: UPDATE_ACTIVE_TAB,
    payload: data
  }
}
