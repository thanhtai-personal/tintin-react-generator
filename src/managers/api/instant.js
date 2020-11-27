import { makeSingleton } from 'root/utils'
import createApiManager from './manager'

export default () => {
    const apiManagerSingleton = makeSingleton(createApiManager)
    return apiManagerSingleton.getInstance()
}