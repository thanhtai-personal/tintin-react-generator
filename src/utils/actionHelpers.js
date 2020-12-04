
const makeSagasActionType =  (actionType) => {
  return {
    SUCCESS: `${actionType}_SUCCESS`,
    FAILED: `${actionType}_FAILED`,
  }
}

// eslint-disable-next-line
export default {
  makeSagasActionType
}