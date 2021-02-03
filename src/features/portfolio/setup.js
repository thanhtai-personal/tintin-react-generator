import StoreSingleton from 'root/store/instant'
import portfolioReducer from './reducers/portfolio.reducer'
import portfolioSagas from './sagas'


const setupFeature = () => {
  console.log('++++++++++++SETUP PORTFOLIO+++++++++++++')
  const store = StoreSingleton.getInstance().store
  let mapObject = store.reducerManager.getReducerMap()
  if (!Object.keys(mapObject).includes('portfolio')) {
    console.info('++++++++++++Add new reducer+++++++++++++')
    store.reducerManager.add('portfolio', portfolioReducer)
    store.sagasManager.add('portfolio', portfolioSagas)
    store.updateReducer()
    store.updateSagas()
  }
  console.log('++++++++++++END SETUP PORTFOLIO+++++++++++++')
}

export default setupFeature