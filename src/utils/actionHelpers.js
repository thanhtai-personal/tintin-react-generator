
const makeSagasActionType =  (actionType) => {
  return {
    SUCCESS: `${actionType}_SUCCESS`,
    FAILED: `${actionType}_FAILED`,
  }
}

export default {
  makeSagasActionType
}