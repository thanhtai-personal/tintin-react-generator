import {
  UPDATE_DETAIL_BLOG
} from './types'

export const updateDetailBlogger = (data) => {
  return {
    type: UPDATE_DETAIL_BLOG,
    payload: data
  }
}
