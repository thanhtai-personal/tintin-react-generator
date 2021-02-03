import HomeContainer from './containers/home'
import setUpFeature from './setup'

const defaultRoutes = [
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