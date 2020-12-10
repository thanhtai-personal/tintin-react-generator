import StoreSingleton from 'root/store/instant'
import bloggerReducer from './reducers/blogger.reducer'
import bloggerSagas from './sagas'

const setupFeature = () => {
  console.log('++++++++SETUP BLOGGER+++++++')
  const store = StoreSingleton.getInstance().store
  let mapObject = store.reducerManager.getReducerMap()
  if (!Object.keys(mapObject).includes('blogger')) {
    console.info('===========Add new reducer========')
    store.reducerManager.add('blogger', bloggerReducer)
    store.sagasManager.add('blogger', bloggerSagas)
    store.updateReducer()
    store.updateSagas()
  }
  console.log('++++++++SETUP BLOGGER SUCCESS+++++++')
}

export default setupFeature