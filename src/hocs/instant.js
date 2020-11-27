import { makeSingleton } from 'root/utils'
import createHocsInstant from './manager'

export default () => {
    const hocsManagerSingleton = makeSingleton(createHocsInstant)
    return hocsManagerSingleton.getInstance()
}