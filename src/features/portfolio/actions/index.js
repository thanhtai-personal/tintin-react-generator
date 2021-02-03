import {
  PORTFOLIO_ACTION
} from './types'

export const portfolioActions = (key, value) => {
  let payload = {
    [key]: value
  }
  return {
    type: PORTFOLIO_ACTION,
    payload
  }
}
