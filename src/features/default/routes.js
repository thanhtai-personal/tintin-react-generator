import HomeContainer from './containers/home'

const defaultRoutes = [
  {
    key: 'default',
    path: '/',
    isExact: true,
    component: HomeContainer,
    hocs: []
  },
  {
    key: 'home',
    path: '/home',
    isExact: true,
    component: HomeContainer,
    hocs: []
  }
]

export default defaultRoutes