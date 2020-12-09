import StoreSingleton from 'root/store/instant'
import bloggerReducer from './reducers/blogger.reducer'
import bloggerSagas from './sagas'

const setupFeature = () => {
  const store = StoreSingleton.getInstance().store
  let mapObject = store.reducerManager.getReducerMap()
  if (!Object.keys(mapObject).includes('blogger')) {
    store.reducerManager.add('blogger', bloggerReducer)
    store.sagasManager.add('blogger', bloggerSagas)
    store.updateReducer()
    store.updateSagas()
  }
}

export default setupFeature