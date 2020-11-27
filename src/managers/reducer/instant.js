import { makeSingleton } from 'root/utils'
import createReducerManager from './manager'

const getReducerInstant = (history) => {
    const reducerManagerSingleton = makeSingleton(createReducerManager, history)
    return reducerManagerSingleton.getInstance()
}

export default getReducerInstant