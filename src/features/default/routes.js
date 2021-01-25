import HomeContainer from './containers/home'
import setUpFeature from './setup'

const defaultRoutes = [
  {
    key: 'default',
    path: '/profile',
    isExact: true,
    component: HomeContainer,
    hocs: [],
    setUpStore: setUpFeature
  },
  {
    key: 'home',
    path: '/home',
    isExact: true,
    component: HomeContainer,
    hocs: [],
    setUpStore: setUpFeature
  },
  {
    key: 'default',
    path: '/',
    isExact: true,
    component: HomeContainer,
    hocs: [],
    setUpStore: setUpFeature
  },
]

export default defaultRoutes