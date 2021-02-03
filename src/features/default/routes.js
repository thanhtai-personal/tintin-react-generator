import HomeContainer from './containers/home'
import setUpFeature from './setup'

const defaultRoutes = [
  /**
   * when add setUpFeature property to route, this route will not lazy load store data.
   * Mean is data of route(reducer, api, sagas) in store will be loaded from building time.
   */
  {
    key: 'profilev1',
    path: '/profilev1',
    isExact: true,
    component: HomeContainer,
    hocs: [],
    // setUpStore: setUpFeature 
  },
  {
    key: 'home',
    path: '/home',
    isExact: true,
    component: HomeContainer,
    hocs: [],
    setUpStore: setUpFeature
  },
  // {
  //   key: 'default',
  //   path: '/',
  //   isExact: true,
  //   component: HomeContainer,
  //   hocs: [],
  //   setUpStore: setUpFeature
  // },
]

export default defaultRoutes