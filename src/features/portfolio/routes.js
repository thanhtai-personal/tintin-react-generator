import PortfolioContainer from './containers/portfolio'
import { hocKeys } from './utils'
import useLeftSideBar from './hocs/useLeftSideBar'
// import setUpFeature from './setup'

const portfolioRoutes = [
  {
    key: 'default',
    path: '/',
    isExact: true,
    component: PortfolioContainer,
    hocs: [
      { 
        key: hocKeys.useLeftSideBar,
        componentHoc: useLeftSideBar
      }
    ],
    // setUpStore: setUpFeature
  },
  {
    key: 'profilev2',
    path: '/profile',
    isExact: true,
    component: PortfolioContainer,
    hocs: [
      { 
        key: hocKeys.useLeftSideBar,
        componentHoc: useLeftSideBar
      }
    ],
    // setUpStore: setUpFeature
  },
]

export default portfolioRoutes