import { makeSingleton } from 'root/utils'
import createReducerManager from './manager'

export default (history) => {
    const reducerManagerSingleton = makeSingleton(createReducerManager, history)
    return reducerManagerSingleton.getInstance()
}