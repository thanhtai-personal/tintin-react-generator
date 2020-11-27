import StoreSingleton from 'root/store/instant'
import defaultReducer from './reducers/default.reducer'
import defaultSagas from './sagas'


const setupFeature = () => {
  const store = StoreSingleton.getInstance().store
  let mapObject = store.reducerManager.getReducerMap()
  if (!Object.keys(mapObject).includes('default')) {
    store.reducerManager.add('default', defaultReducer)
    store.sagasManager.add('default', defaultSagas)
    store.updateReducer()
    store.updateSagas()
  }
}

export default setupFeature