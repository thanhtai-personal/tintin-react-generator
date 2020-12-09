import {
  BLOGGER_ACTION
} from './types'

export const bloggertAction = (key, value) => {
  let payload = {
    [key]: value
  }
  return {
    type: BLOGGER_ACTION,
    payload
  }
}
