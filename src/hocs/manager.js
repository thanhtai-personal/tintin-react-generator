function createHocs() {
  // Create an object which maps keys to reducers
  const hocObj = {}
  // Create the initial combinedReducer
  let hocs = []

  return {
    getHocsMap: () => appRoutes,

    // The root reducer function exposed by this object
    // This will be passed to the store
    reduce: () => {
      return hocs
    },

    // Adds a new reducer with the specified key
    add: (key, hoc) => {
      if (!key || hocObj[key]) {
        return
      }

      // Add the reducer to the reducer mapping
      hocObj[key] = featureRoute

      // Generate a new combined reducer
      hocs = combineRoute(hocObj)
    },

    // Removes a reducer with the specified key
    remove: key => {
      if (!key || !hocObj[key]) {
        return
      }

      // Remove it from the reducer mapping
      delete hocObj[key]

      // Generate a new combined reducer
      hocs = combineRoute(hocObj)
    }
  }
}

export default createHocs