import { makeSingleton } from 'root/utils'
import createApisIntant from './manager'

export default () => {
    const apiManagerSingleton = makeSingleton(createApisIntant)
    return apiManagerSingleton.getInstance()
}