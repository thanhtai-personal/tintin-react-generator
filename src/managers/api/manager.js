
import apiInstant from 'root/api/instant'

function combineApi(apis) {
    const combinedApi = {}
    Object.keys(apis).forEach((key) => {
        if (Array.isArray(apis[key])) {
            apis[key].forEach((apiObj) => {
                /*
                  apiObj.method:
                    axios.request(config)
                    axios.get(url[, config])
                    axios.delete(url[, config])
                    axios.head(url[, config])
                    axios.options(url[, config])
                    axios.post(url[, data[, config]])
                    axios.put(url[, data[, config]])
                    axios.patch(url[, data[, config]])
                */
                combinedApi[apiObj.name] = (data, config = {}) => {
                    return apiInstant[apiObj.method](apiObj.path, data, { ...config, method: apiObj.method })
                }
            })
        }
    })
    return combinedApi
}


export default function apiManager() {
    // Create an object which maps keys to reducers
    let apis = {}
  
    // Create the initial combinedReducer
    let combinedApi = combineApi(apis)
  
    return {
      getApisMap: () => apis,
  
      // getCombinedApis: () => combinedApi,
  
      call: (apiName, data, config) => {
        return combinedApi[apiName](data, config)
      },
  
      // The root reducer function exposed by this object
      // This will be passed to the store
      reduce: () => {
        return combinedApi
      },
  
      // Adds a new reducer with the specified key
      add: (key, api) => {
        if (!key || apis[key]) {
          return
        }
  
        // Add the reducer to the reducer mapping
        apis[key] = api
  
        // Generate a new combined reducer
        combinedApi = combineApi(apis)
      },
  
      // Removes a reducer with the specified key
      remove: key => {
        if (!key || !apis[key]) {
          return
        }
  
        // Remove it from the reducer mapping
        delete apis[key]
  
        // Generate a new combined reducer
        combinedApi = combineApi(apis)
      }
    }
  }
  
  export default apiManager