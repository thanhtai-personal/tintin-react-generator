import { makeSingleton } from 'root/utils'
import createSagasManager from './manager'

const getSagaInstant = () => {
    const sagasManagerSingleton = makeSingleton(createSagasManager)
    return sagasManagerSingleton.getInstance()
}

export default getSagaInstant