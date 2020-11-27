import { makeSingleton } from 'root/utils'
import createAppRoutesIntant from './manager'

export default () => {
    const appRouteManagerSingleton = makeSingleton(createAppRoutesIntant)
    return appRouteManagerSingleton.getInstance()
}