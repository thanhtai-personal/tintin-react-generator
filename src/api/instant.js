import axios from 'axios'

import { makeSingleton } from 'root/utils'
import devConfig from './devConfig'
import prodConfig from './prodConfig'


const getApiInstant = function({ config = null, isReplaceConfig = false }){
  // check if instance is available
  if (!apiInstant || isReplaceConfig) {
    apiInstant = axios.create(config || defaultConfig);
    // delete apiInstant.constructor; 
  }
  return apiInstant;
}

export default (config, isReplaceConfig) => {
    let defaultConfig = devConfig
    if (process.env.NODE_ENV === 'production') {
      defaultConfig = prodConfig
    }
    const apiManagerSingleton = makeSingleton(getApiInstant, { config, isReplaceConfig })
    return apiManagerSingleton.getInstance()
}