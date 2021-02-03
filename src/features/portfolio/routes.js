import PortfolioContainer from './containers/portfolio'
// import setUpFeature from './setup'

const portfolioRoutes = [
  {
    key: 'default',
    path: '/',
    isExact: true,
    component: PortfolioContainer,
    hocs: [],
    // setUpStore: setUpFeature
  },
  {
    key: 'profilev2',
    path: '/profile',
    isExact: true,
    component: PortfolioContainer,
    hocs: [],
    // setUpStore: setUpFeature
  },
]

export default portfolioRoutes