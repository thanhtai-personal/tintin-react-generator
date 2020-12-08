
const makeSagasActionType =  (actionType) => {
  return {
    SUCCESS: `${actionType}_SUCCESS`,
    FAILED: `${actionType}_FAILED`,
  }
}

const actionHelper = {
  makeSagasActionType
}

export default actionHelper