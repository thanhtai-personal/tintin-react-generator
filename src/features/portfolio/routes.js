import PortfolioContainer from './containers/portfolio'
import GridImageContainer from './containers/gridImage'
import { hocKeys } from './utils'
import useLeftSideBar from './hocs/useLeftSideBar'
// import setUpFeature from './setup'

const portfolioRoutes = [
  {
    key: 'default',
    path: '/',
    isExact: true,
    component: GridImageContainer,
    hocs: [
      // { 
        // key: hocKeys.useLeftSideBar,
        // componentHoc: useLeftSideBar
      // }
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
  {
    key: 'grid-image',
    path: '/grid-image',
    isExact: true,
    component: GridImageContainer,
    hocs: [
      // { 
      //   key: hocKeys.useLeftSideBar,
      //   componentHoc: useLeftSideBar
      // }
    ],
    // setUpStore: setUpFeature
  },
]

export default portfolioRoutes