import { makeSingleton } from 'root/utils'
import createHocsManager from './manager'

const getHocsInstant = () => {
    const hocsManagerSingleton = makeSingleton(createHocsManager)
    return hocsManagerSingleton.getInstance()
}

export default getHocsInstant