import { makeSingleton } from 'root/utils'
import createAppRouteManager from './manager'

const getAppRouteInstant = () => {
    const appRouteManagerSingleton = makeSingleton(createAppRouteManager)
    return appRouteManagerSingleton.getInstance()
}

export default getAppRouteInstant