import StoreSingleton from 'root/store/instant'
import defaultReducer from './reducers/default.reducer'
import defaultSagas from './sagas'


const setupFeature = () => {
  console.log('++++++++++++SETUP DEFAULT+++++++++++++')
  const store = StoreSingleton.getInstance().store
  let mapObject = store.reducerManager.getReducerMap()
  if (!Object.keys(mapObject).includes('default')) {
    console.info('++++++++++++Add new reducer+++++++++++++')
    store.reducerManager.add('default', defaultReducer)
    store.sagasManager.add('default', defaultSagas)
    store.updateReducer()
    store.updateSagas()
  }
  console.log('++++++++++++END SETUP DEFAULT+++++++++++++')
}

export default setupFeature